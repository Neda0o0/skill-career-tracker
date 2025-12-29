import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import AboutHero from "@/app/about/_components/AboutHero";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <AboutHero />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
