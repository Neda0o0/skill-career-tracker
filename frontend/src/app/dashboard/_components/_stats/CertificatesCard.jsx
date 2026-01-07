import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const CertificatesCard = ({ data, limit = 2 }) => {
  const visibleData = limit ? data.slice(0, limit) : data;
  const hasMore = data.length > limit;

  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          {visibleData.map(({ id, label, img, date }) => (
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

        {/* More */}
        {hasMore && (
          <div className="flex justify-center lg:justify-center lg:items-center">
            <Link
              href="/dashboard/certificates"
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

export default CertificatesCard;
