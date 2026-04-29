import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="w-full">
      {/* bg-linear-to-r from-[#6125A7] to-[#1E95E5] */}
      <div className="max-w-7xl mx-auto px-4 flex md:flex-row flex-col">
        <div className="p-2 flex flex-col gap-5 md:justify-center mb-3">
          <h1 className="text-2xl md:text-4xl font-bold text-white mt-5 text-shadow-md">
            Empowering Your Journey to Skill Mastery
          </h1>
          <p className="text-white/130 font-medium w-[80%]">
            At Skill Track, we believe in transforming potential into excellence
            through personalized learning paths, expert guidance, and
            cutting-edge technology that adapts to your unique goals.
          </p>
        </div>
        <Image
          src={"/images/about/hero.jpg"}
          alt="SkillTrack learning experience"
          width={1000}
          height={100}
          className="rounded-tl-4xl rounded-br-4xl mt-2 shadow-lg shadow-blue-200"
        />
      </div>
    </section>
  );
};

export default AboutHero;
