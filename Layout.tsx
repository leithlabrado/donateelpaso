import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { PageView } from '../types';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, LogIn } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const { content, isAdmin, logout } = useContent();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageView }[] = [
    { label: 'Home', page: 'HOME' },
    { label: 'Donate', page: 'DONATE' },
    { label: 'Events', page: 'EVENTS' },
    { label: 'About Us', page: 'ABOUT' },
    { label: 'Contact', page: 'CONTACT' },
  ];

  const handleNav = (page: PageView) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} /> {content.general.phone}</span>
            <span className="flex items-center gap-2"><Mail size={14} /> {content.general.email}</span>
          </div>
          <div className="flex gap-4">
             {isAdmin ? (
               <button onClick={() => onNavigate('ADMIN')} className="hover:text-yellow-400 font-bold transition-colors">
                 Dashboard
               </button>
             ) : (
                <button onClick={() => onNavigate('ADMIN')} className="flex items-center gap-1 hover:text-yellow-400 transition-colors opacity-70 hover:opacity-100">
                  <LogIn size={14} /> Admin
                </button>
             )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-blue-900 cursor-pointer flex items-center gap-2"
            onClick={() => handleNav('HOME')}
          >
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 shadow-inner">
                <span className="font-black text-xl">D</span>
            </div>
            <span>Donate El Paso</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  currentPage === item.page ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 flex flex-col gap-4 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`text-left py-2 font-medium ${
                  currentPage === item.page ? 'text-blue-600 bg-blue-50 px-2 rounded' : 'text-gray-600 px-2'
                }`}
              >
                {item.label}
              </button>
            ))}
             <button
                onClick={() => handleNav('ADMIN')}
                className="text-left py-2 font-medium text-gray-500 px-2"
              >
                Admin Login
              </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Donate El Paso</h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              We provide essential clothing and financial assistance to families in need, partnering with local schools and organizations to make a direct impact in our community.
            </p>
            <div className="flex gap-4">
              <a href={content.general.facebook} className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"><Facebook size={20} /></a>
              <a href={content.general.instagram} className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors"><Instagram size={20} /></a>
              <a href={content.general.twitter} className="bg-gray-800 p-2 rounded-full hover:bg-blue-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><button onClick={() => onNavigate('DONATE')} className="hover:text-yellow-400 transition-colors">Find a Bin</button></li>
              <li><button onClick={() => onNavigate('DONATE')} className="hover:text-yellow-400 transition-colors">Home Pick-up</button></li>
              <li><button onClick={() => onNavigate('EVENTS')} className="hover:text-yellow-400 transition-colors">Events</button></li>
              <li><button onClick={() => onNavigate('ABOUT')} className="hover:text-yellow-400 transition-colors">Our Partners</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-yellow-400 flex-shrink-0 mt-1" size={18} />
                <span>{content.general.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-yellow-400 flex-shrink-0" size={18} />
                <span>{content.general.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-yellow-400 flex-shrink-0" size={18} />
                <span>{content.general.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Donate El Paso. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;