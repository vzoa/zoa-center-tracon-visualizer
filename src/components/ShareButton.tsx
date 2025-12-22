import { Accessor, Component, createSignal, Show } from 'solid-js';
import { Link, Check, X } from 'lucide-solid';
import {
  AppDisplayState,
  CenterAreaDefinition,
  TraconAirspaceConfig,
  TraconAirportConfig,
  TraconPolyDefinition,
} from '~/lib/types';
import { encodeStateToURL, URL_STATE_PARAM } from '~/lib/urlState';

interface ShareButtonProps {
  store: AppDisplayState;
  centerDefaults: CenterAreaDefinition[];
  traconDefaults: TraconPolyDefinition[];
  bayConfig: Accessor<TraconAirspaceConfig>;
  sfoConfig: Accessor<TraconAirportConfig>;
  oakConfig: Accessor<TraconAirportConfig>;
  sjcConfig: Accessor<TraconAirportConfig>;
}

export const ShareButton: Component<ShareButtonProps> = (props) => {
  const [copied, setCopied] = createSignal(false);
  const [error, setError] = createSignal(false);

  const handleCopy = async () => {
    try {
      const encoded = encodeStateToURL(props.store, props.centerDefaults, props.traconDefaults, {
        bayConfig: props.bayConfig(),
        sfoConfig: props.sfoConfig(),
        oakConfig: props.oakConfig(),
        sjcConfig: props.sjcConfig(),
      });

      const url = new URL(window.location.href);
      url.search = ''; // Clear existing params

      if (encoded) {
        url.searchParams.set(URL_STATE_PARAM, encoded);
      }

      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
      setError(false);

      // Reset after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('Failed to copy URL:', e);
      setError(true);
      setCopied(false);

      // Reset error after 3 seconds
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      class="font-bold text-sm border rounded border-slate-400 p-1 bg-slate-400/50 hover:bg-slate-400/60 transition text-gray-700 hover:cursor-pointer flex items-center gap-1"
      classList={{ 'border-red-400 bg-red-400/50': error() }}
      title="Copy shareable URL with current sector states and configs"
    >
      <Show when={error()}>
        <X class="w-4 h-4 text-red-700" />
        <span class="text-red-700">Failed!</span>
      </Show>
      <Show when={!error() && copied()}>
        <Check class="w-4 h-4" />
        <span>Copied!</span>
      </Show>
      <Show when={!error() && !copied()}>
        <Link class="w-4 h-4" />
        <span>Share</span>
      </Show>
    </button>
  );
};
