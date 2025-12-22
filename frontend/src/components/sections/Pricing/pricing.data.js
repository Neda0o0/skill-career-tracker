const pricingPlans = [
  {
    id: 1,
    title: "Free Plan",
    price: 0,
    billingPeriod: "month",
    description: [
      "Basic Skill Tracking",
      "One Goal",
      "Limited Analytics",
      "Community Support",
    ],
  },
  {
    id: 2,
    title: "Pro Plan",
    price: 19,
    billingPeriod: "month",
    isPopular: true,
    description: [
      "Unlimited Skills",
      "Multiple Goals",
      "Advanced Analytics",
      "Learning Paths",
    ],
  },
  {
    id: 3,
    title: "Enterprise Plan",
    price: null,
    priceCustom: "Custom Pricing",
    billingPeriod: "month",
    isCustom: true,
    description: [
      "Team Management",
      "Custom Goals",
      "API Access",
      "Dedicated Success Manager",
      "Service Level Agreement (SLA)",
    ],
  },
];

export default pricingPlans;
