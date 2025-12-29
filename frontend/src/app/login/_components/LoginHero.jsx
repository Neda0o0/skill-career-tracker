import Image from "next/image";

const LoginHero = () => {
  return (
    <section className="h-full">
      <div className="flex flex-col flex-1 justify-center items-center mb-5">
        <Image
          src={"/images/Logo1.png"}
          alt="Logo"
          width={200}
          height={100}
          className="mt-5"
        />
        <h1 className="text-4xl font-semibold ">
          Track your skills! <br /> Build your career!
        </h1>
        <Image
          src={"/images/dashboard.png"}
          alt="dashboard"
          width={300}
          height={100}
          className="rounded-md border-3 border-gray-200 mt-10"
        />
        <p className="mt-10">
          “SkillTrack transformed my career journey” - Sarah J.
        </p>
        <span className="mt-2">⭐⭐⭐⭐⭐</span>
      </div>
    </section>
  );
};

export default LoginHero;
