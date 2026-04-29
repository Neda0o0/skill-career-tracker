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
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row">
      <div className="p-2 flex flex-col gap-4 md:justify-center mb-3 md:w-1/2 lg:w-2/5">
        <h2 className="text-2xl font-semibold text-white text-shadow-md">
          A clearer way to grow — built around you!
        </h2>
        <p className="font-medium text-justify">
          SkillTrack turns learning into a guided journey, not a guessing game.
          Instead of scattered resources and unclear outcomes, we provide
          structure, visibility, and direction — all in one place. Every learner
          starts with different goals, strengths, and pace. That’s why
          SkillTrack adapts to you, not the other way around.
        </p>
        <ul>
          {coreSolutionPillars.map(({ id, label, description }, index) => {
            let borderDetails = "";
            let firstBorder =
              "border-amber-200 border-r-2 border-b-2 rounded-br-2xl shadow-md shadow-amber-100";
            let secondBorder =
              "border-amber-200 border-l-2 border-b-2 rounded-bl-2xl shadow-md shadow-amber-100";
            if (id === "unique-id-1" || index === 0) {
              borderDetails = firstBorder;
            } else if (id === "unique-id-2" || index === 1) {
              borderDetails = secondBorder;
            } else if (id === "unique-id-3" || index === 2) {
              borderDetails = firstBorder;
            } else if (id === "unique-id-4" || index === 3) {
              borderDetails = secondBorder;
            }

            return (
              <li key={id} className={`p-2 ${borderDetails}`}>
                <h3 className="text-xl font-semibold">{label}</h3>
                <p className="font-medium px-2 py-2">{description}</p>
              </li>
            );
          })}
        </ul>

        <p className="border-b-2 border-blue-300 shadow-md shadow-blue-200 px-2 py-2 font-medium">
          With SkillTrack, learning becomes intentional — and progress finally
          feels real.
        </p>
      </div>
      <div className="md:w-1/2 lg:w-3/5 flex items-center justify-center">
        <Image
          src={"/images/about/solution.png"}
          alt="Pathway to Success"
          width={900}
          height={100}
          className="object-contain w-full h-auto"
        />
      </div>
    </section>
  );
};

export default AboutSolution;

{
  /* <figure className="flex flex-col items-center">
  <Image
    src={"/images/about/solution.png"}
    alt="Pathway to Success"
    width={900}
    height={100}
  />
  <figcaption className="text-sm text-gray-500">
    Pathway to Success
  </figcaption>
</figure> */
}
