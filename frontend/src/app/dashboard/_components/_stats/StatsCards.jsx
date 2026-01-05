import CoursesCard from "@/app/dashboard/_components/_stats/CoursesCard";
import InProgressCard from "@/app/dashboard/_components/_stats/InProgressCard";
import CertificatesCard from "@/app/dashboard/_components/_stats/CertificatesCard";
import CompletedCard from "@/app/dashboard/_components/_stats/CompletedCard";
import inProgress from "@/app/dashboard/_components/_stats/data/inProgress";
import courses from "@/app/dashboard/_components/_stats/data/courses";
import completed from "@/app/dashboard/_components/_stats/data/completed";
import certificates from "@/app/dashboard/_components/_stats/data/certificates";

const StatsCards = () => {
  return (
    <section>
      <div className="space-y-6">
        <CoursesCard data={courses} />
        <InProgressCard data={inProgress} />
        <CompletedCard data={completed} />
        <CertificatesCard data={certificates} />
      </div>
    </section>
  );
};

export default StatsCards;
