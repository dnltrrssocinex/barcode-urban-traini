import { Calendar } from "lucide-react";
import { Reveal } from "./Reveal";

interface TrainingSectionProps {
  onBookService: (serviceId: string) => void;
}

const BOOKING_CARDS = [
  {
    id: "personal-training",
    title: "PERSONAL TRAINING",
    type: "1-on-1 Coaching",
    time: "60 Min Private",
    highlight: "Full Custom Blueprint",
  },
  {
    id: "small-group",
    title: "GROUP TRAINING",
    type: "Squad Session",
    time: "50 Min High Adrenaline",
    highlight: "Max 6 Lifters Per Coach",
  },
  {
    id: "fitness-assessment",
    title: "ASSESSMENT / CONSULT",
    type: "Baseline Benchmark",
    time: "45 Min Movement Audit",
    highlight: "Mandatory for New Lifters",
  },
  {
    id: "specialty-session",
    title: "SPECIALTY SESSION",
    type: "Olympic / Combat",
    time: "90 Min Deep Dive",
    highlight: "Barbell & Conditioning Focus",
  },
];

export function TrainingSection({ onBookService }: TrainingSectionProps) {
  return (
    <>
      {/* Dedicated Booking Section */}
      <section id="booking" className="py-24 bg-secondary/30 relative border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal variant="up" as="div">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-volt rounded-full" />
                <span className="font-athletic text-xs font-bold uppercase tracking-[0.25em] text-volt">
                  RESERVE YOUR SPOT
                </span>
              </div>
            </Reveal>
            <Reveal
              variant="up"
              delay={80}
              as="h2"
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground"
            >
              YOUR NEXT SESSION STARTS HERE
            </Reveal>
            <Reveal
              variant="up"
              delay={160}
              as="p"
              className="mt-4 text-sm text-muted-foreground leading-relaxed"
            >
              Direct access into our coaching calendars. Pick your training lane below to lock in
              your assessment or session.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOOKING_CARDS.map((card, i) => (
              <Reveal key={card.id} variant="up" delay={i * 120} as="div" className="h-full">
                <div className="p-6 rounded-sm bg-card border border-border hover:border-volt flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                  <div>
                    <span className="text-[10px] font-athletic font-bold uppercase tracking-widest text-volt">
                      {card.type}
                    </span>
                    <h3 className="font-display text-2xl font-black text-foreground tracking-wide mt-1 mb-2">
                      {card.title}
                    </h3>
                    <div className="text-xs text-muted-foreground font-medium mb-3">
                      {card.time}
                    </div>
                    <div className="text-xs text-foreground/80 py-2 px-3 rounded-xs bg-secondary/60 border border-border/80">
                      {card.highlight}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border/60">
                    <button
                      onClick={() => onBookService(card.id)}
                      className="w-full py-3 rounded-sm bg-volt text-primary-foreground font-athletic font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-volt/20"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>BOOK NOW</span>
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
