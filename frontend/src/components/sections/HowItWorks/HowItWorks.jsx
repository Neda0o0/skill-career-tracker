import HowItWorksData from "@/components/sections/HowItWorks/howItWorks.data";

const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="flex flex-col justify-center items-center p-8"
    >
      <span className="text-xs font-medium tracking-widest text-foreground/60">
        HOW IT WORKS
      </span>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
        Start tracking in 3 simple steps
      </h2>
      <div className="mt-6 w-full relative">
        <ul className="flex flex-col gap-2 md:gap-10 lg:gap-20 md:flex-row justify-center items-center">
          {HowItWorksData.map((item, index) => (
            <li
              key={item.id}
              className="glass relative p-4 flex flex-col items-center justify-center text-center aspect-square w-50 rounded-full shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <div className="absolute left-3 bg-transparent top-1/9 -translate-y-1/2 flex items-center justify-center text-xl font-bold text-cyan-800 border border-amber-200 dark:text-cyan-200 w-10 h-10 rounded-full shadow-md text-shadow-md text-shadow-amber-50 dark:text-shadow-xs">
                {index + 1}
              </div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/80">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks;
