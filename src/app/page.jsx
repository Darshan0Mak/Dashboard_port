import HeroSection from "../components/hero/HeroSection";
import BentoGrid from "../components/BentoGrid/BentoGrid";
import Testimonials from "../components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <HeroSection />
      <BentoGrid />
      {/* <Testimonials /> */}
    </main>
  );
}
