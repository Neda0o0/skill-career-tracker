import Button from "@/components/ui/Button";

const AboutCTA = () => {
  return (
    <section className="w-full glass border-2 border-t-amber-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex flex-col">
        <div className="p-5 mt-5 flex flex-col gap-8 justify-center items-center mb-3">
          <h2 className="text-2xl md:text-4xl font-bold text-white/140">
            Ready to Build Your Skills?
          </h2>
          <p className="text-white/130 font-serif">
            SkillTrack helps you stay focused, understand your progress, and
            move forward with confidence.
          </p>
          <div className="flex gap-4">
            <Button variant="secondary" className="text-white glass">
              Start Your Journey
            </Button>
            <Button variant="secondaryOutline" className="text-white/130 glass">
              Explore Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
