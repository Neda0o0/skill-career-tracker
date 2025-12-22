import FeaturesList from "@/components/features/FeaturesList";

const Features = () => {
  return (
    <section className="flex flex-col justify-center items-center p-4">
      <span className="text-xs font-medium tracking-widest text-gray-500">
        FEATURES
      </span>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Everything you need to grow
      </h2>
      <div className="mt-6">
        <FeaturesList />
      </div>
    </section>
  );
};

export default Features;
