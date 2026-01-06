import RatingStars from "@/components/sections/Testimonials/RatingStars";
import Button from "@/components/ui/Button";
import Image from "next/image";

const CompletedCard = ({ data }) => {
  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.map(({ id, label, img, score }) => (
          <li
            key={id}
            className="p-4 flex flex-col shadow-md rounded-md justify-center items-center gap-2 w-full max-w-sm mx-auto"
          >
            <Image
              src={img}
              alt={label}
              width={100}
              height={100}
              className="border"
            />
            <h3 className="text-md font-medium">{label}</h3>
            <div className="flex justify-between gap-4">
              <span className="mt-2 mb-4 mr-5">
                <RatingStars rating={score} />
              </span>
            </div>
            <Button variant="primaryOutline">Review</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedCard;
