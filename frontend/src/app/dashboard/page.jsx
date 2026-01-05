import WelcomeSection from "@/app/dashboard/_components/WelcomeSection";
import StatsCards from "@/app/dashboard/_components/_stats/StatsCards";

const DashboardPage = () => {
  return (
    <section className="space-y-6">
      <WelcomeSection />
      <StatsCards />
    </section>
  );
};

export default DashboardPage;
