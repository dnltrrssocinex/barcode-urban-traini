import { Sparkles, Calendar, Check, Dumbbell } from "lucide-react";
import { BARCODE_IMAGES } from "../lib/data";

interface CommunityAndFounderProps {
  onBookClick: (svc?: string) => void;
}

export function CommunityAndFounder({ onBookClick }: CommunityAndFounderProps) {
  return (
    <>
      {/* Community Section */}
      <section id="community" className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-volt rounded-full" />
                <span className="font-athletic text-xs font-bold uppercase tracking-[0.25em] text-volt">
                  COMMUNITY & SQUAD CULTURE
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground">
                BUILT IN THE CITY. <br />
                <span className="text-volt">BUILT TOGETHER.</span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              We aren't a silent gym where people wear noise-cancelling headphones and avoid eye
              contact. We cheer each other through final sets, celebrate PRs, and hold one another
              accountable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 relative aspect-16/9 rounded-sm overflow-hidden border border-border group shadow-xl">
              <img
                src={BARCODE_IMAGES.communityRopes}
                alt="Barcode member battle rope workout session"
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-athletic font-bold uppercase tracking-widest text-volt">
                  SATURDAY COMMUNITY SQUAD
                </span>
                <h3 className="font-display text-2xl font-black text-foreground">
                  HIGH-THRESHOLD GROUP CONDITIONING
                </h3>
              </div>
            </div>

            <div className="md:col-span-5 grid grid-cols-1 gap-6">
              <div className="p-6 rounded-sm bg-card border border-border flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-volt mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Sparkles key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/90 italic leading-relaxed">
                    "Barcode completely changed how I look at training. It’s gritty, loud, and
                    honest. The coaches don’t baby you, but they ensure your technique is locked in
                    before you push weight."
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                  <span className="font-athletic font-black text-foreground uppercase tracking-wider">
                    DEVON R. — 18 MONTHS AT BARCODE
                  </span>
                  <span className="text-volt font-athletic font-bold">+75 LBS SQUAT PR</span>
                </div>
              </div>

              <div className="p-6 rounded-sm bg-secondary/50 border border-border flex flex-col justify-between">
                <div>
                  <p className="text-sm text-foreground/90 italic leading-relaxed">
                    "Finally a gym that isn't obsessed with influencers or pastel wellness nonsense.
                    You walk in, smell the chalk, grab the bar, and do work."
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                  <span className="font-athletic font-black text-foreground uppercase tracking-wider">
                    ELENA K. — SQUAD ATHLETE
                  </span>
                  <span className="text-volt font-athletic font-bold">HYROX COMPETITOR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary border-y border-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
            <div className="border-l-2 border-volt pl-4 sm:pl-6">
              <div className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-foreground">
                500+
              </div>
              <div className="font-athletic text-sm uppercase font-bold tracking-widest text-volt mt-1">
                WORKOUTS COMPLETED
              </div>
              <p className="text-xs text-muted-foreground mt-1">Measured cycles & logged volume</p>
            </div>

            <div className="border-l-2 border-volt pl-4 sm:pl-6">
              <div className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-foreground">
                100+
              </div>
              <div className="font-athletic text-sm uppercase font-bold tracking-widest text-volt mt-1">
                MEMBERS TRAINED
              </div>
              <p className="text-xs text-muted-foreground mt-1">Active committed lifters</p>
            </div>

            <div className="border-l-2 border-volt pl-4 sm:pl-6">
              <div className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-foreground">
                5+
              </div>
              <div className="font-athletic text-sm uppercase font-bold tracking-widest text-volt mt-1">
                TRAINING PROGRAMS
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Strength, velocity & conditioning
              </p>
            </div>

            <div className="border-l-2 border-volt pl-4 sm:pl-6">
              <div className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-foreground">
                1
              </div>
              <div className="font-athletic text-sm uppercase font-bold tracking-widest text-volt mt-1">
                COMMUNITY
              </div>
              <p className="text-xs text-muted-foreground mt-1">One standard. Zero excuses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer / Founder Section */}
      <section id="coach" className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-3/4 rounded-sm overflow-hidden border border-border shadow-2xl relative group">
                <img
                  src={BARCODE_IMAGES.headCoach}
                  alt="Head Coach & Founder of Barcode Gym"
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm bg-background/90 border border-border">
                  <div className="font-display text-xl text-foreground font-black">
                    MARCUS "CODE" VANCE
                  </div>
                  <div className="text-xs font-athletic text-volt uppercase tracking-wider font-bold">
                    Founder & Head of Physical Preparation
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-volt rounded-full" />
                <span className="font-athletic text-xs font-bold uppercase tracking-[0.25em] text-volt">
                  LEADERSHIP & ARCHITECTURE
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground">
                MEET THE COACH BEHIND BARCODE
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                "I didn't want to build another sterile fitness club with 80 identical treadmills
                and zero soul. I built Barcode for the people who want to feel steel in their hands,
                train with raw intention, and build a body that's as capable as it looks."
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="font-athletic text-xs font-bold uppercase tracking-widest text-foreground">
                  TRAINING PHILOSOPHY & CERTIFICATIONS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "CSCS — Certified Strength & Conditioning Specialist",
                    "USA Weightlifting (USAW) Level 2 Coach",
                    "Former Collegiate Track & Field Strength Coach",
                    "12+ Years Developing Urban Athletic Programs",
                  ].map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-sm bg-secondary/50 border border-border text-xs text-foreground/90"
                    >
                      <Check className="w-4 h-4 text-volt shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onBookClick("personal-training")}
                  className="px-8 py-4 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-volt/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>TRAIN WITH ME</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dramatic CTA Section */}
      <section className="relative py-28 overflow-hidden bg-background border-t border-border">
        <div className="absolute inset-0 z-0">
          <img
            src={BARCODE_IMAGES.intenseWarehouse}
            alt="Intense warehouse gym session"
            className="w-full h-full object-cover filter grayscale contrast-150 brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-radial from-background/40 via-background/80 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xs bg-volt/10 border border-volt/30 text-volt text-xs font-athletic font-bold uppercase tracking-widest">
            <span className="w-2 h-2 bg-volt rounded-full animate-ping" />
            <span>ENROLLMENT IS OPEN</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground uppercase leading-[0.92]">
            YOU DON’T NEED ANOTHER GYM MEMBERSHIP. <br />
            <span className="text-volt">YOU NEED A PLACE TO TRAIN.</span>
          </h2>

          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Come experience Barcode. Walk onto the concrete floor, test your baseline, and join a
            crew committed to physical competence.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onBookClick("fitness-assessment")}
              className="w-full sm:w-auto px-9 py-4 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-volt/30 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK YOUR FIRST SESSION</span>
            </button>

            <a
              href="#training"
              className="w-full sm:w-auto px-9 py-4 rounded-sm border border-border bg-secondary/80 hover:bg-secondary text-foreground font-athletic font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <Dumbbell className="w-4 h-4 text-volt" />
              <span>EXPLORE TRAINING</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
