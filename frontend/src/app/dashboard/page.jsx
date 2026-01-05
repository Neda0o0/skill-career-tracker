import DashboardHeader from "@/app/dashboard/_components/DashboardHeader";
import Sidebar from "@/app/dashboard/_components/Sidebar";

const DashboardPage = () => {
  return (
    <>
      {/* DashboardHeader */}
      <DashboardHeader />

      {/* Sidebar */}
      <Sidebar />

      <section>{/* Main content */}</section>
    </>
  );
};

export default DashboardPage;
