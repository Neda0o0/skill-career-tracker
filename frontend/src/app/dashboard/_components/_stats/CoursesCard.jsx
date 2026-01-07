import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const CoursesCard = ({ data, limit = 3 }) => {
  const visibleData = limit ? data.slice(0, limit) : data;
  const hasMore = data.length > limit;

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-medium">Recommended Courses</h2>

      {/* Wrapper */}
      <div className="flex lg:flex-row flex-col lg:items-center gap-6">
        {/* Cards */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {visibleData.map(({ id, label, time, img }) => (
            <li
              key={id}
              className="p-4 flex flex-col shadow-md rounded-md justify-center items-center gap-3 w-full"
            >
              <Image
                src={img}
                alt={label}
                width={100}
                height={100}
                className="border"
              />

              <div className="flex flex-col gap-2 text-center">
                <h3 className="text-md font-medium">Introduction to {label}</h3>

                <div className="flex justify-between gap-4 text-sm">
                  <span>Video</span>
                  <span>{time}</span>
                </div>

                <div className="flex justify-center gap-2 mt-2">
                  <Button>Enroll</Button>
                  <Button variant="primaryOutline">View</Button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* More – Desktop */}
        {hasMore && (
          <div className="hidden lg:flex items-center justify-center min-w-30">
            <Link
              href="/dashboard/courses"
              className="text-2xl font-medium text-purple-600 hover:underline"
            >
              More…
            </Link>
          </div>
        )}

        {/* More – Mobile & Tablet */}
        {hasMore && (
          <div className="flex lg:hidden justify-center">
            <Link
              href="/dashboard/courses"
              className="text-lg font-medium text-purple-600 hover:underline"
            >
              More...
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesCard;
