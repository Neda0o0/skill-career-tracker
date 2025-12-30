const AboutProblem = () => {
  const painPoints = [
    {
      id: 1,
      label: "No clear direction",
      description:
        "Learning often starts strong but quickly turns into confusion and guesswork.",
    },
    {
      id: 2,
      label: "Invisible progress",
      description:
        "Skills grow silently, making it hard to stay motivated or confident.",
    },
    {
      id: 3,
      label: "One-size-fits-all content",
      description:
        "Everyone learns differently, yet most platforms treat all learners the same.",
    },
    {
      id: 4,
      label: "Lost momentum over time",
      description:
        "Without structure and feedback, consistency fades and goals are abandoned.",
    },
  ];
  return (
    <section>
      <div className="flex flex-col p-20 gap-10">
        {/* Headline (Problem Statement) */}
        <h1 className="md:text-4xl text-2xl font-bold">
          Learning has never been easier — yet progress has never been harder.
        </h1>

        {/* Context Paragraph */}
        <p className="font-normal">
          Today, learning resources are everywhere. Courses, tutorials, videos,
          and communities are just one click away. But without a clear path,
          most people don’t know
          <strong> what to learn next, how far they’ve come</strong>, or
          <strong> whether their effort is actually paying off</strong>.
        </p>

        {/* Pain Points (Scannable) */}
        <ul className="flex flex-col md:flex-row gap-4">
          {painPoints.map(({ id, label, description }) => (
            <li
              key={id}
              className="p-5 shadow-md rounded-md flex flex-col items-center"
            >
              <h3 className="text-xl font-medium m-2">{label}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>

        {/* Transition Line (Bridge to Solution) */}
        <p>
          <strong>
            We believe learning should feel intentional, measurable, and
            motivating — not overwhelming.
          </strong>
        </p>
      </div>
    </section>
  );
};

export default AboutProblem;
