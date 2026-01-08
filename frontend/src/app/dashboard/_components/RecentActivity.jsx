import { BookOpen, Award, CheckCircle, Clock, Badge } from "lucide-react";

const RecentActivity = ({ data }) => {
  const getTypeIcon = (type) => {
    if (type === "certificate") return Award;
    return BookOpen;
  };

  const getStatusStyle = (status, type) => {
    if (status === "completed" || type === "certificate") {
      return {
        icon: CheckCircle,
        dot: "bg-green-500",
        badge: "bg-green-100 text-green-700",
        label: "completed",
      };
    }

    return {
      icon: Clock,
      dot: "bg-blue-500",
      badge: "bg-blue-100 text-blue-700",
      label: "in-progress",
    };
  };

  return (
    <section className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Recent Activity</h2>

      <ul className="space-y-6">
        {data.map((item, index) => {
          const TypeIcon = getTypeIcon(item.type);
          const statusStyle = getStatusStyle(item.status, item.type);
          const StatusIcon = statusStyle.icon;

          return (
            <li key={item.id} className="flex gap-4">
              {/* Timeline column */}
              <div className="flex flex-col items-center">
                {/* Dot */}
                <span
                  className={`w-3 h-3 rounded-full mt-1 ${statusStyle.dot}`}
                />

                {/* Line */}
                {index !== data.length - 1 && (
                  <span className="flex-1 w-px bg-gray-200 mt-1" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-2">
                    {/* Type Icon */}
                    <TypeIcon className="w-4 h-4 text-gray-500 mt-0.5" />

                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {item.course}
                      </p>
                      <p className="text-xs text-gray-500 capitalize">
                        {item.type}
                      </p>
                    </div>
                  </div>

                  {/* Status badge */}
                  <span
                    className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${statusStyle.badge}`}
                  >
                    <StatusIcon className="w-3 h-3" />
                    {statusStyle.label}
                  </span>
                </div>

                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RecentActivity;
