import Image from "next/image";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <>
      <div className="bg-white mt-3 p-8 w-full flex items-center shadow-sm hover:shadow-md transition-shadow duration-200 dark:shadow-none">
        <div className="hidden md:flex w-1/2 justify-center">
          <Image
            src="/images/laptop.png"
            alt="laptop"
            width={500}
            height={300}
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Track your skills, <br />
            Build your career!
          </h1>
          <p className="font-semibold mb-4 md:w-[50%]">
            Discover your strengths, set goals, and visualize your progress to
            unlock new opportunities.
          </p>
          <div className="flex gap-4 items-center justify-center md:justify-start">
            <Button>Get Started</Button>
            <Button variant="primaryOutline">View Dashboard</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
