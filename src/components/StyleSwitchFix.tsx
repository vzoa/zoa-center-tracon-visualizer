import { Component } from 'solid-js';
import { useMapContext } from 'solid-map-gl';

/**
 * Patches map.setStyle to always use { diff: false }.
 *
 * solid-map-gl manually captures and restores custom layers/sources
 * during style switches. But Mapbox GL's setStyle defaults to
 * { diff: true }, which also preserves custom layers — resulting in
 * duplicate layer IDs when solid-map-gl re-inserts them.
 *
 * Must be rendered inside <MapGL> before other child components.
 */
export const StyleSwitchFix: Component = () => {
  const [ctx] = useMapContext();
  const original = ctx.map.setStyle.bind(ctx.map);

  ctx.map.setStyle = (style: unknown, options?: Record<string, unknown>) => {
    return original(style, { ...options, diff: false });
  };

  return null;
};
