import Button from "@/components/ui/Button";
import Image from "next/image";

const CoursesCard = ({ data }) => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-medium">Recommended Courses</h2>
        <ul className="flex gap-8 flex-col md:flex-row">
          {data.map(({ id, label, time, img }) => (
            <li key={id} className=" flex flex-row shadow-md rounded-md gap-5">
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
