import { useEffect } from "react";
import { X, Calendar } from "lucide-react";
import { TRAINING_SERVICES } from "../lib/data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string | undefined;
}

// Native form embed for the "Training Inquiry" booking form.
const FORM_SRC = "https://mylinks.businesstechlab.com/widget/form/KBIBY5RqgRozCqtq1YgA";
const FORM_ID = "KBIBY5RqgRozCqtq1YgA";
const FORM_HEIGHT = 815;
const EMBED_SCRIPT_SRC = "https://mylinks.businesstechlab.com/js/form_embed.js";

export function BookingModal({ isOpen, onClose, initialServiceId }: BookingModalProps) {
  // Load the GHL form embed script once on mount. The iframe `src` renders the
  // form at its native height on its own; the script adds auto-resize support
  // so the full form stays visible without an internal scrollbar.
  useEffect(() => {
    const scriptId = "ghl-form-embed-js";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = EMBED_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Close on Escape for accessibility.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const service = initialServiceId
    ? TRAINING_SERVICES.find((s) => s.id === initialServiceId)
    : undefined;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-card border border-border shadow-2xl rounded-sm max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-secondary/40 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-volt rounded-full animate-ping" />
              <span className="text-[11px] font-athletic tracking-[0.2em] uppercase font-bold text-volt">
                SCHEDULE WORK
              </span>
            </div>
            <h2 className="font-display text-2xl text-foreground font-black tracking-wider">
              BOOK YOUR SESSION
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Optional service context chip (shows which card was clicked) */}
        {service && (
          <div className="px-6 pt-4 shrink-0">
            <div className="inline-flex items-center gap-2 text-xs font-athletic uppercase tracking-widest text-muted-foreground">
              <Calendar className="w-3.5 h-3.5 text-volt" />
              <span>
                Booking: <span className="text-foreground font-bold">{service.name}</span>
              </span>
            </div>
          </div>
        )}

        {/* Native GHL form embed — renders the full Training Inquiry form */}
        <div className="p-6 overflow-y-auto">
          <div
            className="w-full rounded-sm bg-secondary/30 border border-border/60"
            style={{ minHeight: FORM_HEIGHT }}
          >
            <iframe
              src={FORM_SRC}
              style={{
                width: "100%",
                height: FORM_HEIGHT,
                border: "none",
                borderRadius: 4,
                display: "block",
              }}
              id={`inline-${FORM_ID}`}
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Training Inquiry"
              data-height={String(FORM_HEIGHT)}
              data-layout-iframe-id={`inline-${FORM_ID}`}
              data-form-id={FORM_ID}
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
              title="Training Inquiry"
              scrolling="auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
