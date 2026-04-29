import featuresData from "@/components/sections/Features/features.data";
import Image from "next/image";

const FeaturesList = () => {
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 w-full relative mt-5">
      {featuresData.map((item) => (
        <li
          key={item.id}
          className="card-clock-border relative flex flex-col text-center justify-center items-center glass p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200"
        >
          <div className="absolute left-1/2 top-2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={50}
              height={50}
              className="rounded-full shadow-md"
            />
          </div>
          <div className="w-full mt-5">
            <h3 className="font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-foreground/80">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;
