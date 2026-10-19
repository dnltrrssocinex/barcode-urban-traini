import { Reveal } from "./Reveal";

export function IntroSection() {
  return (
    <section id="about" className="py-24 bg-card/20 relative border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <Reveal
            variant="right"
            as="h2"
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[0.95]"
          >
            WELCOME TO THE <br />
            <span className="text-volt">CONCRETE BOUTIQUE.</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
