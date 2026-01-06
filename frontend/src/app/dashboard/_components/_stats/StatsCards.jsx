import CoursesCard from "@/app/dashboard/_components/_stats/CoursesCard";
import InProgressCard from "@/app/dashboard/_components/_stats/InProgressCard";
import CertificatesCard from "@/app/dashboard/_components/_stats/CertificatesCard";
import CompletedCard from "@/app/dashboard/_components/_stats/CompletedCard";
import inProgress from "@/app/dashboard/_components/_stats/data/inProgress";
import courses from "@/app/dashboard/_components/_stats/data/courses";
import completed from "@/app/dashboard/_components/_stats/data/completed";
import certificates from "@/app/dashboard/_components/_stats/data/certificates";
import SummaryCards from "@/app/dashboard/_components/_stats/SummaryCards";

const StatsCards = () => {
  const summaryData = {
    courses: courses.length,
    inProgress: inProgress.length,
    completed: completed.length,
    certificates: certificates.length,
  };

  return (
    <section>
      <div className="space-y-6">
        <SummaryCards summary={summaryData} />
        <CoursesCard data={courses} />
        <InProgressCard data={inProgress} />
        <CompletedCard data={completed} />
        <CertificatesCard data={certificates} />
      </div>
    </section>
  );
};

export default StatsCards;
