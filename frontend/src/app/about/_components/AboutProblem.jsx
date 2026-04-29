import Image from "next/image";

const AboutProblem = () => {
  return (
    <section>
      <div className="flex md:flex-row flex-col-reverse">
        <div className="md:w-full ">
          <Image
            src={"/images/about/problem.png"}
            alt="Skill Gap & Stagnation"
            width={1000}
            height={100}
          />
        </div>
        <div className="flex flex-col justify-center gap-5">
          <h2 className="text-2xl md:w-[80%] font-medium text-shadow-md text-white">
            Learning has never been easier — yet progress has never been harder.
          </h2>
          <p className="md:w-[80%]">
            Today, learning resources are everywhere. Courses, tutorials,
            videos, and communities are just one click away. But without a clear
            path, most people don’t know what to learn next, how far they’ve
            come, or whether their effort is actually paying off.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutProblem;
