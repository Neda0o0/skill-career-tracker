import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="px-6 py-20">
      <div
        style={{ backgroundColor: "#0b3d60" }}
        className="rounded-2xl mx-auto max-w-8xl px-6 py-20 flex flex-col items-center text-center gap-8"
      >
        {/* Text Content */}
        <div className="space-y-4 p-5 flex flex-col gap-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-5">
            Empowering Your Journey to Skill Mastery
          </h1>
          <p className="text-white text-lg">
            At Skill Track, we believe in transforming potential into excellence
            through personalized learning paths, expert guidance, and
            cutting-edge technology that adapts to your unique goals.
          </p>
        </div>

        {/* Visual Accent */}
        <div className="flex gap-4 justify-center p-5">
          <Image
            src={"/images/about/path1.png"}
            alt="Learning path"
            width={100}
            height={100}
            className="rounded-full"
          />
          <Image
            src={"/images/about/path2.png"}
            alt="Skill growth"
            width={100}
            height={100}
            className="rounded-full"
          />
          <Image
            src={"/images/about/path3.png"}
            alt="Career progress"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
