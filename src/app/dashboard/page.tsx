export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
          <p>Your recent activity will appear here.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Quick Stats</h2>
          <p>Your stats summary will appear here.</p>
        </div>
      </div>
    </div>
  );
}
