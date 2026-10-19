import { useEffect } from "react";
import { MapPin, Clock, Instagram, Youtube, Twitter, Calendar } from "lucide-react";
import { GYM_DETAILS, BARCODE_IMAGES } from "../lib/data";
import { Reveal } from "./Reveal";

interface ContactSectionProps {
  onBookClick: (serviceId?: string) => void;
}

export function ContactSection({ onBookClick }: ContactSectionProps) {
  // Load the form embed script once on mount. It scans for the inline form
  // iframe below and auto-resizes it to the form's full content height so the
  // entire form is visible without an internal scrollbar.
  useEffect(() => {
    const scriptId = "ghl-form-embed-js";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://mylinks.businesstechlab.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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

            {/* Native Form Embed Column */}
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
                    Have questions about membership, programming, or drop-ins? Send us a direct
                    inquiry.
                  </p>
                </div>

                <div
                  className="w-full rounded-sm bg-secondary/30 border border-border/60"
                  style={{ minHeight: 879 }}
                >
                  <iframe
                    src="https://mylinks.businesstechlab.com/widget/form/NSRrO1bfeBiBEDc0FnMB"
                    style={{
                      width: "100%",
                      height: 879,
                      border: "none",
                      borderRadius: 4,
                      display: "block",
                    }}
                    id="inline-NSRrO1bfeBiBEDc0FnMB"
                    data-layout='{"id":"INLINE"}'
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Contact Us"
                    data-height="879"
                    data-layout-iframe-id="inline-NSRrO1bfeBiBEDc0FnMB"
                    data-form-id="NSRrO1bfeBiBEDc0FnMB"
                    data-cookie-consent="true"
                    data-cookie-consent-provider="auto"
                    title="Contact Us"
                    scrolling="no"
                  />
                </div>
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
