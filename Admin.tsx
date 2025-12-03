import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { AdminSection, PageView, EventItem } from '../types';
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Settings, 
  LogOut, 
  Save, 
  Plus, 
  Trash2, 
  AlertCircle 
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

interface AdminProps {
  onNavigate: (page: PageView) => void;
}

const Admin: React.FC<AdminProps> = ({ onNavigate }) => {
  const { isAdmin, login, logout, content, updateContent, events, addEvent, deleteEvent } = useContent();
  const [activeSection, setActiveSection] = useState<AdminSection>(AdminSection.DASHBOARD);
  
  // Login State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Event Form State
  const [newEvent, setNewEvent] = useState<Partial<EventItem>>({});
  const [showEventForm, setShowEventForm] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      login();
      setError('');
    } else {
      setError('Invalid credentials (try admin/admin)');
    }
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date) {
      addEvent({
        id: Date.now(),
        title: newEvent.title,
        date: newEvent.date,
        location: newEvent.location || 'TBD',
        description: newEvent.description || '',
        imageUrl: newEvent.imageUrl || 'https://picsum.photos/800/600'
      } as EventItem);
      setNewEvent({});
      setShowEventForm(false);
    }
  };

  // Mock Data for Dashboard Chart
  const data = [
    { name: 'Jan', donations: 4000 },
    { name: 'Feb', donations: 3000 },
    { name: 'Mar', donations: 2000 },
    { name: 'Apr', donations: 2780 },
    { name: 'May', donations: 1890 },
    { name: 'Jun', donations: 2390 },
    { name: 'Jul', donations: 3490 },
  ];

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
           <div className="text-center mb-8">
             <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white mx-auto mb-4 text-2xl font-bold">D</div>
             <h2 className="text-2xl font-bold text-gray-800">Admin Portal</h2>
             <p className="text-gray-500">Please sign in to continue</p>
           </div>
           
           <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
                  placeholder="admin"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
                  placeholder="admin"
                />
              </div>
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded text-sm flex items-center gap-2">
                   <AlertCircle size={16} /> {error}
                </div>
              )}
              <button type="submit" className="w-full bg-blue-900 text-white py-3 rounded font-bold hover:bg-blue-800 transition-colors">
                Sign In
              </button>
              <button type="button" onClick={() => onNavigate('HOME')} className="w-full text-gray-500 py-2 text-sm hover:text-gray-800">
                Back to Website
              </button>
           </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex-shrink-0 flex flex-col">
        <div className="p-6 border-b border-blue-800">
          <h2 className="text-xl font-bold">DEP Admin</h2>
          <p className="text-blue-300 text-xs mt-1">v1.0.0</p>
        </div>
        <nav className="flex-grow p-4 space-y-2">
           <button 
             onClick={() => setActiveSection(AdminSection.DASHBOARD)}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded transition-colors ${activeSection === AdminSection.DASHBOARD ? 'bg-blue-700' : 'hover:bg-blue-800'}`}
           >
             <LayoutDashboard size={20} /> Dashboard
           </button>
           <button 
             onClick={() => setActiveSection(AdminSection.CONTENT)}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded transition-colors ${activeSection === AdminSection.CONTENT ? 'bg-blue-700' : 'hover:bg-blue-800'}`}
           >
             <FileText size={20} /> Edit Content
           </button>
           <button 
             onClick={() => setActiveSection(AdminSection.EVENTS)}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded transition-colors ${activeSection === AdminSection.EVENTS ? 'bg-blue-700' : 'hover:bg-blue-800'}`}
           >
             <Calendar size={20} /> Manage Events
           </button>
           <button 
             onClick={() => setActiveSection(AdminSection.SETTINGS)}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded transition-colors ${activeSection === AdminSection.SETTINGS ? 'bg-blue-700' : 'hover:bg-blue-800'}`}
           >
             <Settings size={20} /> Settings
           </button>
        </nav>
        <div className="p-4 border-t border-blue-800">
          <button onClick={() => { logout(); onNavigate('HOME'); }} className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors">
            <LogOut size={18} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto h-screen p-8">
        
        {/* Dashboard View */}
        {activeSection === AdminSection.DASHBOARD && (
          <div className="animate-fadeIn">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                 <h3 className="text-gray-500 text-sm font-bold uppercase mb-2">Total Donations</h3>
                 <p className="text-3xl font-bold text-blue-600">$24,500</p>
                 <span className="text-green-500 text-sm font-semibold">+12% from last month</span>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                 <h3 className="text-gray-500 text-sm font-bold uppercase mb-2">Active Bins</h3>
                 <p className="text-3xl font-bold text-yellow-500">34</p>
                 <span className="text-gray-400 text-sm">Target: 40 by Q4</span>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                 <h3 className="text-gray-500 text-sm font-bold uppercase mb-2">Pending Pickups</h3>
                 <p className="text-3xl font-bold text-green-600">8</p>
                 <span className="text-blue-500 text-sm cursor-pointer hover:underline">View Schedule</span>
               </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
               <h3 className="text-lg font-bold mb-6">Donation Trends</h3>
               <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="donations" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
               </div>
            </div>
          </div>
        )}

        {/* Edit Content View */}
        {activeSection === AdminSection.CONTENT && (
          <div className="animate-fadeIn max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Edit Website Content</h1>
            <div className="space-y-8">
               
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">General Info</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                       <input 
                         type="text" 
                         value={content.general.phone}
                         onChange={(e) => updateContent('general', 'phone', e.target.value)}
                         className="w-full p-2 border rounded"
                       />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                       <input 
                         type="text" 
                         value={content.general.email}
                         onChange={(e) => updateContent('general', 'email', e.target.value)}
                         className="w-full p-2 border rounded"
                       />
                     </div>
                     <div className="col-span-2">
                       <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                       <input 
                         type="text" 
                         value={content.general.address}
                         onChange={(e) => updateContent('general', 'address', e.target.value)}
                         className="w-full p-2 border rounded"
                       />
                     </div>
                  </div>
               </div>

               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Home Page Text</h3>
                  <div className="space-y-4">
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Hero Title</label>
                       <input 
                         type="text" 
                         value={content.home.heroTitle}
                         onChange={(e) => updateContent('home', 'heroTitle', e.target.value)}
                         className="w-full p-2 border rounded"
                       />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Mission Statement</label>
                       <textarea 
                         value={content.home.missionText}
                         onChange={(e) => updateContent('home', 'missionText', e.target.value)}
                         className="w-full p-2 border rounded h-32"
                       />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Impact Text</label>
                       <textarea 
                         value={content.home.impactText}
                         onChange={(e) => updateContent('home', 'impactText', e.target.value)}
                         className="w-full p-2 border rounded h-32"
                       />
                     </div>
                  </div>
               </div>

               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">Donate Page Info</h3>
                  <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Bin Locations (Comma separated for demo)</label>
                       <textarea 
                         value={content.donate.binLocations.join(', ')}
                         onChange={(e) => updateContent('donate', 'binLocations', e.target.value.split(',').map(s => s.trim()))}
                         className="w-full p-2 border rounded h-32"
                       />
                       <p className="text-xs text-gray-500 mt-1">Updates immediately on the Donate page list.</p>
                  </div>
               </div>

            </div>
          </div>
        )}

        {/* Manage Events View */}
        {activeSection === AdminSection.EVENTS && (
          <div className="animate-fadeIn">
             <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Manage Events</h1>
                <button 
                  onClick={() => setShowEventForm(!showEventForm)}
                  className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700"
                >
                  <Plus size={18} /> Add New Event
                </button>
             </div>

             {showEventForm && (
               <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-8">
                 <h3 className="text-lg font-bold mb-4">Create Event</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Event Title" 
                      className="p-2 border rounded"
                      value={newEvent.title || ''}
                      onChange={e => setNewEvent({...newEvent, title: e.target.value})}
                    />
                    <input 
                      type="date" 
                      className="p-2 border rounded"
                      value={newEvent.date || ''}
                      onChange={e => setNewEvent({...newEvent, date: e.target.value})}
                    />
                    <input 
                      type="text" 
                      placeholder="Location" 
                      className="p-2 border rounded"
                      value={newEvent.location || ''}
                      onChange={e => setNewEvent({...newEvent, location: e.target.value})}
                    />
                    <input 
                      type="text" 
                      placeholder="Image URL (optional)" 
                      className="p-2 border rounded"
                      value={newEvent.imageUrl || ''}
                      onChange={e => setNewEvent({...newEvent, imageUrl: e.target.value})}
                    />
                    <textarea 
                      placeholder="Description" 
                      className="col-span-2 p-2 border rounded h-24"
                      value={newEvent.description || ''}
                      onChange={e => setNewEvent({...newEvent, description: e.target.value})}
                    ></textarea>
                 </div>
                 <div className="mt-4 flex gap-3">
                   <button onClick={handleAddEvent} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Save Event</button>
                   <button onClick={() => setShowEventForm(false)} className="text-gray-500 px-4 py-2">Cancel</button>
                 </div>
               </div>
             )}

             <div className="grid grid-cols-1 gap-4">
                {events.map(event => (
                  <div key={event.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                     <div>
                       <h4 className="font-bold text-lg">{event.title}</h4>
                       <p className="text-gray-500 text-sm">{event.date} • {event.location}</p>
                     </div>
                     <button onClick={() => deleteEvent(event.id)} className="text-red-500 hover:bg-red-50 p-2 rounded">
                       <Trash2 size={20} />
                     </button>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* Settings View */}
        {activeSection === AdminSection.SETTINGS && (
          <div className="animate-fadeIn max-w-2xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">System Settings</h1>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
               <h3 className="font-bold text-lg mb-4">SEO Metadata</h3>
               <div className="space-y-4">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Site Title</label>
                   <input type="text" className="w-full p-2 border rounded bg-gray-50" defaultValue="Donate El Paso" readOnly />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                   <textarea className="w-full p-2 border rounded" defaultValue="Official clothing donation organization for El Paso schools."></textarea>
                 </div>
               </div>
               <div className="mt-8 pt-8 border-t">
                  <button className="bg-blue-900 text-white px-6 py-2 rounded font-bold hover:bg-blue-800">
                    <Save size={18} className="inline mr-2" /> Save Settings
                  </button>
               </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;