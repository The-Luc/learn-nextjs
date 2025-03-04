async function fetchAnalyticsData() {
  // Simulate data fetching with delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return {
    pageViews: 12500,
    uniqueVisitors: 4200,
    bounceRate: '42%',
    avgSessionDuration: '2m 15s'
  };
}

export default async function AnalyticsPage() {
  const data = await fetchAnalyticsData();
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm font-medium text-gray-500">Page Views</h3>
          <p className="text-2xl font-bold">{data.pageViews.toLocaleString()}</p>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm font-medium text-gray-500">Unique Visitors</h3>
          <p className="text-2xl font-bold">{data.uniqueVisitors.toLocaleString()}</p>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm font-medium text-gray-500">Bounce Rate</h3>
          <p className="text-2xl font-bold">{data.bounceRate}</p>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm font-medium text-gray-500">Avg. Session</h3>
          <p className="text-2xl font-bold">{data.avgSessionDuration}</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Traffic Overview</h2>
        <div className="h-64 flex items-center justify-center bg-gray-100">
          <p className="text-gray-500">Analytics chart would render here</p>
        </div>
      </div>
    </div>
  );
}
