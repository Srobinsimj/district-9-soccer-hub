import { Trophy } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-10 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Trophy className="w-5 h-5 text-primary" />
          <span className="font-heading text-lg font-bold uppercase">District #9 Tournament</span>
        </div>
        <p className="text-muted-foreground text-sm font-body">
          Sinkor, Monrovia, Liberia · Uniting Communities Through Football
        </p>
        <p className="text-muted-foreground/50 text-xs font-body mt-4">
          © 2026 District #9 Community Football. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
