import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import AboutHero from "@/app/about/_components/AboutHero";
import AboutProblem from "@/app/about/_components/AboutProblem";
import AboutSolution from "@/app/about/_components/AboutSolution";
import AboutValues from "@/app/about/_components/AboutValues";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-7xl mx-auto px-4">
        <AboutHero />
        <AboutProblem />
        <AboutSolution />
        <AboutValues />
        {/*
          <AboutMission />
          <AboutTrust />
          <AboutCTA /> */}
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
