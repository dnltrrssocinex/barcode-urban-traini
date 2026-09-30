import { useState } from "react";
import {
  Send,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { GYM_DETAILS, TRAINING_SERVICES } from "../lib/data";
import { postTrackingEvent, CRM_CONFIG } from "../lib/tracking";

export function ContactSection({ onBookClick }: { onBookClick: (svc?: string) => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: TRAINING_SERVICES[0].name,
    interest: "Building Raw Strength & Hypertrophy",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const nameParts = formData.name.trim().split(" ");
    const firstName = nameParts[0] || "Athlete";
    const lastName = nameParts.slice(1).join(" ") || "Inquiry";

    const trackingPayload = {
      type: "external_form_submission",
      timestamp: Date.now(),
      formId: "barcode-contact-lead",
      formData: {
        first_name: firstName,
        last_name: lastName,
        email: formData.email,
        phone: formData.phone,
        calendar_notes: `Interest: ${formData.interest} | Service: ${formData.service} | Message: ${formData.message || "No notes"}`,
      },
      formLabels: {
        first_name: "First Name",
        last_name: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        calendar_notes: "Inquiry Message & Details",
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
        formName: "Barcode Contact Lead Form",
      },
    };

    postTrackingEvent(trackingPayload, {
      customFields: {
        [CRM_CONFIG.customFields.preferredService]: {
          value: formData.service,
          label: "Preferred Training Service",
        },
        [CRM_CONFIG.customFields.interestAreas]: {
          value: formData.interest,
          label: "Interest Areas",
        },
      },
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-background relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Info & Location */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-volt rounded-full" />
                <span className="font-athletic text-xs font-bold uppercase tracking-[0.25em] text-volt">
                  FIND THE COMPOUND
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-foreground">
                HEADQUARTERS & CONTACT
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Step inside the warehouse. Whether you want to tour our lifting racks, discuss
                private coaching cycles, or coordinate squad programming, reach out directly.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-sm bg-secondary/40 border border-border">
                <MapPin className="w-5 h-5 text-volt shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-athletic font-bold text-foreground tracking-wider">
                    LOCATION ADDRESS
                  </h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{GYM_DETAILS.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-sm bg-secondary/40 border border-border">
                <Phone className="w-5 h-5 text-volt shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-athletic font-bold text-foreground tracking-wider">
                    DIRECT PHONE & SMS
                  </h4>
                  <a
                    href={`tel:${GYM_DETAILS.phone}`}
                    className="text-sm text-foreground hover:text-volt transition-colors mt-0.5 block"
                  >
                    {GYM_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-sm bg-secondary/40 border border-border">
                <Mail className="w-5 h-5 text-volt shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-athletic font-bold text-foreground tracking-wider">
                    EMAIL INQUIRIES
                  </h4>
                  <a
                    href={`mailto:${GYM_DETAILS.email}`}
                    className="text-sm text-foreground hover:text-volt transition-colors mt-0.5 block"
                  >
                    {GYM_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-sm bg-secondary/40 border border-border">
                <Clock className="w-5 h-5 text-volt shrink-0 mt-0.5" />
                <div className="w-full">
                  <h4 className="text-xs uppercase font-athletic font-bold text-foreground tracking-wider mb-1">
                    TRAINING HOURS
                  </h4>
                  {GYM_DETAILS.hours.map((h, i) => (
                    <div
                      key={i}
                      className="flex justify-between text-xs text-muted-foreground py-0.5 border-b border-border/30 last:border-0"
                    >
                      <span>{h.days}</span>
                      <span className="text-foreground font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Embedded Map Representation */}
            <div className="relative rounded-sm overflow-hidden border border-border h-48 bg-secondary/60 flex items-center justify-center group">
              <div
                className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 opacity-30 group-hover:opacity-40 transition-opacity"
                style={{
                  backgroundImage: `url('https://vibe.filesafe.space/1790776132600168681/assets/238f548e-d23f-4759-b252-d21915416a11.png')`,
                }}
              />
              <div className="relative z-10 text-center p-4">
                <div className="w-10 h-10 rounded-full bg-volt text-primary-foreground mx-auto flex items-center justify-center font-bold mb-2 shadow-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-athletic text-sm uppercase font-bold tracking-wider text-foreground block">
                  BARCODE WAREHOUSE DISTRICT
                </span>
                <span className="text-xs text-muted-foreground">
                  Parking lot entrance off 11th Ave
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-sm bg-card border border-border relative shadow-2xl">
              <div className="barcode-stripes h-1 w-24 text-volt mb-6" />

              <h3 className="font-display text-3xl font-black text-foreground tracking-wide">
                START THE INTAKE
              </h3>
              <p className="text-sm text-muted-foreground mt-1 mb-8">
                Drop your details below. A coach connects within 4 business hours to discuss your
                training background and book your first session.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-volt/20 text-volt mx-auto flex items-center justify-center border border-volt/50">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <h4 className="font-display text-3xl font-black text-foreground">
                    MESSAGE LOGGED IN CRM
                  </h4>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Thanks for stepping forward. Your training profile has been received. Check your
                    inbox for our initial prep packet.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: TRAINING_SERVICES[0].name,
                        interest: "Building Raw Strength & Hypertrophy",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-sm bg-secondary hover:bg-secondary/80 text-foreground font-athletic text-xs uppercase tracking-widest font-bold"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase font-athletic font-bold text-muted-foreground mb-1.5 tracking-wider">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-secondary/60 border border-border text-foreground text-sm focus:outline-hidden focus:border-volt placeholder:text-muted-foreground/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-athletic font-bold text-muted-foreground mb-1.5 tracking-wider">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="marcus@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-secondary/60 border border-border text-foreground text-sm focus:outline-hidden focus:border-volt placeholder:text-muted-foreground/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-athletic font-bold text-muted-foreground mb-1.5 tracking-wider">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-secondary/60 border border-border text-foreground text-sm focus:outline-hidden focus:border-volt placeholder:text-muted-foreground/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-athletic font-bold text-muted-foreground mb-1.5 tracking-wider">
                        PREFERRED TRAINING SERVICE
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-secondary/60 border border-border text-foreground text-sm focus:outline-hidden focus:border-volt"
                      >
                        {TRAINING_SERVICES.map((s) => (
                          <option key={s.id} value={s.name} className="bg-card text-foreground">
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-athletic font-bold text-muted-foreground mb-1.5 tracking-wider">
                        PRIMARY GOAL / FOCUS
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-secondary/60 border border-border text-foreground text-sm focus:outline-hidden focus:border-volt"
                      >
                        <option value="Building Raw Strength & Hypertrophy" className="bg-card">
                          Building Raw Strength & Hypertrophy
                        </option>
                        <option value="High-Threshold Conditioning & Stamina" className="bg-card">
                          Conditioning & Work Capacity
                        </option>
                        <option value="Sport Performance & Speed Velocity" className="bg-card">
                          Sport Performance & Speed
                        </option>
                        <option value="Body Composition & Leanness" className="bg-card">
                          Body Composition & Leanness
                        </option>
                        <option value="Post-Injury Return to Athleticism" className="bg-card">
                          Mobility & Injury Resilience
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-athletic font-bold text-muted-foreground mb-1.5 tracking-wider">
                      MESSAGE / CURRENT TRAINING LEVEL (OPTIONAL)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what you're lifting now, previous injuries, or session schedules you need..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-secondary/60 border border-border text-foreground text-sm focus:outline-hidden focus:border-volt placeholder:text-muted-foreground/50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-volt/20 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "SENDING TO COACH..." : "SUBMIT INTAKE REQUEST"}</span>
                  </button>

                  <p className="text-[11px] text-muted-foreground text-center pt-1">
                    Direct integration enabled. No spam. Only serious training communications.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer({
  onBookClick,
  onShopClick,
}: {
  onBookClick: () => void;
  onShopClick: () => void;
}) {
  return (
    <footer className="bg-secondary/80 border-t border-border pt-16 pb-24 sm:pb-12 text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border/60">
          {/* Brand statement */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-display text-3xl font-black tracking-widest text-foreground">
                BARCODE
              </span>
              <span className="text-[10px] font-athletic font-black uppercase tracking-[0.25em] bg-volt text-primary-foreground px-2 py-0.5 rounded-xs">
                EST. 2024
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              An urban training compound engineered for physical dominance, real grit, and athletic
              accountability. Built in the concrete jungle.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-sm bg-card border border-border flex items-center justify-center text-foreground hover:text-volt hover:border-volt transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-sm bg-card border border-border flex items-center justify-center text-foreground hover:text-volt hover:border-volt transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-sm bg-card border border-border flex items-center justify-center text-foreground hover:text-volt hover:border-volt transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Training Nav */}
          <div>
            <h4 className="font-athletic text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-4">
              TRAINING PROGRAMS
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#training" className="hover:text-volt transition-colors">
                  Strength & Conditioning
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-volt transition-colors">
                  Personal Coaching
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-volt transition-colors">
                  Small Group Sessions
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-volt transition-colors">
                  Athletic Velocity
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-volt transition-colors">
                  Movement Screen
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div>
            <h4 className="font-athletic text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-4">
              EXPERIENCE
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button
                  onClick={onBookClick}
                  className="hover:text-volt transition-colors text-left cursor-pointer"
                >
                  Book A Session
                </button>
              </li>
              <li>
                <button
                  onClick={onShopClick}
                  className="hover:text-volt transition-colors text-left cursor-pointer"
                >
                  Shop Apparel Collection
                </button>
              </li>
              <li>
                <a href="#experience" className="hover:text-volt transition-colors">
                  Training Principles
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-volt transition-colors">
                  Compound Culture
                </a>
              </li>
              <li>
                <a href="#coach" className="hover:text-volt transition-colors">
                  Meet Lead Coach
                </a>
              </li>
            </ul>
          </div>

          {/* Compound Info */}
          <div>
            <h4 className="font-athletic text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-4">
              THE FACILITY
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              {GYM_DETAILS.address}
            </p>
            <p className="text-xs text-foreground font-semibold">{GYM_DETAILS.phone}</p>
            <p className="text-xs text-muted-foreground">{GYM_DETAILS.email}</p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground/80 gap-4">
          <div className="flex items-center gap-2">
            <span className="barcode-stripes h-3 w-8 text-volt inline-block" />
            <span>&copy; {new Date().getFullYear()} BARCODE ATHLETICS. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex gap-6">
            <a href="#hero" className="hover:text-volt transition-colors">
              Privacy Policy
            </a>
            <a href="#hero" className="hover:text-volt transition-colors">
              Terms of Service
            </a>
            <a href="#hero" className="hover:text-volt transition-colors">
              Safety Waiver
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
