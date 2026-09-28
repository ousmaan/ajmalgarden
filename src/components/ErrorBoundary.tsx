import { Component, type ReactNode } from "react";
import { waLink } from "../data/site";

interface State {
  failed: boolean;
}

/**
 * Isolates crashes (especially the Identify flow) so one bad render
 * never blanks the whole single-file app. Elegant fallback keeps the
 * WhatsApp funnel reachable.
 */
export default class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  render(): ReactNode {
    if (!this.state.failed) return this.props.children;
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-leaf-100">
          <p className="font-display text-xl font-semibold text-leaf-900">Something wilted on this page</p>
          <p className="mt-2 text-sm leading-relaxed text-leaf-800/65">
            Please reload — and if it keeps happening, send us a WhatsApp message and we&apos;ll help you directly.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center rounded-full bg-leaf-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-leaf-800 active:scale-[0.98]"
            >
              Reload page
            </button>
            <a
              href={waLink("Assalam-o-Alaikum! A page on your website showed an error. Can you help?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1fb959] active:scale-[0.98]"
            >
              WhatsApp us instead
            </a>
          </div>
        </div>
      </div>
    );
  }
}
