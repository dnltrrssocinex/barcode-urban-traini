import { useState } from "react";
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { TRAINING_SERVICES, GYM_DETAILS } from "../lib/data";
import { postTrackingEvent, CRM_CONFIG } from "../lib/tracking";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export function BookingModal({ isOpen, onClose, initialServiceId }: BookingModalProps) {
  const [selectedService, setSelectedService] = useState(
    initialServiceId || TRAINING_SERVICES[0].id,
  );
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [timeSlot, setTimeSlot] = useState("07:00 AM");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const currentService =
    TRAINING_SERVICES.find((s) => s.id === selectedService) || TRAINING_SERVICES[0];

  const timeSlots = [
    "06:00 AM",
    "07:00 AM",
    "08:30 AM",
    "12:00 PM",
    "04:30 PM",
    "05:45 PM",
    "07:00 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const trackingPayload = {
      type: "external_form_submission",
      timestamp: Date.now(),
      formId: "barcode-session-booking",
      formData: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        calendar_notes: `Session: ${currentService.name} | Date: ${date} ${timeSlot} | Notes: ${formData.notes || "None"}`,
      },
      formLabels: {
        first_name: "First Name",
        last_name: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        calendar_notes: "Booking Notes & Timing",
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
    };

    postTrackingEvent(trackingPayload, {
      customFields: {
        [CRM_CONFIG.customFields.preferredService]: {
          value: currentService.name,
          label: "Preferred Training Service",
        },
        [CRM_CONFIG.customFields.interestAreas]: {
          value: `Scheduled for ${date} at ${timeSlot}`,
          label: "Interest Areas",
        },
      },
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-card border border-border shadow-2xl rounded-sm max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-secondary/40">
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
            className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal content body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSuccess ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-volt/20 text-volt mx-auto flex items-center justify-center border border-volt/40">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h3 className="font-display text-3xl font-black tracking-wide text-foreground">
                SESSION RESERVED
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
                You're locked in for{" "}
                <span className="text-volt font-bold">{currentService.name}</span> on{" "}
                <span className="text-foreground font-semibold">
                  {date} at {timeSlot}
                </span>
                . A coach will review your baseline details and send automated calendar & SMS
                confirmation.
              </p>
              <div className="pt-4 border-t border-border/60 max-w-sm mx-auto text-xs text-muted-foreground">
                Location: {GYM_DETAILS.address}
              </div>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-3 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-xs uppercase tracking-widest hover:brightness-110"
              >
                CLOSE WINDOW
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Select Service */}
              <div>
                <label className="block text-xs uppercase font-athletic tracking-widest font-bold text-muted-foreground mb-2">
                  1. SELECT TRAINING PROTOCOL
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {TRAINING_SERVICES.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelectedService(service.id)}
                      className={`text-left p-3 rounded-sm border transition-all text-xs ${
                        selectedService === service.id
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

              {/* Step 2: Date & Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-athletic tracking-widest font-bold text-muted-foreground mb-2">
                    2. TRAINING DATE
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-sm bg-secondary/60 border border-border text-foreground text-sm focus:outline-hidden focus:border-volt"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-athletic tracking-widest font-bold text-muted-foreground mb-2">
                    3. TIME SLOT
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-sm bg-secondary/60 border border-border text-foreground text-sm focus:outline-hidden focus:border-volt"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-card text-foreground">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 3: Contact Info */}
              <div>
                <label className="block text-xs uppercase font-athletic tracking-widest font-bold text-muted-foreground mb-2">
                  4. ATHLETE DETAILS
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name *"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-sm bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-hidden focus:border-volt"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name *"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-sm bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-hidden focus:border-volt"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-sm bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-hidden focus:border-volt"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-sm bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-hidden focus:border-volt"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <textarea
                    placeholder="Injuries, current training volume, or goals (Optional)"
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 rounded-sm bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-hidden focus:border-volt"
                  />
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-lg shadow-volt/20"
                >
                  {isSubmitting ? (
                    <span>CONFIRMING WITH LAB...</span>
                  ) : (
                    <>
                      <span>CONFIRM & BOOK THIS SESSION</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
                <AlertCircle className="w-3.5 h-3.5 text-volt" />
                <span>Syncs directly with Barcode training schedules & CRM pipelines.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
