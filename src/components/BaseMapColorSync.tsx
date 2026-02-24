import { Component, createEffect, onCleanup } from 'solid-js';
import { useMapContext } from 'solid-map-gl';
import { BASE_MAPS } from '~/lib/config';

/**
 * Syncs map layer colors with the current map style (light vs dark).
 * Must be rendered inside <MapGL>.
 *
 * Uses the map's 'idle' event to apply paint properties AFTER
 * solid-map-gl finishes its style transition (setStyle + layer re-insertion),
 * avoiding the race condition where setPaintProperty is called on
 * layers that have been temporarily removed during a style switch.
 */
export const BaseMapColorSync: Component<{ isDark: boolean }> = (props) => {
  const [ctx] = useMapContext();

  createEffect(() => {
    const dark = props.isDark;

    const apply = () => {
      // Base map lines
      const baseColor = dark ? '#ffffff' : '#000000';
      for (const bm of BASE_MAPS) {
        if (ctx.map.getLayer(bm.name)) {
          ctx.map.setPaintProperty(bm.name, 'line-color', baseColor);
        }
      }

      // Procedure layers (arrival text labels, waypoint circles)
      const textColor = dark ? '#ffffff' : '#000000';
      const circleColor = dark ? '#ffffff' : '#000000';
      const circleStrokeColor = dark ? '#000000' : '#ffffff';

      for (const layer of ctx.map.getStyle().layers) {
        if (layer.id.endsWith('-text-layer')) {
          ctx.map.setPaintProperty(layer.id, 'text-color', textColor);
        } else if (layer.id.startsWith('arrival-points-')) {
          ctx.map.setPaintProperty(layer.id, 'circle-color', circleColor);
          ctx.map.setPaintProperty(layer.id, 'circle-stroke-color', circleStrokeColor);
        }
      }
    };

    // Re-apply on every idle event to catch newly enabled/added layers
    ctx.map.on('idle', apply);
    onCleanup(() => ctx.map.off('idle', apply));
  });

  return null;
};
