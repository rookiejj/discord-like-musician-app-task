import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';

function App() {
  const handleSendMessage = (message: string) => {
    // TODO: Implement Supabase message sending
    console.log('Sending message:', message);
  };

  return (
    <Router>
      <div className="flex h-screen bg-white">
        <Sidebar />
        
        <main className="flex-1 flex flex-col">
          <div className="bg-white border-b border-gray-200 p-4">
            <h2 className="text-xl font-semibold"># general</h2>
            <p className="text-sm text-gray-500">Welcome to the general chat channel</p>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <ChatMessage
              message={{
                content: "Hey everyone! I'm looking for a bassist for my jazz project.",
                user: {
                  name: "Sarah Parker",
                  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=32&h=32"
                },
                timestamp: new Date().toISOString()
              }}
            />
            {/* More messages will be loaded from Supabase */}
          </div>
          
          <ChatInput onSendMessage={handleSendMessage} />
        </main>
        
        <aside className="w-64 border-l border-gray-200 p-4">
          <h3 className="text-lg font-semibold mb-4">Online Musicians</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=32&h=32"
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm">John Doe</span>
            </div>
            {/* More online users will be loaded from Supabase */}
          </div>
        </aside>
      </div>
    </Router>
  );
}

export default App;