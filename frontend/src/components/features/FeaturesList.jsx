import featuresData from "@/components/features/features.data";

const FeaturesList = () => {
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      {featuresData.map((item) => (
        <li key={item.id} className="card-clock-border p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900">{item.title}</h3>
          <p className="mt-2 text-sm text-gray-600">{item.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;
