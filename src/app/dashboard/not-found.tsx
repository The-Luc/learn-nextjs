import Link from 'next/link';

export default function DashboardNotFound() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Dashboard Section Not Found</h2>
      <p className="mb-4">The dashboard section you're looking for doesn't exist.</p>
      <Link 
        href="/dashboard" 
        className="text-blue-600 hover:underline"
      >
        Return to Dashboard
      </Link>
    </div>
  );
}
