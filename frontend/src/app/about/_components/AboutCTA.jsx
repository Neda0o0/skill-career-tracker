import Button from "@/components/ui/Button";

const AboutCTA = () => {
  return (
    <section className="w-full bg-linear-to-r from-[#6125A7] to-[#1E95E5]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col">
        <div className="p-5 mt-5 flex flex-col gap-8 justify-center items-center mb-3">
          {/* Headline */}
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Ready to Build Your Skills?
          </h2>

          {/* Supporting line */}
          <p className="text-white">
            SkillTrack helps you stay focused, understand your progress, and
            move forward with confidence.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button variant="secondary">Start Your Journey</Button>
            <Button variant="secondaryOutline" className="text-white">
              Explore Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
