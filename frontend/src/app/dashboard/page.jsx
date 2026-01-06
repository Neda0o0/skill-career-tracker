import WelcomeSection from "@/app/dashboard/_components/WelcomeSection";
import StatsCards from "@/app/dashboard/_components/_stats/StatsCards";
import Charts from "@/app/dashboard/_components/Charts";

import inProgress from "@/app/dashboard/_components/_stats/data/inProgress";
import courses from "@/app/dashboard/_components/_stats/data/courses";
import completed from "@/app/dashboard/_components/_stats/data/completed";
import certificates from "@/app/dashboard/_components/_stats/data/certificates";

const DashboardPage = () => {
  const summaryData = {
    courses: courses.length,
    inProgress: inProgress.length,
    completed: completed.length,
    certificates: certificates.length,
  };
  return (
    <section className="space-y-6 max-w-full overflow-x-hidden">
      <WelcomeSection />
      <StatsCards summary={summaryData} />
      <Charts summary={summaryData} />
      {/* <RecentActivity /> */}
    </section>
  );
};

export default DashboardPage;
