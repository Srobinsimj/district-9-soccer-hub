import { Shield, Star } from "lucide-react";

const teams = [
  { name: "David Town", titles: 5, badge: "🏆", highlight: true },
  { name: "Lapazee", titles: 2, badge: "⚽" },
  { name: "Airfield", titles: 1, badge: "✈️" },
  { name: "Old Road", titles: 2, badge: "🛤️" },
  { name: "12th Street", titles: 1, badge: "🏠" },
  { name: "Roato Town", titles: 1, badge: "🔥" },
  { name: "Jalloh Town", titles: 1, badge: "💪" },
];

const TeamsSection = () => {
  return (
    <section id="teams" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-sm font-body uppercase tracking-widest text-primary font-medium">
            Competing Communities
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mt-2">
            The <span className="text-gradient-gold">Teams</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {teams.map((team) => (
            <div
              key={team.name}
              className={`bg-gradient-card rounded-lg p-6 border transition-all duration-300 hover:-translate-y-1 ${
                team.highlight
                  ? "border-accent/50 glow-gold"
                  : "border-border hover:border-primary/30"
              }`}
            >
              <div className="text-4xl mb-3">{team.badge}</div>
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-4 h-4 text-primary" />
                <h3 className="font-heading text-xl font-semibold uppercase">
                  {team.name}
                </h3>
              </div>
              {team.highlight && (
                <div className="flex items-center gap-1 mt-2">
                  {Array.from({ length: team.titles }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              )}
              <p className="text-muted-foreground text-sm mt-2 font-body">
                {team.titles} Tournament Title{team.titles > 1 ? "s" : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
