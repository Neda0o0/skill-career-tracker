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
    <section>
      <div>
        {/* Headline (Trust Anchor) */}
        <h1>Trusted by learners who value clarity and progress.</h1>

        {/* Credibility Context (Why Trust Matters) */}
        <p>
          Building skills takes time, focus, and commitment. That’s why trust
          matters — learners need to know their effort is supported by a
          platform that grows with them. SkillTrack is built for long-term
          learning, not short-term engagement.
        </p>

        {/* Proof Points (Scannable Metrics) */}
        <ul>
          {proofPoints.map(({ id, label, description }) => (
            <li key={id}>
              <h2>{label}</h2>
              <p>{description}</p>
            </li>
          ))}
        </ul>

        {/* Closing Statement (Reassurance) */}
        <p>
          Trust is earned over time — and we’re committed to earning it every
          day.
        </p>
      </div>
    </section>
  );
};

export default AboutTrust;
