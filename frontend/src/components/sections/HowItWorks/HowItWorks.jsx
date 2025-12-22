import HowItWorksData from "@/components/sections/HowItWorks/howItWorks.data";

const HowItWorks = () => {
  return (
    <section className="flex flex-col justify-center items-center p-4">
      <span className="text-xs font-medium tracking-widest text-gray-500">
        HOW IT WORKS
      </span>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Start tracking in 3 simple steps
      </h2>
      <div className="mt-6">
        <ul className="grid md:grid-cols-3 gap-5">
          {HowItWorksData.map((item) => (
            <li key={item.id} className="p-4">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks;
