import { Calendar } from "lucide-react";
import { Reveal } from "./Reveal";
import { TRAINING_SERVICES } from "../lib/data";

interface TrainingSectionProps {
  onBookService: (serviceId: string) => void;
}

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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TRAINING_SERVICES.map((service, i) => (
              <Reveal key={service.id} variant="up" delay={i * 120} as="div" className="h-full">
                <div className="p-6 rounded-sm bg-card border border-border hover:border-volt flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                  <h3 className="font-display text-2xl font-black text-foreground tracking-wide">
                    {service.name}
                  </h3>

                  <div className="pt-6 mt-6 border-t border-border/60">
                    <button
                      onClick={() => onBookService(service.id)}
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
