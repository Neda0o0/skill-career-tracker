import Hero from "@/components/sections/Hero/Hero";
import Features from "@/components/sections/Features/Features";
import Header from "@/components/layout/Header/Header";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import Pricing from "@/components/sections/Pricing/Pricing";
export default function Home() {
  return (
    <main>
      <Header />
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white dark:bg-black flex flex-col justify-center">
          <Hero />
          <Features />
          <HowItWorks />
          <Pricing />
        </div>
      </div>
    </main>
  );
}
