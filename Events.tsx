import React from 'react';
import { useContent } from '../context/ContentContext';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events: React.FC = () => {
  const { content, events } = useContent();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Community Events</h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">{content.events.introText}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Story */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 flex flex-col md:flex-row">
           <div className="md:w-1/2 h-64 md:h-auto relative">
             <img 
               src="https://picsum.photos/id/10/800/600" 
               alt="Featured Event" 
               className="w-full h-full object-cover" 
             />
             <div className="absolute top-4 left-4 bg-yellow-400 text-blue-900 font-bold px-4 py-1 rounded shadow-md uppercase text-sm tracking-wide">
               Featured Story
             </div>
           </div>
           <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{content.events.featuredEventTitle}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {content.events.featuredEventText}
              </p>
              <button className="self-start text-blue-600 font-bold hover:text-blue-800 uppercase tracking-wide text-sm border-b-2 border-blue-600 pb-1">
                Read Full Story
              </button>
           </div>
        </div>

        {/* Event List */}
        <h3 className="text-2xl font-bold text-gray-900 mb-8 pl-2 border-l-4 border-blue-500">Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {events.map((event) => (
             <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
               <div className="h-48 overflow-hidden">
                 <img 
                   src={event.imageUrl} 
                   alt={event.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
               </div>
               <div className="p-6">
                 <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
                    <span className="flex items-center gap-1"><Calendar size={14} className="text-blue-500" /> {new Date(event.date).toLocaleDateString()}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} className="text-blue-500" /> {event.location}</span>
                 </div>
                 <h4 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h4>
                 <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                   {event.description}
                 </p>
                 <button className="w-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 py-2 rounded font-medium transition-colors text-sm">
                   View Details
                 </button>
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Events;