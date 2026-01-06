import { BookOpen, Loader, CheckCircle, Award } from "lucide-react";

const SummaryCards = ({ summary }) => {
  const cards = [
    {
      label: "Courses",
      value: summary.courses,
      icon: BookOpen,
      color: "text-blue-600",
    },
    {
      label: "In Progress",
      value: summary.inProgress,
      icon: Loader,
      color: "text-orange-500",
    },
    {
      label: "Completed",
      value: summary.completed,
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      label: "Certificates",
      value: summary.certificates,
      icon: Award,
      color: "text-purple-600",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map(({ label, value, icon: Icon, color }) => (
        <div
          key={label}
          className="flex items-center justify-between p-5 rounded-xl shadow-sm border bg-white"
        >
          <div>
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-2xl font-semibold">{value}</p>
          </div>
          <Icon className={`h-8 w-8 ${color}`} />
        </div>
      ))}
    </section>
  );
};

export default SummaryCards;
