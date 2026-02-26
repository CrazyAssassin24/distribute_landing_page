import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PerformanceSection from "@/components/PerformanceSection";
import FeaturesSection from "@/components/FeaturesSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      {/* Global Background */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <Image
          src="/hero_bg.png"
          alt="Atmospheric background"
          fill
          style={{
            objectFit: "cover",
            opacity: 0.15,
            objectPosition: "50% 50%"
          }}
          priority
          className="bg-image-mobile"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(17,16,24,0.2) 0%, rgba(17,16,24,0.5) 50%, rgba(9, 8, 14, 0.8) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 50% 20%, rgba(201,185,122,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <HeroSection />
        <VideoSection />
        <HowItWorksSection />
        <PerformanceSection />
        <FeaturesSection />
        <WaitlistSection />
        <Footer />
      </div>
    </main>
  );
}
