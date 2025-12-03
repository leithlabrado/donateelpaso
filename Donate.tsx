import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { MapPin, Truck, DollarSign, Search } from 'lucide-react';

const Donate: React.FC = () => {
  const { content } = useContent();
  const [activeTab, setActiveTab] = useState<'MONETARY' | 'BINS' | 'PICKUP'>('BINS');
  const [searchBin, setSearchBin] = useState('');

  const filteredBins = content.donate.binLocations.filter(bin => 
    bin.toLowerCase().includes(searchBin.toLowerCase())
  );

  return (
    <div className="flex flex-col">
       <div className="bg-blue-600 text-white py-16">
         <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">How to Donate</h1>
            <p className="max-w-2xl mx-auto text-blue-100 text-lg">{content.donate.introText}</p>
         </div>
       </div>

       <div className="container mx-auto px-4 -mt-8 mb-20 z-10 relative">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden min-h-[600px] flex flex-col">
            {/* Tabs */}
            <div className="flex flex-col md:flex-row border-b border-gray-200">
               <button 
                onClick={() => setActiveTab('MONETARY')}
                className={`flex-1 py-6 px-4 flex items-center justify-center gap-2 font-bold transition-colors ${activeTab === 'MONETARY' ? 'bg-white text-blue-600 border-b-2 border-blue-600' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
               >
                 <DollarSign size={20} /> Monetary Donation
               </button>
               <button 
                onClick={() => setActiveTab('BINS')}
                className={`flex-1 py-6 px-4 flex items-center justify-center gap-2 font-bold transition-colors ${activeTab === 'BINS' ? 'bg-white text-blue-600 border-b-2 border-blue-600' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
               >
                 <MapPin size={20} /> Bin Locations
               </button>
               <button 
                onClick={() => setActiveTab('PICKUP')}
                className={`flex-1 py-6 px-4 flex items-center justify-center gap-2 font-bold transition-colors ${activeTab === 'PICKUP' ? 'bg-white text-blue-600 border-b-2 border-blue-600' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
               >
                 <Truck size={20} /> Home Pick-up
               </button>
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-12 flex-grow">
              
              {activeTab === 'MONETARY' && (
                <div className="max-w-2xl mx-auto text-center animate-fadeIn">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                    <DollarSign size={40} />
                  </div>
                  <h2 className="text-2xl font-bold mb-6">Make a Financial Contribution</h2>
                  <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                    {content.donate.monetaryText}
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg mb-8">
                     <p className="font-semibold text-blue-800">Your donation supports:</p>
                     <ul className="text-left mt-4 space-y-2 text-blue-900 mx-auto max-w-xs">
                        <li className="flex items-center gap-2">✓ School Uniforms</li>
                        <li className="flex items-center gap-2">✓ Winter Coats</li>
                        <li className="flex items-center gap-2">✓ Student Food Programs</li>
                     </ul>
                  </div>
                  <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors shadow-lg w-full md:w-auto">
                    Donate via PayPal / Credit Card
                  </button>
                </div>
              )}

              {activeTab === 'BINS' && (
                <div className="animate-fadeIn">
                   <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Find a Donation Bin</h2>
                        <p className="text-gray-500 mt-1">Accepting clothes, shoes, and blankets.</p>
                      </div>
                      <div className="relative w-full md:w-64">
                        <input 
                          type="text" 
                          placeholder="Search locations..." 
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          value={searchBin}
                          onChange={(e) => setSearchBin(e.target.value)}
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredBins.map((location, idx) => (
                        <div key={idx} className="bg-gray-50 hover:bg-blue-50 border border-gray-200 p-4 rounded-lg flex items-start gap-3 transition-colors">
                           <MapPin className="text-red-500 mt-1 flex-shrink-0" size={20} />
                           <span className="font-medium text-gray-800">{location}</span>
                        </div>
                      ))}
                      {filteredBins.length === 0 && (
                        <div className="col-span-full text-center py-12 text-gray-500">
                          No locations found matching your search.
                        </div>
                      )}
                   </div>

                   <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col items-center">
                      <p className="text-gray-600 mb-4 text-center">Look for our distinct blue bins!</p>
                      <img src="https://picsum.photos/id/119/600/300" alt="Blue Donation Bin" className="rounded-lg shadow-md max-w-full md:max-w-md" />
                   </div>
                </div>
              )}

              {activeTab === 'PICKUP' && (
                <div className="max-w-4xl mx-auto animate-fadeIn">
                   <div className="flex flex-col md:flex-row gap-12 items-center">
                      <div className="md:w-1/2">
                         <h2 className="text-2xl font-bold mb-4">Schedule a Home Pick-up</h2>
                         <p className="text-gray-600 mb-6 leading-relaxed">
                           {content.donate.pickupText}
                         </p>
                         <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                               <p>Gather your gently used clothing and shoes.</p>
                            </div>
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div>
                               <p>Fill out the form below or call us.</p>
                            </div>
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">3</div>
                               <p>We pick up directly from your doorstep.</p>
                            </div>
                         </div>
                         <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                            <p className="text-yellow-800 font-semibold flex items-center gap-2">
                               <Truck size={18} /> Need immediate assistance?
                            </p>
                            <p className="text-yellow-700 mt-1">Call us at {content.general.phone}</p>
                         </div>
                      </div>

                      <div className="md:w-1/2 w-full bg-gray-50 p-6 rounded-xl border border-gray-200">
                         <h3 className="font-bold text-gray-900 mb-4">Request Pickup</h3>
                         <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder="Full Name" className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
                            <input type="email" placeholder="Email Address" className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
                            <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
                            <input type="text" placeholder="Pickup Address" className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
                            <textarea placeholder="Approximate number of bags/boxes?" className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500 h-24"></textarea>
                            <button className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition-colors">
                              Submit Request
                            </button>
                         </form>
                      </div>
                   </div>
                </div>
              )}
            </div>
          </div>
       </div>
    </div>
  );
};

export default Donate;