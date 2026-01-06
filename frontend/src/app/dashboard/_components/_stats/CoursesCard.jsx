import Button from "@/components/ui/Button";
import Image from "next/image";

const CoursesCard = ({ data }) => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-medium">Recommended Courses</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.map(({ id, label, time, img }) => (
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
              <div className="flex flex-col gap-2 m-2">
                <h3 className="text-md font-medium">Introduction to {label}</h3>
                <div className="flex justify-between gap-4">
                  <span>Video</span>
                  <span>{time}</span>
                </div>
                <div className="flex justify-center gap-2">
                  <Button>Enroll</Button>
                  <Button variant="primaryOutline">View</Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoursesCard;
