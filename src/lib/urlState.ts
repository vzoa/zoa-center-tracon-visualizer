import {
  AppDisplayState,
  CenterAirspaceDisplayState,
  CenterAreaDefinition,
  TRACON_AIRSPACE_CONFIGS,
  TraconAirspaceConfig,
  TraconAirspaceDisplayState,
  TRACON_AIRPORT_CONFIGS,
  TraconAirportConfig,
  TraconPolyDefinition,
} from '~/lib/types';

/**
 * Compact representation of sector state for URL encoding.
 * Uses delta compression - only includes values that differ from defaults.
 *
 * Structure:
 * - c: { areaIdx: { sectorIdx: [displayed, color?] } } - center sectors
 * - t: { areaIdx: { sectorIdx: [displayed, color?] } } - tracon sectors
 * - tc: { areaIdx: configString } - tracon area selectedConfigs (only non-defaults)
 * - bc, sc, oc, jc: top-level configs (only if different from defaults)
 */
interface CompactSectorState {
  c?: Record<number, Record<number, [number, string?]>>; // center
  t?: Record<number, Record<number, [number, string?]>>; // tracon
  tc?: Record<number, string>; // tracon area selectedConfigs (only non-defaults)
  bc?: string; // bayConfig (only if not 'SFOW')
  sc?: string; // sfoConfig (only if not 'SFOW')
  oc?: string; // oakConfig (only if not 'OAKW')
  jc?: string; // sjcConfig (only if not 'SJCW')
}

/**
 * Top-level config values extracted from URL
 */
export interface URLConfigState {
  bayConfig?: TraconAirspaceConfig;
  sfoConfig?: TraconAirportConfig;
  oakConfig?: TraconAirportConfig;
  sjcConfig?: TraconAirportConfig;
}

// ============================================================================
// Validation Constants and Helpers
// ============================================================================

/** URL parameter name for state - single source of truth */
export const URL_STATE_PARAM = 's';

/** Validation Set derived from TRACON_AIRSPACE_CONFIGS in types.ts */
const VALID_TRACON_AIRSPACE_CONFIGS = new Set<string>(TRACON_AIRSPACE_CONFIGS);

/** Validation Set derived from TRACON_AIRPORT_CONFIGS in types.ts */
const VALID_TRACON_AIRPORT_CONFIGS = new Set<string>(TRACON_AIRPORT_CONFIGS);

/** Default values for top-level configs (used for delta compression) */
export const DEFAULT_CONFIGS = {
  bayConfig: 'SFOW' as TraconAirspaceConfig,
  sfoConfig: 'SFOW' as TraconAirportConfig,
  oakConfig: 'OAKW' as TraconAirportConfig,
  sjcConfig: 'SJCW' as TraconAirportConfig,
};

/** Check if value is a valid TraconAirspaceConfig */
function isValidTraconAirspaceConfig(value: unknown): value is TraconAirspaceConfig {
  return typeof value === 'string' && VALID_TRACON_AIRSPACE_CONFIGS.has(value);
}

/** Check if value is a valid TraconAirportConfig */
function isValidTraconAirportConfig(value: unknown): value is TraconAirportConfig {
  return typeof value === 'string' && VALID_TRACON_AIRPORT_CONFIGS.has(value);
}

/**
 * Check if value is a valid CSS color string.
 * Accepts: hex (#rgb, #rrggbb, #rrggbbaa), rgb(), rgba()
 */
function isValidColor(value: unknown): value is string {
  if (typeof value !== 'string') return false;

  // Hex colors: #rgb, #rrggbb, or #rrggbbaa (with alpha)
  const hexPattern = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
  if (hexPattern.test(value)) return true;

  // rgb/rgba: rgb(r,g,b) or rgba(r,g,b,a)
  const rgbPattern = /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/;
  if (rgbPattern.test(value)) return true;

  return false;
}

/**
 * Validate the structure of a sector map from URL state.
 * Expected: { numericKey: { numericKey: [0|1, optionalColorString?] } }
 */
function isValidSectorMap(obj: unknown): boolean {
  if (typeof obj !== 'object' || obj === null) return false;

  for (const [areaIdx, sectors] of Object.entries(obj)) {
    // Area index must be numeric string
    if (!/^\d+$/.test(areaIdx)) return false;

    if (typeof sectors !== 'object' || sectors === null) return false;

    for (const [sectorIdx, value] of Object.entries(sectors)) {
      // Sector index must be numeric string
      if (!/^\d+$/.test(sectorIdx)) return false;

      // Value must be array
      if (!Array.isArray(value)) return false;

      // First element must be 0 or 1 (displayed flag)
      if (value[0] !== 0 && value[0] !== 1) return false;

      // Second element (if present) must be a string (color)
      if (value.length > 1 && typeof value[1] !== 'string') return false;
    }
  }

  return true;
}

/**
 * Validate the structure of a tracon config map from URL state.
 * Expected: { numericKey: configString }
 */
function isValidTraconConfigMap(obj: unknown): boolean {
  if (typeof obj !== 'object' || obj === null) return false;

  for (const [areaIdx, config] of Object.entries(obj)) {
    if (!/^\d+$/.test(areaIdx)) return false;
    if (typeof config !== 'string') return false;
  }

  return true;
}

// ============================================================================
// URL State Functions
// ============================================================================

/**
 * Get the URL state parameter from the current URL
 */
export function getURLStateParam(): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get(URL_STATE_PARAM);
}

/**
 * Encode AppDisplayState to a URL-safe base64 string.
 * Uses delta compression - only encodes values that differ from defaults.
 */
export function encodeStateToURL(
  state: AppDisplayState,
  centerDefaults: CenterAreaDefinition[],
  traconDefaults: TraconPolyDefinition[],
  configs: {
    bayConfig: TraconAirspaceConfig;
    sfoConfig: TraconAirportConfig;
    oakConfig: TraconAirportConfig;
    sjcConfig: TraconAirportConfig;
  },
): string {
  const compact: CompactSectorState = {};

  // Process center sectors
  state.centerDisplayStates.forEach((area, areaIdx) => {
    const defaultArea = centerDefaults[areaIdx];
    if (!defaultArea) return;

    area.sectors.forEach((sector, sectorIdx) => {
      const defaultSector = defaultArea.sectors[sectorIdx];
      if (!defaultSector) return;

      // Include if displayed OR color changed from default
      if (sector.isDisplayed || sector.color !== defaultSector.defaultColor) {
        if (!compact.c) compact.c = {};
        if (!compact.c[areaIdx]) compact.c[areaIdx] = {};

        if (sector.color === defaultSector.defaultColor) {
          compact.c[areaIdx][sectorIdx] = [sector.isDisplayed ? 1 : 0];
        } else {
          compact.c[areaIdx][sectorIdx] = [sector.isDisplayed ? 1 : 0, sector.color];
        }
      }
    });
  });

  // Process TRACON sectors and selectedConfigs
  state.areaDisplayStates.forEach((area, areaIdx) => {
    const defaultDef = traconDefaults[areaIdx];
    if (!defaultDef) return;

    // Track selectedConfig if different from default (delta compression)
    if (area.selectedConfig !== defaultDef.polys.defaultConfig) {
      if (!compact.tc) compact.tc = {};
      compact.tc[areaIdx] = area.selectedConfig;
    }

    area.sectors.forEach((sector, sectorIdx) => {
      const defaultSector = defaultDef.polys.sectorConfigs[sectorIdx];
      if (!defaultSector) return;

      // Include if displayed OR color changed from default
      if (sector.isDisplayed || sector.color !== defaultSector.defaultColor) {
        if (!compact.t) compact.t = {};
        if (!compact.t[areaIdx]) compact.t[areaIdx] = {};

        if (sector.color === defaultSector.defaultColor) {
          compact.t[areaIdx][sectorIdx] = [sector.isDisplayed ? 1 : 0];
        } else {
          compact.t[areaIdx][sectorIdx] = [sector.isDisplayed ? 1 : 0, sector.color];
        }
      }
    });
  });

  // Include top-level configs only if different from defaults (delta compression)
  if (configs.bayConfig !== DEFAULT_CONFIGS.bayConfig) {
    compact.bc = configs.bayConfig;
  }
  if (configs.sfoConfig !== DEFAULT_CONFIGS.sfoConfig) {
    compact.sc = configs.sfoConfig;
  }
  if (configs.oakConfig !== DEFAULT_CONFIGS.oakConfig) {
    compact.oc = configs.oakConfig;
  }
  if (configs.sjcConfig !== DEFAULT_CONFIGS.sjcConfig) {
    compact.jc = configs.sjcConfig;
  }

  // If nothing differs from defaults, return empty string
  if (Object.keys(compact).length === 0) {
    return '';
  }

  // Base64 encode with URL-safe characters
  const json = JSON.stringify(compact);
  return btoa(json).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/**
 * Decode a URL state string back to CompactSectorState.
 * Returns null if the parameter is missing, empty, or malformed.
 * Performs thorough validation of the JSON structure.
 */
export function decodeStateFromURL(urlParam: string | null): CompactSectorState | null {
  if (!urlParam) return null;

  try {
    // Restore base64 padding and standard characters
    let base64 = urlParam.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) base64 += '=';

    const json = atob(base64);
    const parsed = JSON.parse(json);

    // Validate root object
    if (typeof parsed !== 'object' || parsed === null) return null;

    // Validate sector maps structure
    if (parsed.c !== undefined && !isValidSectorMap(parsed.c)) {
      console.warn('Invalid center sector map structure in URL state');
      return null;
    }
    if (parsed.t !== undefined && !isValidSectorMap(parsed.t)) {
      console.warn('Invalid TRACON sector map structure in URL state');
      return null;
    }

    // Validate tracon configs - support both old array format and new object format
    if (parsed.tc !== undefined) {
      if (Array.isArray(parsed.tc)) {
        // Legacy array format - convert to object format
        const tcObj: Record<number, string> = {};
        parsed.tc.forEach((config: string | null, idx: number) => {
          if (config) tcObj[idx] = config;
        });
        parsed.tc = tcObj;
      } else if (!isValidTraconConfigMap(parsed.tc)) {
        console.warn('Invalid TRACON configs in URL state');
        return null;
      }
    }

    // Validate config strings
    if (parsed.bc !== undefined && typeof parsed.bc !== 'string') return null;
    if (parsed.sc !== undefined && typeof parsed.sc !== 'string') return null;
    if (parsed.oc !== undefined && typeof parsed.oc !== 'string') return null;
    if (parsed.jc !== undefined && typeof parsed.jc !== 'string') return null;

    return parsed as CompactSectorState;
  } catch (e) {
    console.warn('Failed to decode URL state:', e);
    return null;
  }
}

/**
 * Extract top-level config values from decoded URL state.
 * Validates config values and returns defaults for missing/invalid values.
 */
export function getURLConfigState(urlState: CompactSectorState | null): URLConfigState {
  if (!urlState) return {};

  // Only return configs that are present and valid in the URL state
  // Missing configs mean "use default" (delta compression)
  const result: URLConfigState = {};

  if (urlState.bc !== undefined && isValidTraconAirspaceConfig(urlState.bc)) {
    result.bayConfig = urlState.bc;
  }
  if (urlState.sc !== undefined && isValidTraconAirportConfig(urlState.sc)) {
    result.sfoConfig = urlState.sc;
  }
  if (urlState.oc !== undefined && isValidTraconAirportConfig(urlState.oc)) {
    result.oakConfig = urlState.oc;
  }
  if (urlState.jc !== undefined && isValidTraconAirportConfig(urlState.jc)) {
    result.sjcConfig = urlState.jc;
  }

  return result;
}

/**
 * Apply URL state to create a full AppDisplayState.
 * Starts with defaults and applies overrides from the URL state.
 * Validates colors before applying them.
 */
export function applyURLStateToDefaults(
  urlState: CompactSectorState,
  centerDefaults: CenterAreaDefinition[],
  traconDefaults: TraconPolyDefinition[],
  createCenterDefaultState: (area: CenterAreaDefinition) => CenterAirspaceDisplayState,
  createTraconDefaultState: (polys: TraconPolyDefinition['polys']) => TraconAirspaceDisplayState,
): AppDisplayState {
  // Start with default state
  const state: AppDisplayState = {
    centerDisplayStates: centerDefaults.map(createCenterDefaultState),
    areaDisplayStates: traconDefaults.map((p) => createTraconDefaultState(p.polys)),
  };

  // Apply center overrides with bounds checking
  if (urlState.c) {
    for (const [areaIdxStr, sectors] of Object.entries(urlState.c)) {
      const areaIdx = parseInt(areaIdxStr, 10);
      if (isNaN(areaIdx) || areaIdx < 0 || areaIdx >= state.centerDisplayStates.length) continue;

      const area = state.centerDisplayStates[areaIdx];
      for (const [sectorIdxStr, value] of Object.entries(sectors)) {
        const sectorIdx = parseInt(sectorIdxStr, 10);
        if (isNaN(sectorIdx) || sectorIdx < 0 || sectorIdx >= area.sectors.length) continue;
        if (!Array.isArray(value)) continue;

        area.sectors[sectorIdx].isDisplayed = value[0] === 1;
        // Only apply color if it's a valid color format
        if (value[1] !== undefined) {
          if (isValidColor(value[1])) {
            area.sectors[sectorIdx].color = value[1];
          } else {
            console.warn(`Invalid color "${value[1]}" in URL state, using default`);
          }
        }
      }
    }
  }

  // Apply TRACON area selectedConfigs with validation (now object format)
  if (urlState.tc) {
    for (const [areaIdxStr, config] of Object.entries(urlState.tc)) {
      const areaIdx = parseInt(areaIdxStr, 10);
      if (isNaN(areaIdx) || areaIdx < 0 || areaIdx >= state.areaDisplayStates.length) continue;
      if (isValidTraconAirspaceConfig(config)) {
        state.areaDisplayStates[areaIdx].selectedConfig = config;
      }
    }
  }

  // Apply TRACON sector overrides with bounds checking
  if (urlState.t) {
    for (const [areaIdxStr, sectors] of Object.entries(urlState.t)) {
      const areaIdx = parseInt(areaIdxStr, 10);
      if (isNaN(areaIdx) || areaIdx < 0 || areaIdx >= state.areaDisplayStates.length) continue;

      const area = state.areaDisplayStates[areaIdx];
      for (const [sectorIdxStr, value] of Object.entries(sectors)) {
        const sectorIdx = parseInt(sectorIdxStr, 10);
        if (isNaN(sectorIdx) || sectorIdx < 0 || sectorIdx >= area.sectors.length) continue;
        if (!Array.isArray(value)) continue;

        area.sectors[sectorIdx].isDisplayed = value[0] === 1;
        // Only apply color if it's a valid color format
        if (value[1] !== undefined) {
          if (isValidColor(value[1])) {
            area.sectors[sectorIdx].color = value[1];
          } else {
            console.warn(`Invalid color "${value[1]}" in URL state, using default`);
          }
        }
      }
    }
  }

  return state;
}
