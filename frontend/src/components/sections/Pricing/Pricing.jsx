import pricingPlans from "@/components/sections/Pricing/pricing.data";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="flex flex-col justify-center items-center p-8"
    >
      <span className="text-xs font-medium tracking-widest text-foreground/60">
        PRICING
      </span>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
        Choose your plan
      </h2>
      <div className="mt-6 w-full">
        <ul className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((item) => (
            <li
              key={item.id}
              className={`glass p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200 ${
                item.isPopular
                  ? "ring-2 ring-foreground/60 popular-gold"
                  : "border border-foreground/20"
              }`}
            >
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              {item.price !== null ? (
                <span className="block mt-1 font-bold text-foreground">
                  ${item.price}
                  <span className="text-foreground/70 text-sm">
                    / {item.billingPeriod}
                  </span>
                </span>
              ) : (
                <span className="block mt-1 font-bold text-foreground">
                  {item.priceCustom}
                </span>
              )}
              <ul className="mt-3 space-y-2 text-sm text-foreground/70">
                {item.description.map((desc, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-green-400">✔</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Pricing;
