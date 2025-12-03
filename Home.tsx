import React from 'react';
import { useContent } from '../context/ContentContext';
import { PageView } from '../types';
import { ArrowRight, Heart, Truck, School } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageView) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { content } = useContent();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white h-[600px] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://picsum.photos/id/15/1920/1080" 
            alt="El Paso landscape" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              {content.home.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
              {content.home.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('DONATE')}
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
              >
                Donate Now <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => onNavigate('ABOUT')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-all flex items-center justify-center"
              >
                Our Mission
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
               <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-100 rounded-full z-0"></div>
                  <img 
                    src="https://picsum.photos/id/439/800/600" 
                    alt="Clothing Donation" 
                    className="relative z-10 rounded-xl shadow-2xl w-full"
                  />
               </div>
            </div>
            <div className="md:w-1/2">
              <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Who We Are</h4>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.home.missionTitle}</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {content.home.missionText}
              </p>
              <div className="flex gap-4">
                 <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg min-w-[100px]">
                    <span className="text-3xl font-bold text-blue-600">$20k+</span>
                    <span className="text-xs text-gray-500 uppercase font-semibold">Donated</span>
                 </div>
                 <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg min-w-[100px]">
                    <span className="text-3xl font-bold text-blue-600">30+</span>
                    <span className="text-xs text-gray-500 uppercase font-semibold">Bins</span>
                 </div>
                 <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg min-w-[100px]">
                    <span className="text-3xl font-bold text-blue-600">12+</span>
                    <span className="text-xs text-gray-500 uppercase font-semibold">Years</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Donate?</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
             <p className="text-xl text-gray-700 leading-relaxed italic">
               "{content.home.impactText}"
             </p>
          </div>
        </div>
      </section>

      {/* Action Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Truck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Home Pick-Up</h3>
              <p className="text-gray-600 mb-6">Schedule a convenient pickup from your home. We make it easy to give back.</p>
              <button onClick={() => onNavigate('DONATE')} className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-1">
                Schedule Now <ArrowRight size={16} />
              </button>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                <School size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Bin Locations</h3>
              <p className="text-gray-600 mb-6">Find a donation bin near you. Located at many local schools and centers.</p>
              <button onClick={() => onNavigate('DONATE')} className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-1">
                Find Location <ArrowRight size={16} />
              </button>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Financial Support</h3>
              <p className="text-gray-600 mb-6">100% of monetary contributions provide food and clothing to local students.</p>
              <button onClick={() => onNavigate('DONATE')} className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-1">
                Donate Funds <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Ticker (Simplified) */}
      <section className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
           <p className="text-gray-400 mb-6 uppercase tracking-widest text-sm font-semibold">Proudly Partnering With</p>
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
              <span className="text-2xl font-bold text-white">YISD</span>
              <span className="text-2xl font-bold text-white">EPISD</span>
              <span className="text-2xl font-bold text-white">SISD</span>
              <span className="text-2xl font-bold text-white">CISD</span>
              <span className="text-2xl font-bold text-white">Supreme Cleaners</span>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;