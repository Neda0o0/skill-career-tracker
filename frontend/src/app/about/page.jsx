import Header from "@/components/layout/Header/Header";
import AboutHero from "@/app/about/_components/AboutHero";
import AboutProblem from "@/app/about/_components/AboutProblem";
import AboutSolution from "@/app/about/_components/AboutSolution";
import AboutValues from "@/app/about/_components/AboutValues";
import AboutTrust from "@/app/about/_components/AboutTrust";
import AboutCTA from "@/app/about/_components/AboutCTA";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Header />
      <main>
        {/* className="max-w-7xl mx-auto px-4" */}
        <AboutHero />
        <AboutProblem />
        <AboutSolution />
        <AboutValues />
        <AboutTrust />
        <AboutCTA />
      </main>
    </div>
  );
};

export default AboutUs;
