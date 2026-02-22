# Known Issues

## Dark background persists after switching from World Dark to Empty map style

**Affected component:** `solid-map-gl` (third-party dependency)

When switching from the "World Dark" map style to the "Empty" map style, the map background remains dark instead of reverting to white.

**Root cause:** In `solid-map-gl`'s style switch handler (`MapGL/index.jsx`, line 226-232), the fog and terrain settings from the previous style are carried over to the new style:

```js
map.setStyle({
    ...newStyle,
    sources: { ...newStyle.sources, ...oldSources },
    layers: insertLayers(newStyle.layers, oldLayers),
    fog: oldStyle.fog,     // ← dark fog leaks into empty style
    terrain: oldStyle.terrain,
});
```

The `dark-v11` Mapbox style includes fog settings with dark colors. These get injected into `empty-v9`, tinting its background dark.

**Workaround:** Switch to "World Light" first, then to "Empty". Or reload the page after selecting "Empty".

**Fix:** Requires a patch to `solid-map-gl` to avoid carrying over fog/terrain between styles, or to reset them when the new style doesn't define them.
