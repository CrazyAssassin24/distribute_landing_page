import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WaitlistSection from "@/components/WaitlistSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import PlatformBriefSection from "@/components/PlatformBriefSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WaitlistSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PlatformBriefSection />
      <Footer />
    </main>
  );
}
