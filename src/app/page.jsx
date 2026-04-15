import HeroSection from "@/components/hero/HeroSection";
import BentoGrid from "@/components/BentoGrid/BentoGrid";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <HeroSection />
      <BentoGrid />
    </main>
  );
}
