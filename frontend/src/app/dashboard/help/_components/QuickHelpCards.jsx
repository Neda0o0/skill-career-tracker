// const QuickHelpCards = ({ items }) => {
//   return (
//     <div>
//       <h2 className="text-xl font-semibold py-4">QUICK HELP CARDS</h2>

//       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
//         {items.map(({ id, icon, label, description, color }) => {
//           const Icon = icon;

//           return (
//             <li
//               key={id}
//               className={`flex flex-col gap-2 py-3 px-3 ${color} text-white rounded-md shadow-md`}
//             >
//               <span>{Icon}</span>
//               <h3 className="text-lg font-serif">{label}</h3>
//               <p>{description}</p>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default QuickHelpCards;

"use client";

import QuickHelpCard from "./QuickHelpCard";

const QuickHelpCards = ({ items }) => {
  const handleCardClick = (card) => {
    console.log("Selected card:", card);
  };

  return (
    <section>
      <h2 className="text-xl font-semibold py-4">Quick Help</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map((card) => (
          <QuickHelpCard
            key={card.id}
            title={card.label}
            description={card.description}
            color={card.color}
            icon={card.icon}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
    </section>
  );
};

export default QuickHelpCards;
