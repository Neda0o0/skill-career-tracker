import Button from "@/components/ui/Button";
import Image from "next/image";

const CertificatesCard = ({ data }) => {
  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.map(({ id, label, img, date }) => (
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
            <div className="flex justify-between gap-4">
              <span>{label}</span>
              <span className="text-green-600">Verified</span>
            </div>
            <p>
              Completed: <span>{date}</span>
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
              <Button className="w-full md:w-auto">View Certificate</Button>
              <Button variant="primaryOutline">Download PDF</Button>
              <Button variant="primaryOutline">Share on Linkedin</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificatesCard;
