import Image from "next/image";

const AboutSolution = () => {
  const coreSolutionPillars = [
    {
      id: 1,
      label: "Personalized learning paths",
      description:
        "Clear steps tailored to your goals, experience level, and interests.",
    },
    {
      id: 2,
      label: "Progress you can actually see",
      description:
        "Track growth over time and understand exactly where you stand.",
    },
    {
      id: 3,
      label: "Smart insights and guidance",
      description:
        "Actionable feedback that helps you adjust, improve, and stay focused.",
    },
    {
      id: 4,
      label: "Motivation that lasts",
      description:
        "Structure, milestones, and community support that keep you moving forward.",
    },
  ];
  return (
    <section className="bg-blue-100 p-5">
      <div className="max-w-7xl mx-auto px-4 flex md:flex-row flex-col">
        <div className="p-2 flex flex-col gap-4 md:justify-center mb-3">
          {/* Headline (Solution Promise) */}
          <h1 className="text-2xl font-semibold">
            A clearer way to grow — built around you.
          </h1>

          {/* Solution Context (What We Do) */}
          <p>
            SkillTrack turns learning into a guided journey, not a guessing
            game. Instead of scattered resources and unclear outcomes, we
            provide structure, visibility, and direction — all in one place.
            Every learner starts with different goals, strengths, and pace.
            That’s why SkillTrack adapts to you, not the other way around.
          </p>

          {/* Core Solution Pillars (Scannable) */}
          <ul>
            {coreSolutionPillars.map(({ id, label, description }) => (
              <li key={id} className="p-2">
                <h2 className="text-lg font-semibold">{label}</h2>
                <p>{description}</p>
              </li>
            ))}
          </ul>

          {/* Outcome / Vision (Closing Bridge) */}
          <p>
            With SkillTrack, learning becomes intentional — and progress finally
            feels real.
          </p>
        </div>
        <Image
          src={"/images/about/solution.png"}
          alt="Pathway to Success"
          width={900}
          height={100}
        />
        {/* <figure className="flex flex-col items-center">
          <Image
            src={"/images/about/solution.png"}
            alt="Pathway to Success"
            width={900}
            height={100}
          />
          <figcaption className="text-sm text-gray-500">
            Pathway to Success
          </figcaption>
        </figure> */}
      </div>
    </section>
  );
};

export default AboutSolution;
