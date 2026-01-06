const RecentActivity = ({ data }) => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

      <ul className="space-y-3">
        {data.map((item) => (
          <li
            key={item.id}
            className="flex justify-between text-sm text-gray-600"
          >
            <span>{item.course}</span>
            <span className="capitalize">{item.status}</span>
            <span>{item.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentActivity;
