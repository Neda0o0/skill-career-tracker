import pricingPlans from "@/components/sections/Pricing/pricing.data";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="flex flex-col justify-center items-center p-4"
    >
      <span className="text-xs font-medium tracking-widest text-gray-500">
        PRICING
      </span>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Choose your plan
      </h2>
      <div className="mt-6">
        <ul className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((item) => (
            <li
              key={item.id}
              className={`p-4 rounded-2xl border shadow-md ${
                item.isPopular ? "ring-2 ring-indigo-500" : "border-gray-200"
              }`}
            >
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              {item.price !== null ? (
                <span className="block mt-1 font-bold">
                  ${item.price}
                  <span className="text-sm text-gray-500">
                    / {item.billingPeriod}
                  </span>
                </span>
              ) : (
                <span className="block mt-1 font-bold">{item.priceCustom}</span>
              )}
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                {item.description.map((desc, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
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
