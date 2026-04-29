import FeaturesList from "@/components/sections/Features/FeaturesList";

const Features = () => {
  return (
    <section
      id="features"
      className="flex flex-col justify-center items-center p-8 mt-5"
    >
      <span className="text-xs font-medium tracking-widest text-foreground/60">
        FEATURES
      </span>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
        Everything you need to grow
      </h2>
      <div className="mt-6 w-full">
        <FeaturesList />
      </div>
    </section>
  );
};

export default Features;
