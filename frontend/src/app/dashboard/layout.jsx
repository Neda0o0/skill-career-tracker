import DashboardHeader from "@/app/dashboard/_components/DashboardHeader";
import Sidebar from "@/app/dashboard/_components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <DashboardHeader />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 p-6 bg-gray-50 min-w-0 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
