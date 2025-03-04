import { notFound } from 'next/navigation';

interface ProfileData {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

async function getProfile(id: string): Promise<ProfileData | null> {
  // This is a mock function that simulates fetching a profile
  // In a real app, this would be an API call
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For demonstration, we'll return null for a specific ID to trigger not-found
  if (id === 'missing') {
    return null;
  }
  
  return {
    id,
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    role: 'Administrator',
    avatar: 'https://i.pravatar.cc/150?u=alex'
  };
}

export default async function ProfilePage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Get the profile ID from query params or use a default
  const id = typeof searchParams.id === 'string' ? searchParams.id : 'default';
  
  // Fetch the profile data
  const profile = await getProfile(id);
  
  // If profile not found, trigger the not-found page
  if (!profile) {
    notFound();
  }
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">User Profile</h1>
      
      <div className="bg-white p-6 rounded shadow">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img 
            src={profile.avatar} 
            alt={profile.name} 
            className="w-24 h-24 rounded-full"
          />
          
          <div>
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            <p className="text-gray-600">{profile.email}</p>
            <p className="mt-2 inline-block px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
              {profile.role}
            </p>
            
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Account ID</h3>
                <p>{profile.id}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Member Since</h3>
                <p>January 15, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <p className="text-sm text-gray-500">
          Try visiting <code>/dashboard/profile?id=missing</code> to see the not-found page in action.
        </p>
      </div>
    </div>
  );
}
