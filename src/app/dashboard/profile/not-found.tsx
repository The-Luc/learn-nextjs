import Link from 'next/link';

export default function ProfileNotFound() {
  return (
    <div className="p-6 text-center">
      <div className="inline-block p-4 bg-yellow-50 rounded-full mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold mb-2">Profile Not Found</h2>
      <p className="text-gray-600 mb-6">
        We couldn't find the user profile you're looking for.
      </p>
      <div className="space-x-4">
        <Link 
          href="/dashboard/profile" 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go to Default Profile
        </Link>
        <Link 
          href="/dashboard" 
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
