import { useState } from "react";
import {
  MapPin,
  Clock,
  ArrowRight,
  Instagram,
  Youtube,
  Twitter,
  Calendar,
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { GYM_DETAILS, BARCODE_IMAGES } from "../lib/data";
import { postTrackingEvent, CRM_CONFIG } from "../lib/tracking";
import { Reveal } from "./Reveal";

interface ContactSectionProps {
  onBookClick: (serviceId?: string) => void;
}

export function ContactSection({ onBookClick }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleField =
    (key: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    postTrackingEvent(
      {
        type: "external_form_submission",
        timestamp: Date.now(),
        formId: "barcode-contact-inquiry",
        formData: {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          calendar_notes: formData.message || "General inquiry — no message provided.",
        },
        formLabels: {
          full_name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          calendar_notes: "Message",
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
          formName: "Barcode Contact Inquiry",
        },
      },
      {
        customFields: {
          [CRM_CONFIG.customFields.interestAreas]: {
            value: formData.message || "Contact form submission",
            label: "Interest Areas",
          },
        },
      },
    );

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    }, 600);
  };

  return (
    <>
      {/* Full-width dramatic CTA Banner */}
      <section className="relative py-28 overflow-hidden bg-background border-t border-border">
        {/* Directional Background Placeholder */}
        <div className="absolute inset-0 z-0 bg-secondary/70 flex items-center justify-center">
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-background/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Reveal variant="up" as="div">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/80 border border-border">
              <span className="w-2 h-2 bg-volt rounded-full" />
              <span className="text-[10px] font-athletic font-bold uppercase tracking-[0.25em] text-volt">
                MAKE YOUR MOVE
              </span>
            </div>
          </Reveal>

          <Reveal
            variant="blur"
            delay={100}
            as="h2"
            className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground uppercase leading-[0.92]"
          >
            YOU DON'T NEED ANOTHER GYM MEMBERSHIP. <br />
            <span className="text-volt">YOU NEED A PLACE TO TRAIN.</span>
          </Reveal>

          <Reveal
            variant="up"
            delay={200}
            as="p"
            className="text-base sm:text-xl text-muted-foreground max-w-xl mx-auto font-normal leading-relaxed"
          >
            Come experience Barcode.
          </Reveal>

          <Reveal
            variant="up"
            delay={280}
            as="div"
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => onBookClick()}
              className="w-full sm:w-auto px-8 py-4 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-volt/25 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK YOUR FIRST SESSION</span>
            </button>
            <a
              href="#training"
              className="w-full sm:w-auto px-8 py-4 rounded-sm border border-border hover:border-volt/80 bg-secondary/70 hover:bg-secondary text-foreground font-athletic font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <span>EXPLORE TRAINING</span>
              <ArrowRight className="w-4 h-4 text-volt" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="py-24 bg-card/40 relative border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Location & Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 bg-volt rounded-full" />
                  <span className="font-athletic text-xs font-bold uppercase tracking-[0.25em] text-volt">
                    LOCATION & FACILITY
                  </span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground tracking-tight">
                  LOCATION DETAILS
                </h2>
              </div>

              {/* Location Card without phone or email */}
              <div className="space-y-4">
                <div className="p-4 rounded-sm bg-card border border-border flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-sm bg-secondary flex items-center justify-center text-volt border border-border shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-athletic font-bold tracking-wider text-muted-foreground">
                      ADDRESS
                    </div>
                    <div className="text-sm font-bold text-foreground mt-0.5">
                      {GYM_DETAILS.address}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-sm bg-card border border-border flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-sm bg-secondary flex items-center justify-center text-volt border border-border shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="w-full">
                    <div className="text-[10px] uppercase font-athletic font-bold tracking-wider text-muted-foreground mb-1">
                      OPERATING HOURS
                    </div>
                    {GYM_DETAILS.hours.map((h) => (
                      <div
                        key={h.days}
                        className="flex justify-between items-center text-xs py-1 border-b border-border/40 last:border-0"
                      >
                        <span className="text-muted-foreground">{h.days}</span>
                        <span className="font-bold text-foreground">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Native Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-sm bg-card border border-border shadow-xl">
                <div className="mb-6">
                  <div className="text-[10px] font-athletic uppercase tracking-[0.2em] text-volt font-bold">
                    GET IN TOUCH
                  </div>
                  <h3 className="font-display text-3xl font-black text-foreground tracking-wide mt-1">
                    START THE CONVERSATION
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Questions about programming, drop-ins, or getting started? Send us a direct
                    message.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-volt/20 text-volt mx-auto flex items-center justify-center border border-volt/40">
                      <CheckCircle className="w-9 h-9" />
                    </div>
                    <h4 className="font-display text-2xl font-black tracking-wide text-foreground">
                      MESSAGE RECEIVED
                    </h4>
                    <p className="text-muted-foreground max-w-sm mx-auto text-sm leading-relaxed">
                      Thanks for reaching out. We'll get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-2 px-6 py-3 rounded-sm border border-border hover:border-volt text-foreground font-athletic font-bold text-xs uppercase tracking-widest hover:bg-secondary/60 transition-all cursor-pointer"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs uppercase font-athletic tracking-widest font-bold text-muted-foreground mb-2">
                        NAME <span className="text-volt">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleField("fullName")}
                          placeholder="First & last name"
                          className="w-full pl-10 pr-3 py-2.5 rounded-sm bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-volt transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email + Phone grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs uppercase font-athletic tracking-widest font-bold text-muted-foreground mb-2">
                          EMAIL <span className="text-volt">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70 pointer-events-none" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleField("email")}
                            placeholder="you@email.com"
                            className="w-full pl-10 pr-3 py-2.5 rounded-sm bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-volt transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs uppercase font-athletic tracking-widest font-bold text-muted-foreground mb-2">
                          PHONE <span className="text-volt">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70 pointer-events-none" />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleField("phone")}
                            placeholder="(215) 000-0000"
                            className="w-full pl-10 pr-3 py-2.5 rounded-sm bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-volt transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs uppercase font-athletic tracking-widest font-bold text-muted-foreground mb-2">
                        MESSAGE
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/70 pointer-events-none" />
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={handleField("message")}
                          placeholder="What are you interested in? Goals, availability, or anything we should know."
                          className="w-full pl-10 pr-3 py-2.5 rounded-sm bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-volt transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-sm uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer shadow-lg shadow-volt/20"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>SENDING...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SEND MESSAGE</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface FooterProps {
  onBookClick: () => void;
  onShopClick: () => void;
}

export function Footer({ onBookClick, onShopClick }: FooterProps) {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-border/60">
          {/* Brand Info with updated attached logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl font-black tracking-wider text-foreground leading-none">
                BARCODE
              </span>
              <img
                src={BARCODE_IMAGES.logo}
                alt="Barcode"
                className="h-9 w-auto object-contain invert brightness-200"
              />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              Training compound engineered for movement, power, and discipline.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-sm bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-volt hover:border-volt transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-sm bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-volt hover:border-volt transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-sm bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-volt hover:border-volt transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="text-xs font-athletic uppercase font-bold tracking-widest text-volt mb-4">
              NAVIGATION
            </div>
            <ul className="space-y-2.5 text-xs font-athletic uppercase tracking-wider">
              <li>
                <a
                  href="#hero"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={onBookClick}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Book
                </button>
              </li>
              <li>
                <button
                  onClick={onShopClick}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Shop
                </button>
              </li>
            </ul>
          </div>

          {/* Facility Location Details without phone or email */}
          <div>
            <div className="text-xs font-athletic uppercase font-bold tracking-widest text-volt mb-4">
              FACILITY
            </div>
            <div className="space-y-3 text-xs text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-volt shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">
                  4862 Parkside Avenue, Philadelphia PA
                </span>
              </div>
            </div>
          </div>

          {/* Quick Schedule CTA */}
          <div>
            <div className="text-xs font-athletic uppercase font-bold tracking-widest text-volt mb-4">
              SCHEDULE
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Lock in your personalized movement audit and baseline assessment.
            </p>
            <button
              onClick={onBookClick}
              className="w-full py-3 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-volt/20"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK A SESSION</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted-foreground font-athletic">
          <div>© {new Date().getFullYear()} BARCODE. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </footer>
  );
}
