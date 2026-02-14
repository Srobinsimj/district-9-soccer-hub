import heroBanner from "@/assets/hero-banner.jpg";
import { Trophy, MapPin, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="District 9 Soccer Tournament action shot"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6 animate-pulse-glow">
          <Trophy className="w-4 h-4 text-accent" />
          <span className="text-sm font-body font-medium text-accent uppercase tracking-widest">
            2026 Season
          </span>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight mb-4">
          District <span className="text-gradient-gold">#9</span>
        </h1>
        <h2 className="font-heading text-3xl md:text-5xl font-semibold uppercase text-primary mb-6">
          Community Football Tournament
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground mb-10">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-body text-sm">Sinkor, Monrovia, Liberia</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="font-body text-sm">Season 2026</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#schedule"
            className="px-8 py-3 bg-primary text-primary-foreground font-heading uppercase tracking-wider text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
          >
            View Schedule
          </a>
          <a
            href="#teams"
            className="px-8 py-3 border border-accent text-accent font-heading uppercase tracking-wider text-sm font-semibold rounded-md hover:bg-accent/10 transition-colors"
          >
            Meet The Teams
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
