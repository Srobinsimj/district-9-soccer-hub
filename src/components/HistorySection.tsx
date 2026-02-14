import { Trophy, Zap, Target, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Moses D. Johnson",
    role: "Lightning Winger",
    desc: "Known for his blistering pace and mesmerizing dribbles down the flanks. Moses has terrorized opposing defenses for years, delivering crucial goals and assists in tournament finals.",
  },
  {
    icon: Target,
    title: "Isaac Sammy",
    role: "Creative Midfield Maestro",
    desc: "The engine of David Town's attack. Isaac's vision and precise passing unlock defenses at will, orchestrating plays that have become legendary in District #9 football history.",
  },
  {
    icon: ShieldCheck,
    title: "Rock-Solid Defense",
    role: "Defensive Unit",
    desc: "David Town's backline is renowned as the most disciplined in the tournament. Their organization and tactical awareness have kept countless clean sheets across multiple seasons.",
  },
];

const HistorySection = () => {
  return (
    <section id="history" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-body uppercase tracking-widest text-primary font-medium">
              The Dynasty
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mt-2">
              David Town <span className="text-gradient-gold">Legacy</span>
            </h2>
          </div>

          <div className="bg-gradient-card rounded-xl border border-accent/20 p-8 md:p-10 mb-12 glow-gold">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-8 h-8 text-accent" />
              <h3 className="font-heading text-2xl font-bold uppercase text-accent">
                5× Champions
              </h3>
            </div>
            <p className="text-foreground/80 font-body leading-relaxed text-base md:text-lg">
              David Town stands as the most decorated community in the history of the 
              District #9 Tournament. With <strong className="text-accent">five championship titles</strong>, 
              they have set the standard for excellence in Sinkor community football. Their dominance 
              spans over a decade of thrilling matches, unforgettable comebacks, and a winning culture 
              that has inspired generations of young players across Monrovia.
            </p>
            <p className="text-foreground/80 font-body leading-relaxed text-base md:text-lg mt-4">
              What sets David Town apart is not just talent—it's their <strong className="text-primary">
              discipline, teamwork, and tactical intelligence</strong>. Under strong leadership and with 
              a roster filled with some of the finest players to grace the tournament, they have 
              consistently outperformed rivals to claim the coveted District #9 trophy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="bg-gradient-card rounded-lg border border-border p-6 hover:border-primary/30 transition-colors"
              >
                <h.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-heading text-lg font-bold uppercase">{h.title}</h4>
                <p className="text-accent text-xs font-body uppercase tracking-wider mb-3">
                  {h.role}
                </p>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
