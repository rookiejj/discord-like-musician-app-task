import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Music, Users, MessageSquare, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 h-screen flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Music className="w-6 h-6" />
          MusicHub
        </h1>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-white p-2 rounded hover:bg-gray-800">
              <Home className="w-5 h-5" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/channels" className="flex items-center gap-2 text-gray-300 hover:text-white p-2 rounded hover:bg-gray-800">
              <MessageSquare className="w-5 h-5" />
              Channels
            </Link>
          </li>
          <li>
            <Link to="/musicians" className="flex items-center gap-2 text-gray-300 hover:text-white p-2 rounded hover:bg-gray-800">
              <Users className="w-5 h-5" />
              Musicians
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center gap-2 text-gray-300 hover:text-white p-2 rounded hover:bg-gray-800">
              <Settings className="w-5 h-5" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=32&h=32"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-gray-400">@johndoe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;