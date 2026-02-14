import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TeamsSection from "@/components/TeamsSection";
import HistorySection from "@/components/HistorySection";
import ScheduleSection from "@/components/ScheduleSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TeamsSection />
      <HistorySection />
      <ScheduleSection />
      <FooterSection />
    </div>
  );
};

export default Index;
