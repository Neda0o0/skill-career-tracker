import Image from "next/image";

const RegisterHero = () => {
  const RegisterHeroData = [
    {
      id: 1,
      title: "Track unlinited skills",
      avatar: "/images/goal.png",
    },
    {
      id: 2,
      title: "Set and achieve career goals",
      avatar: "/images/goal.png",
    },
    {
      id: 3,
      title: "Get personalized insights",
      avatar: "/images/goal.png",
    },
    {
      id: 4,
      title: "Join a community of learners",
      avatar: "/images/goal.png",
    },
  ];
  return (
    <div className="bg-amber-400 md:h-screen">
      <div className="p-5">
        <div className="text-2xl font-semibold">
          <h2>SkillTrack</h2>
        </div>
        <div>
          <h1 className="md:text-5xl text-3xl font-bold">
            Start Your Growth Journey
          </h1>
        </div>
        <div className="flex justify-between">
          <div>
            <ul>
              {RegisterHeroData.map((item) => (
                <li key={item.id} className="flex items-center">
                  <Image
                    src={item.avatar}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                  <h4 className="text-gray-300">{item.title}</h4>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image
              src={"/images/dashboard.png"}
              alt="dashboard"
              width={200}
              height={100}
            />
          </div>
        </div>
        <div className="text-gray-300 flex justify-center">
          <span></span>
          <span>Join 10,000 + professionals</span>
        </div>
      </div>
    </div>
  );
};

export default RegisterHero;
