const AboutTrust = () => {
  const proofPoints = [
    {
      id: 1,
      label: "10,000+ active learners",
      description:
        "Professionals and students tracking their skills every day.",
    },
    {
      id: 2,
      label: "50,000+ skills tracked",
      description: "Across technology, business, and creative disciplines.",
    },
    {
      id: 3,
      label: "92% learner retention",
      description: "Because clarity keeps people moving forward.",
    },
    {
      id: 4,
      label: "Used in 30+ countries",
      description: "Supporting learners wherever growth happens.",
    },
  ];
  return (
    <section className="bg-blue-100 p-10 dark:bg-purple-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-8">
        <div className="flex flex-col gap-4 justify-center items-center">
          {/* Headline (Trust Anchor) */}
          <h2 className="text-2xl font-semibold">
            Trusted by learners who value clarity and progress.
          </h2>

          {/* Credibility Context (Why Trust Matters) */}
          <p>
            Building skills takes time, focus, and commitment. That’s why trust
            matters — learners need to know their effort is supported by a
            platform that grows with them. SkillTrack is built for long-term
            learning, not short-term engagement.
          </p>
        </div>

        {/* Proof Points (Scannable Metrics) */}
        <ul className="flex justify-between gap-8 flex-col md:flex-row">
          {proofPoints.map(({ id, label, description }) => (
            <li key={id} className="shadow-md rounded-2xl p-5">
              <h3 className="text-lg font-semibold flex justify-center">
                {label}
              </h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>

        {/* Closing Statement (Reassurance) */}
        <p className="flex justify-center italic">
          Trust is earned over time — and we’re committed to earning it every
          day.
        </p>
      </div>
    </section>
  );
};

export default AboutTrust;
