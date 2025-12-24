const RatingStars = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, index) => (
        <span
          key={index}
          className="inline-block w-5 h-5 text-center leading-none"
        >
          ⭐
        </span>
      ))}
    </div>
  );
};
export default RatingStars;

// with lucide-react

// import { Stars } from "lucide-react";
// const RatingStars = ({ rating, max = 5 }) => {
//   return (
//     <div className="flex gap-1">
//       {Array.from({ length: max }).map((_, index) => (
//         <Stars
//           key={index}
//           className={`w-4 h-4 ${
//             index < rating ? "text-yellow-400" : "text-gray-300"
//           }`}
//         />
//       ))}
//     </div>
//   );
// };
// export default RatingStars;
