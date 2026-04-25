// import featuresData from "@/components/sections/Features/features.data";

// const FeaturesList = () => {
//   return (
//     <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
//       {featuresData.map((item) => (
//         <li key={item.id} className="card-clock-border p-4 shadow-sm">
//           <h3 className="font-semibold text-gray-900 dark:text-gray-100">
//             {item.title}
//           </h3>
//           <p className="mt-2 text-sm text-gray-600 dark:text-gray-100">
//             {item.description}
//           </p>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default FeaturesList;
// FeaturesList.js
import featuresData from "@/components/sections/Features/features.data";

const FeaturesList = () => {
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
      {featuresData.map((item) => (
        <li
          key={item.id}
          className="card-clock-border glass p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200"
        >
          <h3 className="font-semibold text-foreground">{item.title}</h3>
          <p className="mt-2 text-sm text-foreground/80">{item.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;
