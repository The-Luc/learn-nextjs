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
            <li><Link href="/dashboard" className="hover:underline text-blue-600">Overview</Link></li>
            <li><Link href="/dashboard/analytics" className="hover:underline text-blue-600">Analytics</Link></li>
            <li><Link href="/dashboard/settings" className="hover:underline text-blue-600">Settings</Link></li>
            <li><Link href="/dashboard/settings/s1" className="hover:underline text-blue-600">Setting 1</Link></li>
            <li><Link href="/dashboard/settings/s1/test" className="hover:underline text-blue-600">Setting 1 - Test</Link></li>
            <li><Link href="/dashboard/settings/s1/s2" className="hover:underline text-blue-600">Setting S2</Link></li>
            <li><Link href="/dashboard/profile" className="hover:underline text-blue-600">Profile</Link></li>
            <li><Link href="/contact-us" className="hover:underline text-blue-600">Contact Us</Link></li>

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
