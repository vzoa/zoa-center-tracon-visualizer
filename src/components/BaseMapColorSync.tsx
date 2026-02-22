import { Component, createEffect, onCleanup } from 'solid-js';
import { useMapContext } from 'solid-map-gl';
import { BASE_MAPS } from '~/lib/config';

/**
 * Syncs base map line colors with the current map style.
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
    const color = props.isDark ? '#ffffff' : '#000000';

    const apply = () => {
      for (const bm of BASE_MAPS) {
        if (ctx.map.getLayer(bm.name)) {
          ctx.map.setPaintProperty(bm.name, 'line-color', color);
        }
      }
    };

    // Re-apply on every idle event to catch newly enabled base map layers
    ctx.map.on('idle', apply);
    onCleanup(() => ctx.map.off('idle', apply));
  });

  return null;
};
