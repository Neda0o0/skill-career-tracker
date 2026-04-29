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
    <section className="p-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-8">
        <div className="flex flex-col gap-4 justify-center items-center">
          {/* Headline (Belief) */}
          <h2 className="text-2xl font-semibold text-white text-shadow-md">
            What we believe shapes everything we build!
          </h2>
          <p className="text-white/130 font-medium">
            At SkillTrack, values are not statements on a wall. They guide how
            we design experiences, make decisions, and support learners at every
            step. These principles keep us focused on what truly matters: real
            growth, real people, and real outcomes.
          </p>
        </div>
        <ul className="flex justify-between gap-8 flex-col md:flex-row">
          {coreValues.map(({ id, label, description }) => (
            <li
              key={id}
              className="shadow-md rounded-2xl rounded-b-3xl border-2 border-t-amber-200 border-b-amber-200 p-5 glass"
            >
              <h3 className="font-bold justify-center text-white/150">
                {label}
              </h3>
              <p className="font-normal mt-4 text-white/130">{description}</p>
            </li>
          ))}
        </ul>

        <p className="flex justify-center italic font-serif">
          These values shape how SkillTrack grows — alongside the people who use
          it.
        </p>
      </div>
    </section>
  );
};

export default AboutValues;
