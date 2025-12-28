"use client";

import Image from "next/image";
import { ChartBar, Target, Lightbulb, Users } from "phosphor-react";

const RegisterHero = () => {
  const BENEFITS = [
    {
      id: 1,
      label: "Track unlinited skills",
      Icon: ChartBar,
    },
    {
      id: 2,
      label: "Set and achieve career goals",
      Icon: Target,
    },
    {
      id: 3,
      label: "Get personalized insights",
      Icon: Lightbulb,
    },
    {
      id: 4,
      label: "Join a community of learners",
      Icon: Users,
    },
  ];
  return (
    <section className="bg-amber-400 md:h-screen">
      <div className="p-5 flex flex-col gap-10">
        {/* Brand */}
        <div className=" flex items-center gap-2">
          <Image
            src={"/images/Logo.png"}
            alt="SkillTrack logo"
            width={100}
            height={90}
          />
          <h2 className="text-2xl font-semibold">SkillTrack</h2>
        </div>

        {/* Value Proposition */}
        <div>
          <h1 className="md:text-5xl text-3xl font-extrabold">
            Start Your Growth Journey
          </h1>
        </div>

        {/* Core Content */}
        <div className="flex justify-between items-center gap-10">
          {/* Benefits */}
          <ul className="flex flex-col gap-4">
            {BENEFITS.map(({ id, label, Icon }) => (
              <li key={id} className="flex items-center gap-3">
                <Icon size={14} weight="light" />
                <span className="text-gray-300">{label}</span>
              </li>
            ))}
          </ul>
          {/* Product Preview */}
          <Image
            src={"/images/dashboard.png"}
            alt="SkillTrack dashboard preview"
            width={400}
            height={240}
            className="rounded-xl"
          />
        </div>

        {/* Social Proof */}
        <div className="text-gray-300 text-center">
          Join 10,000+ professionals
        </div>
      </div>
    </section>
  );
};

export default RegisterHero;
