import RatingStars from "@/components/sections/Testimonials/RatingStars";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const CompletedCard = ({ data, limit = 3 }) => {
  const visibleData = limit ? data.slice(0, limit) : data;
  const hasMore = data.length > limit;

  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
          {visibleData.map(({ id, label, img, score }) => (
            <li
              key={id}
              className="p-4 flex flex-col shadow-md rounded-md justify-center items-center gap-2 w-full"
            >
              <Image
                src={img}
                alt={label}
                width={100}
                height={100}
                className="border"
              />

              <h3 className="text-md font-medium">{label}</h3>

              <div className="mt-2 mb-4">
                <RatingStars rating={score} />
              </div>

              <Button variant="primaryOutline">Review</Button>
            </li>
          ))}
        </ul>

        {/* More */}
        {hasMore && (
          <div className="flex justify-center lg:justify-center lg:items-center">
            <Link
              href="/dashboard/mycourses"
              className="text-lg lg:text-2xl font-medium text-purple-600 hover:underline"
            >
              More...
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CompletedCard;
