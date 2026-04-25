// import HowItWorksData from "@/components/sections/HowItWorks/howItWorks.data";

// const HowItWorks = () => {
//   return (
//     <section
//       id="howItWorks"
//       className="flex flex-col justify-center items-center p-4"
//     >
//       <span className="text-xs font-medium tracking-widest text-gray-500">
//         HOW IT WORKS
//       </span>
//       <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
//         Start tracking in 3 simple steps
//       </h2>
//       <div className="mt-6">
//         <ul className="grid md:grid-cols-3 gap-5">
//           {HowItWorksData.map((item) => (
//             <li key={item.id} className="p-4">
//               <h3 className="font-semibold text-gray-900 dark:text-gray-100">
//                 {item.title}
//               </h3>
//               <p className="mt-2 text-sm text-gray-600 dark:text-gray-100">
//                 {item.description}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;
import HowItWorksData from "@/components/sections/HowItWorks/howItWorks.data";

const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="flex flex-col justify-center items-center p-8 mt-12 glass rounded-3xl"
    >
      <span className="text-xs font-medium tracking-widest text-foreground/60">
        HOW IT WORKS
      </span>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
        Start tracking in 3 simple steps
      </h2>
      <div className="mt-6 w-full">
        <ul className="grid md:grid-cols-3 gap-5">
          {HowItWorksData.map((item) => (
            <li
              key={item.id}
              className="glass p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
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
