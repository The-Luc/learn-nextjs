export default function DashboardLoading() {
  return (
    <div className="p-6 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded shadow h-40">
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow h-40">
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
}
