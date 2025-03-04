import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  console.log('Dashboard layout');
  return (
    <div className="dashboard-layout">
      <div className="dashboard-sidebar">
        <h3 className="text-xl font-bold mb-4">Dashboard</h3>
        <nav className="dashboard-nav">
          <ul className="space-y-2">
            <li><Link href="/dashboard" className="hover:underline">Overview</Link></li>
            <li><Link href="/dashboard/analytics" className="hover:underline">Analytics</Link></li>
            <li><Link href="/dashboard/settings" className="hover:underline">Settings</Link></li>
            <li><Link href="/dashboard/profile" className="hover:underline">Profile</Link></li>
          </ul>
        </nav>
      </div>
      <div className='text-red-700'>Dashboard layout</div>
      <div className="dashboard-content">
        {children}
      </div>
    </div>
  );
}
