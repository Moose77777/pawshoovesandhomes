import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Twitter, Phone, Mail } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, EMAIL_ADDRESS, SERVICE_AREAS } from '../constants';
import CookieBanner from './CookieBanner';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About & Trust', path: '/about' },
    { name: 'Services & Pricing', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-50">
      {/* Top Bar */}
      <div className="bg-brand-500 text-brand-50 py-2 px-4 text-sm hidden md:block border-b border-brand-600">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-medium tracking-wide">Fully Insured • DBS Checked • Pet First Aid Certified</span>
          <div className="flex space-x-6 items-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center hover:text-brand-200 transition-colors"><Phone size={14} className="mr-2" /> {PHONE_NUMBER}</a>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center hover:text-brand-200 transition-colors"><Mail size={14} className="mr-2" /> {EMAIL_ADDRESS}</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-50/95 backdrop-blur-md shadow-sm border-b border-brand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-28 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center group">
                {/* Logo Image */}
                <img 
                  src="/images/logo.png" 
                  alt="Paws, Hooves & Homes Logo" 
                  className="h-20 w-20 md:h-24 md:w-24 mr-3 rounded-full transition-transform group-hover:scale-105"
                />
                <div className="flex flex-col justify-center">
                  <span className="font-serif text-2xl md:text-3xl font-bold text-brand-900 leading-none">Paws, Hooves</span>
                  <span className="font-serif text-xl md:text-2xl text-brand-500 leading-none">& Homes</span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-bold transition-all duration-200 hover:text-brand-500 ${
                    location.pathname === link.path 
                      ? 'text-brand-500 border-b-2 border-brand-500' 
                      : 'text-brand-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="bg-brand-500 text-brand-50 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-brand-600 hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-800 hover:text-brand-500 p-2"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-brand-50 border-t border-brand-200 absolute w-full shadow-xl" role="dialog" aria-modal="true">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-4 py-4 rounded-xl text-lg font-bold text-brand-800 hover:text-brand-500 hover:bg-brand-100 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link to="/contact" className="block w-full text-center bg-brand-500 text-brand-50 px-5 py-4 rounded-xl font-bold shadow-md hover:bg-brand-600">
                  Book a Visit
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Cookie Banner */}
      <CookieBanner />

      {/* Footer */}
      <footer className="bg-brand-900 text-brand-100">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="block mb-6">
                <img 
                  src="/images/logo.png" 
                  alt="Paws, Hooves & Homes Logo" 
                  className="h-28 w-28 rounded-full border-4 border-brand-800 bg-brand-50"
                />
              </Link>
              <h3 className="font-serif text-2xl font-bold text-brand-50 mb-6">{COMPANY_NAME}</h3>
              <p className="text-brand-200 text-sm mb-6 leading-relaxed">
                Your pets mean everything. So do mine. Professional Pet Sitting & Horse Care Specialist serving Grantham & Lincolnshire.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="bg-brand-800 p-2 rounded-full text-brand-300 hover:bg-brand-700 hover:text-white transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="https://instagram.com" className="bg-brand-800 p-2 rounded-full text-brand-300 hover:bg-brand-700 hover:text-white transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="https://twitter.com" className="bg-brand-800 p-2 rounded-full text-brand-300 hover:bg-brand-700 hover:text-white transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-brand-300 mb-6 uppercase text-sm tracking-wider">Services</h4>
              <ul className="space-y-3 text-brand-200 text-sm">
                <li><Link to="/services" className="hover:text-white transition-colors">Dog Walking</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Cat Sitting</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Horse Care</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">House Sitting</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-brand-300 mb-6 uppercase text-sm tracking-wider">Areas We Cover</h4>
              <div className="text-brand-200 text-sm leading-relaxed">
                <p className="mb-2">Serving Grantham and surrounding villages including:</p>
                <p className="text-xs text-brand-400 font-medium leading-relaxed">
                  {SERVICE_AREAS.join(" • ")}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-brand-300 mb-6 uppercase text-sm tracking-wider">Contact</h4>
              <div className="space-y-4 text-brand-200 text-sm">
                <p className="font-semibold text-white text-lg">Harriet Lightfoot</p>
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-brand-400"/>
                  <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white">{PHONE_NUMBER}</a>
                </div>
                <div className="flex items-center space-x-2">
                   <Mail size={16} className="text-brand-400"/>
                   <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white">{EMAIL_ADDRESS}</a>
                </div>
                <p className="pt-2 text-brand-400 text-xs">The Waterfront, Grantham, Lincolnshire NG31 6QQ</p>
              </div>
            </div>
          </div>
          <div className="border-t border-brand-800 mt-16 pt-8 text-center text-brand-400 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
            <p className="mt-2 md:mt-0 opacity-60">Serving NG31, NG32, NG33, and surrounding postcodes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;