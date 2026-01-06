import Button from "@/components/ui/Button";
import Image from "next/image";

const InProgressCard = ({ data }) => {
  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.map(({ id, img, label, progres, lastActivity }) => (
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
    </div>
  );
};

export default InProgressCard;
