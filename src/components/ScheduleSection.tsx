import { Clock, MapPin, Calendar as CalIcon } from "lucide-react";

const matches = [
  { home: "David Town", away: "Lapazee", date: "Sat, Mar 7", time: "3:00 PM", venue: "Sinkor Field A" },
  { home: "Airfield", away: "Old Road", date: "Sat, Mar 7", time: "5:00 PM", venue: "Sinkor Field A" },
  { home: "12th Street", away: "Roato Town", date: "Sun, Mar 8", time: "3:00 PM", venue: "Sinkor Field B" },
  { home: "Jalloh Town", away: "David Town", date: "Sun, Mar 8", time: "5:00 PM", venue: "Sinkor Field A" },
  { home: "Lapazee", away: "Airfield", date: "Sat, Mar 14", time: "3:00 PM", venue: "Sinkor Field A" },
  { home: "Old Road", away: "12th Street", date: "Sat, Mar 14", time: "5:00 PM", venue: "Sinkor Field B" },
  { home: "Roato Town", away: "Jalloh Town", date: "Sun, Mar 15", time: "3:00 PM", venue: "Sinkor Field A" },
  { home: "David Town", away: "Airfield", date: "Sun, Mar 15", time: "5:00 PM", venue: "Sinkor Field A" },
  { home: "Lapazee", away: "Old Road", date: "Sat, Mar 21", time: "3:00 PM", venue: "Sinkor Field B" },
  { home: "12th Street", away: "Jalloh Town", date: "Sat, Mar 21", time: "5:00 PM", venue: "Sinkor Field A" },
  { home: "Roato Town", away: "David Town", date: "Sun, Mar 22", time: "3:00 PM", venue: "Sinkor Field A" },
  { home: "Airfield", away: "Jalloh Town", date: "Sun, Mar 22", time: "5:00 PM", venue: "Sinkor Field B" },
  { home: "Old Road", away: "Roato Town", date: "Sat, Mar 28", time: "3:00 PM", venue: "Sinkor Field A" },
  { home: "David Town", away: "12th Street", date: "Sat, Mar 28", time: "5:00 PM", venue: "Sinkor Field A" },
  { home: "Lapazee", away: "Jalloh Town", date: "Sun, Mar 29", time: "3:00 PM", venue: "Sinkor Field B" },
  { home: "Airfield", away: "Roato Town", date: "Sun, Mar 29", time: "5:00 PM", venue: "Sinkor Field A" },
  { home: "Old Road", away: "David Town", date: "Sat, Apr 4", time: "3:00 PM", venue: "Sinkor Field A" },
  { home: "12th Street", away: "Lapazee", date: "Sat, Apr 4", time: "5:00 PM", venue: "Sinkor Field B" },
  { home: "Jalloh Town", away: "Lapazee", date: "Sun, Apr 5", time: "3:00 PM", venue: "Sinkor Field A" },
  { home: "Roato Town", away: "Lapazee", date: "Sun, Apr 5", time: "5:00 PM", venue: "Sinkor Field A" },
  { home: "David Town", away: "Roato Town", date: "Sat, Apr 11", time: "4:00 PM", venue: "Sinkor Field A — Semi Final" },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-sm font-body uppercase tracking-widest text-primary font-medium">
            Fixtures
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mt-2">
            Match <span className="text-gradient-gold">Schedule</span>
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-heading uppercase text-sm text-muted-foreground tracking-wider">Match</th>
                <th className="text-center py-4 px-4 font-heading uppercase text-sm text-muted-foreground tracking-wider">Day & Date</th>
                <th className="text-center py-4 px-4 font-heading uppercase text-sm text-muted-foreground tracking-wider">Time</th>
                <th className="text-right py-4 px-4 font-heading uppercase text-sm text-muted-foreground tracking-wider">Venue</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((m, i) => (
                <tr
                  key={i}
                  className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                >
                  <td className="py-4 px-4">
                    <span className="font-heading font-semibold text-foreground">{m.home}</span>
                    <span className="text-muted-foreground mx-2 text-sm">vs</span>
                    <span className="font-heading font-semibold text-foreground">{m.away}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <CalIcon className="w-3.5 h-3.5 text-primary" />
                      {m.date}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      {m.time}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      {m.venue}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {matches.map((m, i) => (
            <div key={i} className="bg-gradient-card rounded-lg border border-border p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="font-heading font-semibold">{m.home}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider px-2 py-1 rounded bg-muted">vs</span>
                <span className="font-heading font-semibold">{m.away}</span>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CalIcon className="w-3 h-3 text-primary" />
                  {m.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-accent" />
                  {m.time}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-primary" />
                  {m.venue}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
