const Charts = ({ summary }) => {
  const chartData = [
    { label: "Courses", value: summary.courses },
    { label: "In Progress", value: summary.inProgress },
    { label: "Completed", value: summary.completed },
    { label: "Certificates", value: summary.certificates },
  ];
  const maxValue = Math.max(...chartData.map((item) => item.value));

  return (
    <section className="p-4 bg-white rounded-xl shadow-sm w-full max-w-full overflow-hidden">
      <h2 className="text-lg font-semibold mb-6">Learning Progress Overview</h2>
      <ul className="space-y-3">
        {chartData.map(({ label, value }) => (
          <li key={label} className="flex items-center gap-4 min-w-0">
            <span className="w-28 text-sm text-gray-600">{label}</span>
            <div className="flex-1 bg-gray-200 h-3 rounded-full min-w-0">
              <div
                className="h-3 rounded-full bg-purple-600"
                style={{
                  width: `${(value / maxValue) * 100}%`,
                }}
              />
            </div>
            <span className="w-8 text-sm font-medium text-right">{value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Charts;
