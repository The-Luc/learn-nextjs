'use client';

import { useState, useEffect } from 'react';

export default function DashboardTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  // This effect will run on every navigation within the dashboard
  useEffect(() => {
    setIsLoaded(false);
    
    // Simulate loading data for the dashboard
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => {
      console.log('Clearing timer'); 
      clearTimeout(timer);
    };
  }, []);

  console.log('Dashboard template');
  return (
    <div className="dashboard-template">
      <div className='text-red-700'>Dashboard template</div>
      {/* Animation that runs on every navigation */}
      <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </div>
  );
}
