'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="p-6 bg-red-50 rounded-lg">
      <h2 className="text-xl font-bold text-red-800 mb-4">Something went wrong!</h2>
      <p className="text-red-700 mb-4">
        We encountered an error while loading the dashboard. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Try again
      </button>
    </div>
  );
}
