import { useState, useEffect } from "react";
import { X, CheckCircle, ArrowRight } from "lucide-react";
import { TRAINING_SERVICES, GYM_DETAILS } from "../lib/data";
import { postTrackingEvent, CRM_CONFIG } from "../lib/tracking";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string | undefined;
}

export function BookingModal({ isOpen, onClose, initialServiceId }: BookingModalProps) {
  const [preferredService, setPreferredService] = useState(
    initialServiceId && TRAINING_SERVICES.some((s) => s.id === initialServiceId)
      ? initialServiceId
      : "",
  );
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync the preselected service whenever the modal opens or preselect changes.
  useEffect(() => {
    if (!isOpen) return;
    if (initialServiceId && TRAINING_SERVICES.some((s) => s.id === initialServiceId)) {
      setPreferredService(initialServiceId);
    }
  }, [isOpen, initialServiceId]);

  if (!isOpen) return null;

  const selectedService = TRAINING_SERVICES.find((s) => s.id === preferredService);

  const handleField =
    (key: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceName = selectedService?.name ?? "No preference / General inquiry";

    postTrackingEvent(
      {
        type: "external_form_submission",
        timestamp: Date.now(),
        formId: "barcode-session-booking",
        formData: {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          calendar_notes: `Preferred training: ${serviceName}${formData.message ? ` | Notes: ${formData.message}` : ""}`,
        },
        formLabels: {
          full_name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          calendar_notes: "Booking Notes & Preferred Service",
        },
        url: window.location.href,
        title: document.title,
        path: window.location.pathname,
        userAgent: navigator.userAgent,
        trackingId: CRM_CONFIG.trackingId,
        locationId: CRM_CONFIG.locationId,
        projectId: CRM_CONFIG.projectId,
        sessionId: crypto.randomUUID(),
        properties: {
          deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
          source: "ai_studio",
          projectId: CRM_CONFIG.projectId,
          formName: "Barcode Session Booking",
        },
      },
      {
        customFields: {
          [CRM_CONFIG.customFields.preferredService]: {
            value: serviceName,
            label: "Preferred Training Service",
          },
          [CRM_CONFIG.customFields.interestAreas]: {
            value: formData.message || "Session booking request",
            label: "Interest Areas",
          },
        },
      },
    );

    // Simulate a short submit so the confirm button gives feedback, then confirm.
    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-xl bg-card border border-border shadow-2xl rounded-sm max-h-[92vh] flex flex-col overflow-hidden"
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
            onClick={handleClose}
            aria-label="Close"
            className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal content */}
        <div className="p-6 overflow-y-auto">
          {isSuccess ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-volt/20 text-volt mx-auto flex items-center justify-center border border-volt/40">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h3 className="font-display text-3xl font-black tracking-wide text-foreground">
                SESSION RESERVED
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
                Your request is in. A coach will reach out to lock in your time and confirm details.
                Watch for an automated calendar &amp; SMS confirmation.
              </p>
              <div className="pt-4 border-t border-border/60 max-w-sm mx-auto text-xs text-muted-foreground">
                Location: {GYM_DETAILS.address}
              </div>
              <button
                onClick={handleClose}
                className="mt-4 px-6 py-3 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-xs uppercase tracking-widest hover:brightness-110 cursor-pointer"
              >
                CLOSE WINDOW
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Preferred training service */}
              <div>
                <label className="block text-xs uppercase font-athletic tracking-widest font-bold text-muted-foreground mb-2">
                  PREFERRED TRAINING SERVICE
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPreferredService("")}
                    className={`text-left p-3 rounded-sm border transition-all text-xs cursor-pointer ${
                      preferredService === ""
                        ? "border-volt bg-volt/10 text-foreground"
                        : "border-border bg-secondary/30 text-muted-foreground hover:border-border/80"
                    }`}
                  >
                    <div className="font-athletic font-bold text-sm tracking-wide text-foreground">
                      No preference
                    </div>
                    <div className="text-[11px] mt-0.5">Let the coach match me</div>
                  </button>
                  {TRAINING_SERVICES.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setPreferredService(service.id)}
                      className={`text-left p-3 rounded-sm border transition-all text-xs cursor-pointer ${
                        preferredService === service.id
                          ? "border-volt bg-volt/10 text-foreground"
                          : "border-border bg-secondary/30 text-muted-foreground hover:border-border/80"
                      }`}
                    >
                      <div className="flex justify-between items-center font-athletic font-bold text-sm tracking-wide text-foreground">
                        <span>{service.name}</span>
                        <span className="text-[11px] text-volt">{service.price}</span>
                      </div>
                      <div className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                        {service.tagline}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase font-athletic tracking-widest font-bold text-muted-foreground mb-2">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleField("fullName")}
                    placeholder="First & Last"
                    className="w-full px-3 py-2.5 rounded-sm bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-hidden focus:border-volt"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-athletic tracking-widest font-bold text-muted-foreground mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleField("email")}
                    placeholder="you@email.com"
                    className="w-full px-3 py-2.5 rounded-sm bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-hidden focus:border-volt"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-athletic tracking-widest font-bold text-muted-foreground mb-2">
                    PHONE *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleField("phone")}
                    placeholder="(215) 000-0000"
                    className="w-full px-3 py-2.5 rounded-sm bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-hidden focus:border-volt"
                  />
                </div>
              </div>

              {/* Optional message */}
              <div>
                <label className="block text-xs uppercase font-athletic tracking-widest font-bold text-muted-foreground mb-2">
                  MESSAGE <span className="text-muted-foreground/70 normal-case">(OPTIONAL)</span>
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={handleField("message")}
                  placeholder="Goals, availability, or anything we should know."
                  className="w-full px-3 py-2 rounded-sm bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-hidden focus:border-volt"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-lg shadow-volt/20"
              >
                {isSubmitting ? (
                  <span>CONFIRMING...</span>
                ) : (
                  <>
                    <span>BOOK THIS SESSION</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
