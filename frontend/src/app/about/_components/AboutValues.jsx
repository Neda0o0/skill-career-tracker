const AboutValues = () => {
  const coreValues = [
    {
      id: 1,
      label: "Clarity over complexity",
      description:
        "Learning should feel understandable, focused, and intentional — never overwhelming.",
    },
    {
      id: 2,
      label: "Progress before perfection",
      description:
        "Growth happens through consistent steps, not flawless performance.",
    },
    {
      id: 3,
      label: "Learner-first by design",
      description:
        "Every feature exists to serve real goals, real challenges, and real journeys.",
    },
    {
      id: 4,
      label: "Trust through transparency",
      description: "Clear progress, honest feedback, and no hidden metrics.",
    },
    {
      id: 5,
      label: "Sustainable motivation",
      description:
        "We build systems that help learners stay engaged long after the first week.",
    },
  ];
  return (
    <section>
      <div>
        {/* Headline (Belief) */}
        <h1>What we believe shapes everything we build.</h1>

        {/* Values Context (Why Values Matter) */}
        <p>
          At SkillTrack, values are not statements on a wall. They guide how we
          design experiences, make decisions, and support learners at every
          step. These principles keep us focused on what truly matters: real
          growth, real people, and real outcomes.
        </p>

        {/* Core Values (Scannable) */}
        <ul>
          {coreValues.map(({ id, label, description }) => (
            <li key={id}>
              <h2>{label}</h2>
              <p>{description}</p>
            </li>
          ))}
        </ul>

        {/* Closing Statement (Identity) */}
        <p>
          These values shape how SkillTrack grows — alongside the people who use
          it.
        </p>
      </div>
    </section>
  );
};

export default AboutValues;
