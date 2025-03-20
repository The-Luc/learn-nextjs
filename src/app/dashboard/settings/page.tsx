'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    language: 'english'
  });

  const handleToggle = (setting: keyof typeof settings) => {
    if (typeof settings[setting] === 'boolean') {
      setSettings({
        ...settings,
        [setting]: !settings[setting]
      });
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({
      ...settings,
      language: e.target.value
    });
  };

  console.log('Settings page');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="bg-white p-6 rounded shadow">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Notifications</h3>
              <p className="text-sm text-gray-500">Receive email notifications</p>
            </div>
            <button 
              onClick={() => handleToggle('notifications')}
              className={`w-12 h-6 rounded-full p-1 transition-colors ${settings.notifications ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${settings.notifications ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Dark Mode</h3>
              <p className="text-sm text-gray-500">Use dark theme</p>
            </div>
            <button 
              onClick={() => handleToggle('darkMode')}
              className={`w-12 h-6 rounded-full p-1 transition-colors ${settings.darkMode ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${settings.darkMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Auto Save</h3>
              <p className="text-sm text-gray-500">Automatically save changes</p>
            </div>
            <button 
              onClick={() => handleToggle('autoSave')}
              className={`w-12 h-6 rounded-full p-1 transition-colors ${settings.autoSave ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${settings.autoSave ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Language</h3>
            <select 
              value={settings.language}
              onChange={handleLanguageChange}
              className="w-full p-2 border rounded"
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
