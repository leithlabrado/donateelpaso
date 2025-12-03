import React from 'react';
import { useContent } from '../context/ContentContext';
import { Users, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="flex flex-col">
       {/* Hero */}
       <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
             <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.about.title}</h1>
             <p className="text-xl text-gray-300 max-w-2xl mx-auto">Providing dignity and hope through community giving.</p>
          </div>
       </div>

       {/* History */}
       <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
             <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="md:w-1/2 text-lg text-gray-600 leading-relaxed space-y-6">
                   <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                   <p>{content.about.historyText}</p>
                   <p>{content.about.partnersText}</p>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                   <img src="https://picsum.photos/id/101/300/400" className="rounded-lg shadow-lg translate-y-8" alt="Team member" />
                   <img src="https://picsum.photos/id/103/300/400" className="rounded-lg shadow-lg" alt="Community event" />
                </div>
             </div>
          </div>
       </section>

       {/* Values */}
       <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                   <Users className="mx-auto text-blue-600 mb-4" size={40} />
                   <h3 className="text-xl font-bold mb-2">Community First</h3>
                   <p className="text-gray-600">We prioritize the needs of El Paso families in everything we do.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                   <Award className="mx-auto text-yellow-500 mb-4" size={40} />
                   <h3 className="text-xl font-bold mb-2">Transparency</h3>
                   <p className="text-gray-600">We ensure every donation goes exactly where it's needed.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                   <TrendingUp className="mx-auto text-green-600 mb-4" size={40} />
                   <h3 className="text-xl font-bold mb-2">Sustainable Growth</h3>
                   <p className="text-gray-600">Expanding our reach to help more schools and charities every year.</p>
                </div>
             </div>
          </div>
       </section>

       {/* Contact Info Footer Style */}
       <section className="py-20 bg-white">
         <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
           <p className="mb-8 text-gray-600">We'd love to hear from you. Whether you want to host a bin or sponsor a drive.</p>
           <div className="inline-block text-left bg-gray-50 p-8 rounded-xl border border-gray-200">
             <div className="space-y-4">
                <div className="flex justify-between gap-12 border-b border-gray-200 pb-2">
                   <span className="font-bold text-gray-700">Address:</span>
                   <span className="text-gray-600">{content.general.address}</span>
                </div>
                <div className="flex justify-between gap-12 border-b border-gray-200 pb-2">
                   <span className="font-bold text-gray-700">Phone:</span>
                   <span className="text-gray-600">{content.general.phone}</span>
                </div>
                <div className="flex justify-between gap-12">
                   <span className="font-bold text-gray-700">Email:</span>
                   <span className="text-gray-600">{content.general.email}</span>
                </div>
             </div>
           </div>
         </div>
       </section>
    </div>
  );
};

export default About;