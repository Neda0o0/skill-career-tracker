import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const InProgressCard = ({ data, limit = 3 }) => {
  const visibleData = limit ? data.slice(0, limit) : data;
  const hasMore = data.length > limit;
  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
          {visibleData.map(({ id, img, label, progres, lastActivity }) => (
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

              <div className="w-full flex justify-between text-sm font-medium">
                <span>{label}</span>
                <span>{progres}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${progres}%` }}
                />
              </div>

              <p className="text-xs text-gray-500">
                Last activity: {lastActivity}
              </p>

              <Button className="w-full">Continue Learning</Button>
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

export default InProgressCard;
