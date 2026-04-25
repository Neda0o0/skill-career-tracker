// import Image from "next/image";
// import Button from "@/components/ui/Button";

// const Hero = () => {
//   return (
//     <>
//       <div className="bg-white dark:bg-purple-800 mt-3 p-8 w-full flex items-center shadow-sm hover:shadow-md transition-shadow duration-200 dark:shadow-none">
//         <div className="hidden md:flex w-1/2 justify-center">
//           <div className="relative w-125 h-75">
//             <Image
//               src="/images/laptop.png"
//               alt="laptop"
//               fill
//               sizes="(min-width: 768px) 500px"
//               className="object-contain"
//               priority
//             />
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <h1 className="text-4xl font-bold mb-4">
//             Track your skills, <br />
//             Build your career!
//           </h1>
//           <p className="font-semibold mb-4 md:w-[50%]">
//             Discover your strengths, set goals, and visualize your progress to
//             unlock new opportunities.
//           </p>
//           <div className="flex gap-4 items-center justify-center md:justify-start">
//             <Button>Get Started</Button>
//             <Button variant="primaryOutline">View Dashboard</Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;
import Image from "next/image";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <div className="glass mt-20 mb-4 p-8 w-full flex flex-col md:flex-row items-center transition-shadow duration-200 hover:shadow-lg">
      <div className="hidden md:flex w-1/2 justify-center">
        <div className="relative w-125 h-75">
          <Image
            src="/images/laptop.png"
            alt="laptop"
            fill
            sizes="(min-width: 768px) 500px"
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Track your skills, <br />
          Build your career!
        </h1>
        <p className="font-semibold mb-4 md:w-[50%] text-foreground/90">
          Discover your strengths, set goals, and visualize your progress to
          unlock new opportunities.
        </p>
        <div className="flex gap-4 items-center justify-center md:justify-start">
          <Button className="glass px-6 py-3 font-semibold rounded-xl">
            Get Started
          </Button>
          <Button className="glass px-6 py-3 font-semibold rounded-xl border border-foreground/30">
            View Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
