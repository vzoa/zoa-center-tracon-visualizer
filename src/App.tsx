import { makePersisted } from '@solid-primitives/storage';
import { Accessor, Component, createEffect, createMemo, createSignal, DEV, For, Setter, Show, untrack } from 'solid-js';
import { DEFAULT_MAP_STYLE, DEFAULT_SETTINGS, DEFAULT_VIEWPORT } from '~/lib/defaults';
import { Section, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui-core';
import { MapStyleSelector } from '~/components/MapStyleSelector';
import { createStore, produce } from 'solid-js/store';
import { VNAS_VIDEO_MAPS, VNAS_GEO_MAPS, VNAS_VIDEO_MAP_BASE_URL, CENTER_POLY_DEFINITIONS, TRACON_POLY_DEFINITIONS } from '~/lib/config';
import {
  CenterAirspaceDisplayState,
  AppDisplayState,
  CenterAreaDefinition,
  FillPaint,
  PersistedVnasMapState,
  PopupState,
  Settings,
  Procedure,
  TraconAirspaceConfig,
  TraconAirportConfig,
  TraconAreaPolys,
  TraconAirspaceDisplayState,
} from '~/lib/types';
import { Checkbox } from '~/components/ui-core/Checkbox';
import { Footer } from '~/components/Footer';
import { MapReset } from '~/components/MapReset';

// Mapbox
import MapGL from 'solid-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { VnasVideoMaps } from '~/components/VnasVideoMaps';
import { EramGeoMapLayers } from '~/components/EramGeoMapLayers';
import { BaseMapColorSync } from '~/components/BaseMapColorSync';
import { StyleSwitchFix } from '~/components/StyleSwitchFix';
import { GeojsonPolySources } from '~/components/GeojsonPolySources';
import { GeojsonPolyLayers } from '~/components/GeojsonPolyLayers';
import { SectorDisplayWithControls } from '~/components/SectorDisplayWithControls';
import { SettingsDialog } from '~/components/SettingsDialog';
import { GeoJSONFeature, MapMouseEvent } from 'mapbox-gl';
import { getUniqueLayers, isTransparentFill, getGeojsonSources } from '~/lib/geojson';
import { logIfDev } from '~/lib/dev';
import { Pencil, Trash2 } from 'lucide-solid';
import { InfoPopup } from '~/components/InfoPopup';
import { TopMenuBar, OpenMenu } from '~/components/TopMenuBar';
import { AviationOverlayLayers } from '~/components/AviationOverlayLayers';
import { DrawingLayer, DrawingStroke } from '~/components/DrawingLayer';
import { ChartOverlay } from '~/components/ChartOverlay';
import { ShareButton } from '~/components/ShareButton';
import { Coord, Route, RouteInput, RouteProcedureEntry } from '~/lib/routeTypes';
import { buildRoute } from '~/lib/routeBuilder';
import { procedureKey } from '~/lib/procedureGeojson';
import { buildProcedureOverlays, buildRouteOverlay, filterProcedureForRoute, Overlay } from '~/lib/overlay';
import { DisplayedFix, FixCandidate } from '~/lib/fixesTypes';
import { FixFeature } from '~/lib/mapGeometry';
import {
  latLonTokenToFix,
  parseFixRadialDistance,
  resolveFixAllCandidates,
} from '~/lib/routeResolver';
import { FRD_RE } from '~/lib/routeParser';
import { runIfDev } from '~/lib/dev';
import {
  getURLStateParam,
  decodeStateFromURL,
  applyURLStateToDefaults,
  getURLConfigState,
  DEFAULT_CONFIGS,
} from '~/lib/urlState';

const EMPTY_FIX_FEATURES: FixFeature[] = [];

const createCenterDefaultState = (area: CenterAreaDefinition): CenterAirspaceDisplayState => ({
  name: area.name,
  sectors: area.sectors.map((s) => ({
    name: s.sectorName,
    isDisplayed: false,
    color: s.defaultColor,
  })),
});

const createTraconDefaultState = (config: TraconAreaPolys): TraconAirspaceDisplayState => ({
  name: config.name,
  selectedConfig: config.defaultConfig,
  sectors: config.sectorConfigs.map((c) => ({
    name: c.sectorName,
    parentAreaName: config.name,
    isDisplayed: false,
    color: c.defaultColor,
  })),
});

const App: Component = () => {
  const [viewport, setViewport] = makePersisted(createSignal(DEFAULT_VIEWPORT), {
    name: 'viewport',
  });

  const [mapStyle, setMapStyle] = makePersisted(createSignal(DEFAULT_MAP_STYLE), {
    name: 'mapStyle',
  });

  // Invalidate persisted vnasMaps when the config changes (new IDs, or map metadata schema changed).
  // Also refreshes map metadata (name/facility/starsId/bcg) from current config while preserving checked state.
  const storedVnasMaps = localStorage.getItem('vnasMaps');
  if (storedVnasMaps) {
    try {
      const parsed = JSON.parse(storedVnasMaps) as PersistedVnasMapState[];
      const configById = new Map(VNAS_VIDEO_MAPS.map((m) => [m.id, m]));
      const storedIds = new Set(parsed.map((m) => m.id));
      const idMismatch =
        configById.size !== storedIds.size ||
        VNAS_VIDEO_MAPS.some((m) => !storedIds.has(m.id));
      if (idMismatch) {
        localStorage.removeItem('vnasMaps');
      } else {
        // Refresh map metadata from current config, preserve checked state
        const refreshed = parsed.map((entry) => {
          const current = configById.get(entry.id);
          return current ? { ...entry, map: current } : entry;
        });
        localStorage.setItem('vnasMaps', JSON.stringify(refreshed));
      }
    } catch {
      localStorage.removeItem('vnasMaps');
    }
  }

  const [persistedVnasMaps, setPersistedVnasMaps] = makePersisted(
    createStore<PersistedVnasMapState[]>(
      VNAS_VIDEO_MAPS.map((m) => ({
        id: m.id,
        map: m,
        checked: m.showDefault,
      })),
    ),
    { name: 'vnasMaps' },
  );

  // eramFeatures: GeoMap name → all loaded GeoJSON features (union of all mapIds files).
  // undefined = not loaded; [] = loading in progress.
  const [eramFeatures, setEramFeatures] = createStore<Record<string, object[]>>({});
  // eramSelectedBcg: GeoMap name → active 1-based BCG filter values.
  // bcgMenu[N] (0-based) corresponds to bcg value N+1 in the GeoJSON feature properties.
  const [eramSelectedBcg, setEramSelectedBcg] = createStore<Record<string, number[]>>({});
  const [eramColors, setEramColors] = createStore<Record<string, string>>({});
  const [eramBold, setEramBold] = createStore<Record<string, boolean>>({});

  // Defined outside <For> to avoid async closure issues with SolidJS reactivity.
  const loadEramGeoMap = async (name: string, mapIds: string[]) => {
    setEramFeatures(name, []);
    for (const id of mapIds) {
      try {
        const fc = await fetch(`${VNAS_VIDEO_MAP_BASE_URL}/${id}.geojson`).then((r) => r.json());
        const incoming: object[] = fc.features ?? [];
        if (incoming.length > 0) {
          const current = untrack(() => eramFeatures[name] ?? []) as object[];
          setEramFeatures(name, [...current, ...incoming]);
        }
      } catch { /* skip failed files */ }
    }
  };
  const [vnasColors, setVnasColors] = createStore<Record<string, string>>({});
  const [vnasBold, setVnasBold] = createStore<Record<string, boolean>>({});

  const [cursor, setCursor] = createSignal('grab');

  const [settings, setSettings] = makePersisted(createStore<Settings>(DEFAULT_SETTINGS), {
    name: 'settings',
  });

  const centerSources = CENTER_POLY_DEFINITIONS.flatMap((a) =>
    a.sectors.map((s: { sectorName: string; polyUrl: string }) => ({
      id: s.sectorName,
      url: s.polyUrl,
    })),
  );

  const traconSources = TRACON_POLY_DEFINITIONS.flatMap((p) => getGeojsonSources(p.polys));

  const allSources = [...centerSources, ...traconSources];

  const [activeTab, setActiveTab] = createSignal<'tracon' | 'center'>('tracon');

  // Check for URL state parameter and decode it
  const urlStateParam = getURLStateParam();
  const decodedURLState = decodeStateFromURL(urlStateParam);
  const urlConfigState = getURLConfigState(decodedURLState);

  // Create default state
  const defaultDisplayState: AppDisplayState = {
    centerDisplayStates: CENTER_POLY_DEFINITIONS.map(createCenterDefaultState),
    areaDisplayStates: TRACON_POLY_DEFINITIONS.map((p) => createTraconDefaultState(p.polys)),
  };

  // Invalidate persisted state if area names don't match current config
  // (handles renames without requiring users to clear localStorage)
  const storedDisplay = localStorage.getItem('currentDisplay');
  if (storedDisplay) {
    try {
      const parsed = JSON.parse(storedDisplay) as AppDisplayState;
      const expectedCenterNames = CENTER_POLY_DEFINITIONS.map((a) => a.name);
      const expectedTraconNames = TRACON_POLY_DEFINITIONS.map((p) => p.polys.name);
      const storedCenterNames = parsed.centerDisplayStates?.map((s) => s.name) ?? [];
      const storedTraconNames = parsed.areaDisplayStates?.map((s) => s.name) ?? [];

      if (
        expectedCenterNames.some((name, i) => storedCenterNames[i] !== name) ||
        expectedTraconNames.some((name, i) => storedTraconNames[i] !== name)
      ) {
        localStorage.removeItem('currentDisplay');
      }
    } catch {
      localStorage.removeItem('currentDisplay');
    }
  }

  // Create persisted store (will load from localStorage if available)
  const [allStore, setAllStore] = makePersisted(createStore<AppDisplayState>(defaultDisplayState), {
    name: 'currentDisplay',
  });

  // If URL state exists, override whatever makePersisted loaded from localStorage
  if (decodedURLState) {
    const urlDisplayState = applyURLStateToDefaults(
      decodedURLState,
      CENTER_POLY_DEFINITIONS,
      TRACON_POLY_DEFINITIONS,
      createCenterDefaultState,
      createTraconDefaultState,
    );
    setAllStore(urlDisplayState);
  }

  const [popup, setPopup] = createStore<PopupState>({
    hoveredPolys: [],
    vis: false,
  });

  const [displayedProcedures, setDisplayedProcedures] = createSignal<Procedure[]>([]);
  const [routeProcedures, setRouteProcedures] = createSignal<RouteProcedureEntry[]>([]);
  const [openMenu, setOpenMenu] = createSignal<OpenMenu>(null);
  const [displayedFixes, setDisplayedFixes] = createSignal<DisplayedFix[]>([]);
  const [displayedRoute, setDisplayedRoute] = createSignal<Route | null>(null);
  const [is3D, setIs3D] = createSignal(false);

  // Drawing (pen tool) — session-only
  const [isDrawing, setIsDrawing] = createSignal(false);
  const [drawingStrokes, setDrawingStrokes] = createSignal<DrawingStroke[]>([]);
  const [drawColor, setDrawColor] = createSignal('#ef4444');
  const [drawWidth, setDrawWidth] = createSignal(3);
  const [drawOpacity, setDrawOpacity] = createSignal(1.0);

  // Chart overlays — visibility session-only, opacity persisted
  // FAA ArcGIS tile services (publicly hosted, always current, no local server needed).
  // ArcGIS tile URL format: tile/{z}/{y}/{x} — Mapbox replaces {z}/{x}/{y} by name correctly.
  const IFR_LOW_TILE_URL = 'https://tiles.arcgis.com/tiles/ssFJjBXIUyZDrSYZ/arcgis/rest/services/IFR_AreaLow/MapServer/tile/{z}/{y}/{x}';
  const IFR_HIGH_TILE_URL = 'https://tiles.arcgis.com/tiles/ssFJjBXIUyZDrSYZ/arcgis/rest/services/IFR_High/MapServer/tile/{z}/{y}/{x}';
  const VFR_TILE_URL = 'https://tiles.arcgis.com/tiles/ssFJjBXIUyZDrSYZ/arcgis/rest/services/VFR_Sectional/MapServer/tile/{z}/{y}/{x}';

  const [activeChart, setActiveChart] = createSignal<'ifr-low' | 'ifr-high' | 'vfr' | null>(null);
  const [chartOpacity, setChartOpacity] = makePersisted(createSignal(0.85), {
    name: 'chartOpacity',
  });

  const toggle3D = () => {
    const newIs3D = !is3D();
    setIs3D(newIs3D);
    setViewport((v) => ({
      ...v,
      pitch: newIs3D ? 50 : 0,
      bearing: newIs3D ? -15 : 0,
    }));
  };

  const altitudeHover = (evt: MapMouseEvent) => {
    if (isDrawing()) return;
    if (is3D()) {
      setPopup('vis', false);
      return;
    }
    if (!evt.target.isStyleLoaded()) return;
    const features: GeoJSONFeature[] = evt.target.queryRenderedFeatures(evt.point, {
      filter: ['all', ['==', ['geometry-type'], 'Polygon'], ['has', 'minAlt'], ['has', 'maxAlt']],
    });
    const fillLayers = getUniqueLayers(features.filter((f) => f.layer?.type == 'fill'));
    if (fillLayers.length > 0) {
      logIfDev(fillLayers);
      let transparentLayers: GeoJSONFeature[] = [];
      let visibleLayers: GeoJSONFeature[] = [];
      fillLayers.forEach((l) =>
        isTransparentFill(l.layer?.paint as FillPaint) ? transparentLayers.push(l) : visibleLayers.push(l),
      );
      if (settings.popup.showUncheckedSectors) {
        setPopup(
          produce((state) => {
            state.vis = settings.popup.uncheckedSectorsInVisibleSectorsOnly ? visibleLayers.length > 0 : true;
            state.hoveredPolys = fillLayers;
          }),
        );
      } else {
        setPopup(
          produce((state) => {
            state.vis = visibleLayers.length > 0;
            state.hoveredPolys = visibleLayers;
          }),
        );
      }
    } else {
      setPopup('vis', false);
    }
  };

  createEffect(() => {
    if (isDrawing()) setCursor('crosshair');
    else if (popup.vis) setCursor('crosshair');
    else setCursor('grab');
  });

  // Stack order (Mapbox adds in mount order; later paints on top):
  //   1. Route line overlay (bottom).
  //   2. Route-pushed SID/STAR overlays, sequence-filtered to the transition.
  //      Skipped when the user has the same procedure toggled in the sidebar
  //      (full version wins; avoids duplicate Mapbox source ids).
  //   3. User-toggled procedures, full (top).
  const overlays = createMemo<Overlay[]>(() => {
    const userProcs = displayedProcedures();
    const userKeys = new Set(userProcs.map(procedureKey));
    const userOverlays = userProcs.flatMap(buildProcedureOverlays);
    const routeProcOverlays = routeProcedures()
      .map((entry) => filterProcedureForRoute(entry.procedure, entry.transition))
      .filter((p) => !userKeys.has(procedureKey(p)))
      .flatMap(buildProcedureOverlays);
    const route = displayedRoute();
    const routeOverlays = route ? [buildRouteOverlay(route)] : [];
    return [...routeOverlays, ...routeProcOverlays, ...userOverlays];
  });

  const handleProcedureToggle = (procedure: Procedure, isDisplayed: boolean) => {
    const key = procedureKey(procedure);
    setDisplayedProcedures((prev) => {
      if (isDisplayed) {
        if (prev.some((p) => procedureKey(p) === key)) return prev;
        return [...prev, procedure];
      }
      return prev.filter((p) => procedureKey(p) !== key);
    });
  };

  // Epoch counter discards stale results when the user submits a new route
  // before the previous one finished resolving.
  let routeSubmitEpoch = 0;
  const handleRouteSubmit = async (input: RouteInput) => {
    const myEpoch = ++routeSubmitEpoch;
    runIfDev(() => console.log('[route] submit', input));
    try {
      const route = await buildRoute(input);
      if (myEpoch !== routeSubmitEpoch) return;
      runIfDev(() => console.log('[route] resolved', route));

      const entries: RouteProcedureEntry[] = [];
      if (route.sidProcedure)
        entries.push({ procedure: route.sidProcedure, transition: route.sidTransition });
      if (route.starProcedure)
        entries.push({ procedure: route.starProcedure, transition: route.starTransition });

      // Zap previous route state before applying the new one to force the fix
      // sources to unmount and remount; setData alone doesn't reliably refresh
      // Mapbox symbol-layer text on back-to-back submissions.
      setRouteProcedures([]);
      setDisplayedRoute(null);
      setDisplayedRoute(route);
      setRouteProcedures(entries);
    } catch (err) {
      if (myEpoch !== routeSubmitEpoch) return;
      console.error('[route] build failed', err);
    }
  };

  const handleRouteClear = () => {
    setRouteProcedures([]);
    setDisplayedRoute(null);
  };

  const mapCenter = (): Coord => {
    const c = viewport().center as unknown;
    if (Array.isArray(c)) return { lon: c[0] as number, lat: c[1] as number };
    const obj = c as { lng?: number; lon?: number; lat: number };
    return { lon: (obj.lng ?? obj.lon ?? 0) as number, lat: obj.lat };
  };

  let fixIdCounter = 0;

  const handleFixAdd = async (rawInput: string): Promise<string | null> => {
    const upper = rawInput.trim().toUpperCase();
    if (!upper) return 'Enter a fix, FRD, or lat/lon';
    if (displayedFixes().some((f) => f.input === upper)) return 'Already added';

    const ll = latLonTokenToFix(upper);
    if (ll) {
      appendFix(upper, 'latlon', [{ identifier: ll.identifier, lat: ll.lat, lon: ll.lon }]);
      return null;
    }

    if (FRD_RE.test(upper)) {
      const frd = await parseFixRadialDistance(upper, mapCenter());
      if (!frd) return 'Could not resolve FRD';
      appendFix(upper, 'frd', [{ identifier: frd.identifier, lat: frd.lat, lon: frd.lon }]);
      return null;
    }

    const candidates = await resolveFixAllCandidates(upper);
    if (candidates.length === 0) return 'Fix not found';
    appendFix(
      upper,
      'fix',
      candidates.map((c) => ({ identifier: c.identifier, lat: c.lat, lon: c.lon })),
    );
    return null;
  };

  const appendFix = (input: string, kind: DisplayedFix['kind'], candidates: FixCandidate[]) => {
    const entry: DisplayedFix = { id: `fix-${++fixIdCounter}`, input, kind, candidates };
    setDisplayedFixes((prev) => [...prev, entry]);
  };

  const handleFixRemove = (id: string) => {
    setDisplayedFixes((prev) => prev.filter((f) => f.id !== id));
  };

  // Identifiers already drawn by procedure/route fix sources — used to suppress
  // standalone-fix candidates that would otherwise render an overlapping dot
  // and label at the same coord.
  const overlayFixIdentifiers = createMemo(() => {
    const ids = new Set<string>();
    for (const o of overlays()) {
      for (const f of o.fixFeatures) {
        if (f.properties.identifier) ids.add(f.properties.identifier);
      }
    }
    return ids;
  });

  const standaloneFixFeatures = createMemo<FixFeature[]>(() => {
    const fixes = displayedFixes();
    if (fixes.length === 0) return EMPTY_FIX_FEATURES;
    const blocked = overlayFixIdentifiers();
    const out = fixes.flatMap((entry) =>
      entry.candidates
        .filter((c) => !blocked.has(c.identifier))
        .map((c) => ({
          type: 'Feature' as const,
          geometry: { type: 'Point' as const, coordinates: [c.lon, c.lat] as [number, number] },
          properties: { text: entry.input, identifier: c.identifier },
        })),
    );
    return out.length === 0 ? EMPTY_FIX_FEATURES : out;
  });

  // Helper to create a persisted config signal that uses URL state if available
  // makePersisted ignores initial value if localStorage has data, so we must
  // explicitly set the value after creation when URL state is present
  const createConfigSignal = <T,>(
    defaultValue: T,
    urlValue: T | undefined,
    storageName: string,
  ): [Accessor<T>, Setter<T>] => {
    const [get, set] = makePersisted(createSignal<T>(defaultValue), { name: storageName });
    // If URL state exists, override whatever makePersisted loaded from localStorage
    if (urlValue !== undefined) {
      set(() => urlValue);
    }
    return [get, set];
  };

  const [bayConfig, setBayConfig] = createConfigSignal<TraconAirspaceConfig>(
    DEFAULT_CONFIGS.bayConfig,
    urlConfigState.bayConfig,
    'bayConfig',
  );
  const [sfoConfig, setSfoConfig] = createConfigSignal<TraconAirportConfig>(
    DEFAULT_CONFIGS.sfoConfig,
    urlConfigState.sfoConfig,
    'sfoConfig',
  );
  const [oakConfig, setOakConfig] = createConfigSignal<TraconAirportConfig>(
    DEFAULT_CONFIGS.oakConfig,
    urlConfigState.oakConfig,
    'oakConfig',
  );
  const [sjcConfig, setSjcConfig] = createConfigSignal<TraconAirportConfig>(
    DEFAULT_CONFIGS.sjcConfig,
    urlConfigState.sjcConfig,
    'sjcConfig',
  );

  const sfoOptions = createMemo(() => {
    if (bayConfig() === 'SFOW') {
      return ['SFOW'];
    } else if (bayConfig() === 'SFOE') {
      return ['SFO19', 'SFO10'];
    } else {
      return [];
    }
  });

  const oakOptions = createMemo(() => (bayConfig() === 'SFOW' ? ['OAKW', 'OAKE'] : ['OAKE']));
  const sjcOptions = createMemo(() => (bayConfig() === 'SFOW' ? ['SJCW', 'SJCE'] : ['SJCE']));

  const areaA: Accessor<TraconAirspaceConfig> = createMemo(() => {
    if (bayConfig() === 'SFOW') {
      return sjcConfig() === 'SJCE' ? 'SJCE' : 'SFOW';
    } else {
      return bayConfig() === 'SFOE' ? 'SFOE' : '';
    }
  });

  const areaBC: Accessor<TraconAirspaceConfig> = createMemo(() => {
    if (bayConfig() === 'SFOW') {
      return oakConfig() === 'OAKE' ? 'OAKE' : 'SFOW';
    } else {
      if (bayConfig() === 'SFOE') {
        return sfoConfig() === 'SFO19' ? 'SFOE' : 'SFO10';
      } else {
        return '';
      }
    }
  });

  const areaD: Accessor<TraconAirspaceConfig> = createMemo(() => {
    if (bayConfig() === 'SFOW') {
      return oakConfig() === 'OAKE' ? 'OAKE' : 'SFOW';
    } else {
      return bayConfig() === 'SFOE' ? 'SFOE' : '';
    }
  });

  const rapcon: Accessor<TraconAirspaceConfig> = createMemo(() => {
    return bayConfig();
  });

  createEffect((isInitialLoad) => {
    const currentBayConfig = bayConfig();

    if (currentBayConfig === 'SFOW') {
      setSfoConfig(DEFAULT_CONFIGS.sfoConfig);

      if (!isInitialLoad) {
        setOakConfig(DEFAULT_CONFIGS.oakConfig);
        setSjcConfig(DEFAULT_CONFIGS.sjcConfig);
      }
    } else if (currentBayConfig === 'SFOE') {
      const currentSfoConfig = untrack(sfoConfig);
      if (currentSfoConfig === DEFAULT_CONFIGS.sfoConfig || currentSfoConfig == null) {
        setSfoConfig('SFO19');
      }

      setOakConfig('OAKE');
      setSjcConfig('SJCE');
    }
    return false;
  }, true);

  // Console debugging effects only created in DEV
  if (import.meta.env.DEV) {
    createEffect(() => {
      console.log('Sectors display state', allStore.areaDisplayStates);
    });
    createEffect(() => {
      console.log('Popup visibility state changed', popup.vis);
    });
  }

  return (
    <div class="flex h-screen">
      <div class="flex flex-col bg-slate-900 p-4 justify-between overflow-auto overscroll-contain z-50 pr-6">
        <div class="flex flex-col space-y-4">
          <h1 class="text-white text-2xl">ZOA Visualizer</h1>

          <Section header="Style">
            <MapStyleSelector style={mapStyle} setStyle={setMapStyle} />
          </Section>

          <Section header="Base Maps">
            <div class="flex flex-col space-y-2">
              <For each={(() => {
                const groups: Record<string, typeof persistedVnasMaps> = {};
                for (const m of persistedVnasMaps) {
                  const f = m.map.facility;
                  if (!groups[f]) groups[f] = [];
                  groups[f].push(m);
                }
                return Object.entries(groups).map(([facility, maps]) => ({ facility, maps }));
              })()}>
                {(facGroup) => (
                  <details>
                    <summary class="cursor-pointer text-slate-300 text-xs font-semibold select-none mb-1 flex items-center gap-1">
                      <input
                        type="color"
                        value={vnasColors[facGroup.facility] ?? '#94a3b8'}
                        class="w-4 h-4 rounded cursor-pointer border-0 bg-transparent flex-shrink-0"
                        onClick={(e) => e.stopPropagation()}
                        onInput={(e) => setVnasColors(facGroup.facility, e.currentTarget.value)}
                      />
                      <button
                        class={`text-xs px-1 leading-none rounded select-none font-bold ${vnasBold[facGroup.facility] ? 'bg-sky-600 text-white' : 'bg-slate-700 text-slate-400'}`}
                        onClick={(e) => { e.stopPropagation(); e.preventDefault(); setVnasBold(facGroup.facility, !vnasBold[facGroup.facility]); }}
                      >B</button>
                      {facGroup.facility} ({facGroup.maps.filter((m) => m.checked).length}/{facGroup.maps.length})
                    </summary>
                    <div class="pl-2 space-y-1">
                      <button
                        class="text-xs px-1.5 py-0.5 rounded bg-slate-700 text-slate-400 hover:bg-slate-600 mb-1"
                        onClick={() => {
                          setPersistedVnasMaps(
                            (m) => m.map.facility === facGroup.facility,
                            produce((m) => { m.checked = false; }),
                          );
                        }}
                      >
                        clear all
                      </button>
                      <div class="flex flex-col space-y-1">
                        <For each={facGroup.maps}>
                          {(m) => (
                            <Checkbox
                              label={m.map.name}
                              checked={m.checked}
                              onChange={(val: boolean) => {
                                setPersistedVnasMaps(
                                  (m1) => m1.id === m.id,
                                  produce((m2) => { m2.checked = val; }),
                                );
                              }}
                            />
                          )}
                        </For>
                      </div>
                    </div>
                  </details>
                )}
              </For>
            </div>
          </Section>

          <Section header="Center Maps (ERAM)">
            <div class="flex flex-col space-y-2">
              <For each={VNAS_GEO_MAPS}>
                {(geoMap) => {
                  // All labeled bcgMenu slots become buttons. bcgMenu[N] (0-based) corresponds
                  // to 1-based bcg feature value N+1 in the loaded GeoJSON.
                  const buttons = geoMap.bcgMenu
                    .map((label, idx) => ({ label, idx, bcgValue: idx + 1 }))
                    .filter((b) => b.label !== '');
                  const isLoaded = () => eramFeatures[geoMap.name] !== undefined;
                  const activeCount = () => (eramSelectedBcg[geoMap.name] ?? []).length;
                  return (
                    <details>
                      <summary class="cursor-pointer text-slate-300 text-xs font-semibold select-none mb-1 flex items-center gap-1">
                        <input
                          type="color"
                          value={eramColors[geoMap.name] ?? '#94a3b8'}
                          class="w-4 h-4 rounded cursor-pointer border-0 bg-transparent flex-shrink-0"
                          onClick={(e) => e.stopPropagation()}
                          onInput={(e) => setEramColors(geoMap.name, e.currentTarget.value)}
                        />
                        <button
                          class={`text-xs px-1 leading-none rounded select-none font-bold ${eramBold[geoMap.name] ? 'bg-sky-600 text-white' : 'bg-slate-700 text-slate-400'}`}
                          onClick={(e) => { e.stopPropagation(); e.preventDefault(); setEramBold(geoMap.name, !eramBold[geoMap.name]); }}
                        >B</button>
                        {geoMap.name}
                        <Show when={isLoaded()}>
                          {' '}({activeCount()}/{buttons.length})
                        </Show>
                      </summary>
                      <div class="pl-2 pt-1 space-y-1">
                        <div class="flex gap-1">
                          <button
                            class={`text-xs px-1.5 py-0.5 rounded select-none ${
                              isLoaded()
                                ? 'bg-emerald-700 text-white hover:bg-red-700'
                                : 'bg-slate-600 text-slate-300 hover:bg-emerald-700 hover:text-white'
                            }`}
                            onClick={() => {
                              const name = geoMap.name;
                              if (isLoaded()) {
                                setEramFeatures(name, undefined!);
                                setEramSelectedBcg(name, []);
                              } else {
                                void loadEramGeoMap(name, geoMap.mapIds);
                              }
                            }}
                          >
                            {isLoaded() ? 'Unload' : 'Load'}
                          </button>
                        </div>
                        <Show when={isLoaded()}>
                          <div class="flex flex-wrap gap-1">
                            <For each={buttons}>
                              {(btn) => {
                                const isActive = () =>
                                  (eramSelectedBcg[geoMap.name] ?? []).includes(btn.bcgValue);
                                return (
                                  <button
                                    class={`text-xs px-1.5 py-0.5 rounded select-none ${
                                      isActive()
                                        ? 'bg-sky-600 text-white'
                                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                    }`}
                                    onClick={() => {
                                      const current = eramSelectedBcg[geoMap.name] ?? [];
                                      if (isActive()) {
                                        setEramSelectedBcg(geoMap.name, current.filter((v) => v !== btn.bcgValue));
                                      } else {
                                        setEramSelectedBcg(geoMap.name, [...current, btn.bcgValue]);
                                      }
                                    }}
                                  >
                                    {btn.label}
                                  </button>
                                );
                              }}
                            </For>
                          </div>
                        </Show>
                      </div>
                    </details>
                  );
                }}
              </For>
            </div>
          </Section>

          <Section header="Charts">
            <div class="flex flex-col space-y-2">
              <Checkbox
                label="IFR En Route Low"
                checked={activeChart() === 'ifr-low'}
                onChange={(val: boolean) => setActiveChart(val ? 'ifr-low' : null)}
              />
              <Checkbox
                label="IFR En Route High"
                checked={activeChart() === 'ifr-high'}
                onChange={(val: boolean) => setActiveChart(val ? 'ifr-high' : null)}
              />
              <Checkbox
                label="VFR Sectional"
                checked={activeChart() === 'vfr'}
                onChange={(val: boolean) => setActiveChart(val ? 'vfr' : null)}
              />
              <div class="flex items-center space-x-2 pt-1">
                <span class="text-slate-400 text-xs">Opacity</span>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.05"
                  class="flex-1 accent-orange-500"
                  value={chartOpacity()}
                  onInput={(e) => setChartOpacity(parseFloat(e.currentTarget.value))}
                />
                <span class="text-slate-400 text-xs w-8 text-right">
                  {Math.round(chartOpacity() * 100)}%
                </span>
              </div>
            </div>
          </Section>

          <Section header="" class="space-y-2">
            <div class="flex border-b border-slate-600 mb-2">
              <button
                class={`px-4 py-2 font-medium ${activeTab() === 'tracon' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400 hover:text-slate-200'}`}
                onClick={() => setActiveTab('tracon')}
              >
                TRACON
              </button>
              <button
                class={`px-4 py-2 font-medium ${activeTab() === 'center' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400 hover:text-slate-200'}`}
                onClick={() => setActiveTab('center')}
              >
                Center
              </button>
            </div>

            <Show when={activeTab() === 'tracon'}>
              {/*Temporary select for SFOW/SFOE*/}
              <div>
                <span class="block text-md text-white mb-1">Bay Flow</span>
                <Select
                  options={['SFOW', 'SFOE']}
                  value={bayConfig()}
                  onChange={(val) => {
                    if (val) {
                      setBayConfig(val);
                    }
                  }}
                  disallowEmptySelection={true}
                  itemComponent={(props) => <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>}
                >
                  <SelectTrigger aria-label="Map Style" class="w-[180px] cursor-pointer">
                    <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
                  </SelectTrigger>
                  <SelectContent />
                </Select>
              </div>

              <div>
                <span class="block text-md text-white mb-1">Airport Configs</span>
                <div class="flex flex-col space-y-2">
                  <Select
                    options={sfoOptions()}
                    value={sfoConfig()}
                    onChange={(val) => {
                      if (val) {
                        setSfoConfig(val);
                      }
                    }}
                    disallowEmptySelection={true}
                    itemComponent={(props) => <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>}
                  >
                    <SelectTrigger aria-label="Map Style" class="w-[180px] cursor-pointer">
                      <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
                    </SelectTrigger>
                    <SelectContent />
                  </Select>

                  <Select
                    options={oakOptions()}
                    value={oakConfig()}
                    onChange={(val) => {
                      if (val) {
                        setOakConfig(val);
                      }
                    }}
                    disallowEmptySelection={true}
                    itemComponent={(props) => <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>}
                  >
                    <SelectTrigger aria-label="Map Style" class="w-[180px] cursor-pointer">
                      <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
                    </SelectTrigger>
                    <SelectContent />
                  </Select>

                  <Select
                    options={sjcOptions()}
                    value={sjcConfig()}
                    onChange={(val) => {
                      if (val) {
                        setSjcConfig(val);
                      }
                    }}
                    disallowEmptySelection={true}
                    itemComponent={(props) => <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>}
                  >
                    <SelectTrigger aria-label="Map Style" class="w-[180px] cursor-pointer">
                      <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
                    </SelectTrigger>
                    <SelectContent />
                  </Select>
                </div>
              </div>

              <SectorDisplayWithControls
                displayType="tracon"
                airspaceGroup={'Area A'}
                store={allStore}
                setStore={setAllStore}
                dependentOnConfig={areaA()}
              />

              <SectorDisplayWithControls
                displayType="tracon"
                airspaceGroup={'Area B'}
                store={allStore}
                setStore={setAllStore}
                dependentOnConfig={areaBC()}
              />

              <SectorDisplayWithControls
                displayType="tracon"
                airspaceGroup={'Area C'}
                store={allStore}
                setStore={setAllStore}
                dependentOnConfig={areaBC()}
              />

              <SectorDisplayWithControls
                displayType="tracon"
                airspaceGroup={'Area D'}
                store={allStore}
                setStore={setAllStore}
                dependentOnConfig={areaD()}
              />

              <SectorDisplayWithControls
                displayType="tracon"
                airspaceGroup={'Area E CA'}
                airspaceConfigOptions={['SMFS', 'SMFN']}
                store={allStore}
                setStore={setAllStore}
              />

              <SectorDisplayWithControls
                displayType="tracon"
                airspaceGroup={'Area E NV'}
                airspaceConfigOptions={['RNOS', 'RNON']}
                store={allStore}
                setStore={setAllStore}
              />

              <SectorDisplayWithControls
                displayType="tracon"
                airspaceGroup={'FAT'}
                airspaceConfigOptions={['FATS', 'FATN']}
                store={allStore}
                setStore={setAllStore}
              />

              <SectorDisplayWithControls
                displayType="tracon"
                airspaceGroup={'RAPCON'}
                store={allStore}
                setStore={setAllStore}
                dependentOnConfig={rapcon()}
              />
            </Show>

            <Show when={activeTab() === 'center'}>
              <SectorDisplayWithControls
                displayType="center"
                airspaceGroup={'Area North'}
                store={allStore}
                setStore={setAllStore}
              />

              <SectorDisplayWithControls
                displayType="center"
                airspaceGroup={'Area East'}
                store={allStore}
                setStore={setAllStore}
              />

              <SectorDisplayWithControls
                displayType="center"
                airspaceGroup={'Area South'}
                store={allStore}
                setStore={setAllStore}
              />

              <SectorDisplayWithControls
                displayType="center"
                airspaceGroup={'Pac North'}
                store={allStore}
                setStore={setAllStore}
              />

              <SectorDisplayWithControls
                displayType="center"
                airspaceGroup={'Pac South'}
                store={allStore}
                setStore={setAllStore}
              />
            </Show>
          </Section>
        </div>
        <Footer />
      </div>
      <div class="flex flex-col grow min-w-0">
        <TopMenuBar
          openMenu={openMenu()}
          setOpenMenu={setOpenMenu}
          onProcedureToggle={handleProcedureToggle}
          onRouteSubmit={handleRouteSubmit}
          onRouteClear={handleRouteClear}
          routeResult={displayedRoute()}
          fixes={displayedFixes()}
          onFixAdd={handleFixAdd}
          onFixRemove={handleFixRemove}
        >
          <SettingsDialog settings={settings} setSettings={setSettings} />
          <ShareButton
            store={allStore}
            centerDefaults={CENTER_POLY_DEFINITIONS}
            traconDefaults={TRACON_POLY_DEFINITIONS}
            bayConfig={bayConfig}
            sfoConfig={sfoConfig}
            oakConfig={oakConfig}
            sjcConfig={sjcConfig}
          />
        </TopMenuBar>
        <div class="grow relative">
        <InfoPopup popupState={popup} settings={settings} />

        <div class="absolute top-5 right-5 z-50 flex flex-col items-end space-y-2">
          {/* Button row */}
          <div class="flex space-x-2 items-center">
            <MapReset viewport={viewport()} setViewport={setViewport} />
            <Show when={drawingStrokes().length > 0}>
              <div
                class="flex items-center justify-center text-gray-700 hover:cursor-pointer border border-gray-400 rounded p-1 bg-white/50 hover:bg-red-100/70 transition select-none"
                onClick={() => setDrawingStrokes([])}
                title="Clear all drawings"
              >
                <Trash2 size={16} />
              </div>
            </Show>
            <div
              class={`flex items-center justify-center hover:cursor-pointer border rounded p-1 transition select-none ${
                isDrawing()
                  ? 'text-red-600 border-red-400 bg-red-100/90 hover:bg-red-200/90'
                  : 'text-gray-700 border-gray-400 bg-white/50 hover:bg-gray-300/50'
              }`}
              onClick={() => setIsDrawing((v) => !v)}
              title={isDrawing() ? 'Exit drawing mode' : 'Draw on map'}
            >
              <Pencil size={16} />
            </div>
            <div
              class="text-gray-700 font-bold text-sm hover:cursor-pointer border border-gray-400 rounded p-1 bg-white/50 hover:bg-gray-300/50 transition select-none"
              onClick={toggle3D}
            >
              {is3D() ? '2D' : '3D'}
            </div>
          </div>

          {/* Drawing settings panel */}
          <Show when={isDrawing()}>
            <div class="bg-white/95 border border-gray-300 rounded-lg shadow-lg p-3 flex flex-col space-y-2 text-xs w-52">
              <div class="flex items-center justify-between">
                <span class="text-gray-700 font-medium">Color</span>
                <input
                  type="color"
                  value={drawColor()}
                  onInput={(e) => setDrawColor(e.currentTarget.value)}
                  class="w-10 h-6 cursor-pointer rounded border border-gray-300"
                />
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-gray-700 font-medium w-14">Thickness</span>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={drawWidth()}
                  onInput={(e) => setDrawWidth(parseInt(e.currentTarget.value))}
                  class="flex-1 accent-red-500"
                />
                <span class="text-gray-500 w-5 text-right">{drawWidth()}</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-gray-700 font-medium w-14">Opacity</span>
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.05"
                  value={drawOpacity()}
                  onInput={(e) => setDrawOpacity(parseFloat(e.currentTarget.value))}
                  class="flex-1 accent-red-500"
                />
                <span class="text-gray-500 w-8 text-right">{Math.round(drawOpacity() * 100)}%</span>
              </div>
              <p class="text-gray-400 text-xs">Drag on the map to draw</p>
            </div>
          </Show>
        </div>

        <MapGL
          options={{
            accessToken: import.meta.env.VITE_MAPBOX_KEY,
            style: mapStyle().value,
          }}
          viewport={viewport()}
          onViewportChange={setViewport}
          class="h-full w-full"
          debug={!!DEV}
          onMouseMove={altitudeHover}
          cursorStyle={cursor()}
        >
          <StyleSwitchFix />
          <ChartOverlay id="ifr-low" tileUrl={IFR_LOW_TILE_URL} visible={activeChart() === 'ifr-low'} opacity={chartOpacity()} />
          <ChartOverlay id="ifr-high" tileUrl={IFR_HIGH_TILE_URL} visible={activeChart() === 'ifr-high'} opacity={chartOpacity()} />
          <ChartOverlay id="vfr" tileUrl={VFR_TILE_URL} visible={activeChart() === 'vfr'} opacity={chartOpacity()} />
          <VnasVideoMaps maps={persistedVnasMaps} colors={vnasColors} bold={vnasBold} />
          <EramGeoMapLayers geoMaps={VNAS_GEO_MAPS} features={eramFeatures} selectedBcg={eramSelectedBcg} colors={eramColors} bold={eramBold} />
          <BaseMapColorSync isDark={mapStyle().label === 'World Dark'} />
          <GeojsonPolySources sources={allSources} />
          <GeojsonPolyLayers displayStateStore={allStore} type="tracon" allPolys={TRACON_POLY_DEFINITIONS} is3D={is3D} />
          <GeojsonPolyLayers displayStateStore={allStore} type="center" is3D={is3D} />
          <AviationOverlayLayers overlays={overlays()} standaloneFixFeatures={standaloneFixFeatures()} />
          <DrawingLayer
            isDrawing={isDrawing()}
            strokes={drawingStrokes()}
            onStrokeComplete={(s) => setDrawingStrokes((prev) => [...prev, s])}
            color={drawColor()}
            width={drawWidth()}
            opacity={drawOpacity()}
          />
        </MapGL>
        </div>
      </div>

    </div>
  );
};

export default App;
