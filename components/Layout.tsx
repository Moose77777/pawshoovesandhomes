import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Twitter, Phone, Mail } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

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
    <div className="flex flex-col min-h-screen font-sans">
      {/* Top Bar */}
      <div className="bg-brand-900 text-brand-50 py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>Licensed • Bonded • Insured • Pet First Aid Certified</span>
          <div className="flex space-x-4 items-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center hover:text-brand-300"><Phone size={14} className="mr-1" /> {PHONE_NUMBER}</a>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center hover:text-brand-300"><Mail size={14} className="mr-1" /> {EMAIL_ADDRESS}</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="font-serif text-2xl font-bold text-brand-800 tracking-tight">Paws, Hooves & Homes</span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-medium transition-colors duration-200 ${
                    location.pathname === link.path 
                      ? 'text-brand-600 border-b-2 border-brand-600' 
                      : 'text-stone-600 hover:text-brand-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="bg-brand-600 text-white px-5 py-2.5 rounded-full font-bold shadow-md hover:bg-brand-700 transition-all transform hover:-translate-y-0.5">
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-800 hover:text-brand-600 p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-brand-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-3 rounded-md text-base font-medium text-stone-700 hover:text-brand-800 hover:bg-brand-50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link to="/contact" className="block w-full text-center bg-brand-600 text-white px-5 py-3 rounded-lg font-bold shadow-sm hover:bg-brand-700">
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

      {/* Footer */}
      <footer className="bg-stone-900 text-brand-50">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <h3 className="font-serif text-xl font-bold text-brand-200 mb-4">{COMPANY_NAME}</h3>
              <p className="text-stone-400 text-sm mb-4">
                Professional, reliable care for your pets and home. We treat your family members like our own.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-stone-400 hover:text-brand-300"><Instagram size={20} /></a>
                <a href="#" className="text-stone-400 hover:text-brand-300"><Facebook size={20} /></a>
                <a href="#" className="text-stone-400 hover:text-brand-300"><Twitter size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-brand-100 mb-4 uppercase text-sm tracking-wider">Services</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li><Link to="/services" className="hover:text-white">Dog Walking</Link></li>
                <li><Link to="/services" className="hover:text-white">Cat Sitting</Link></li>
                <li><Link to="/services" className="hover:text-white">Horse Care</Link></li>
                <li><Link to="/services" className="hover:text-white">House Sitting</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-brand-100 mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
                <li><Link to="/resources" className="hover:text-white">FAQ</Link></li>
                <li><Link to="/resources" className="hover:text-white">Policies</Link></li>
                <li><Link to="/contact" className="hover:text-white">Service Area</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-brand-100 mb-4 uppercase text-sm tracking-wider">Newsletter</h4>
              <p className="text-stone-400 text-sm mb-4">Get seasonal pet care tips.</p>
              <form className="flex flex-col space-y-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-stone-800 border-none rounded px-3 py-2 text-sm text-white focus:ring-2 focus:ring-brand-500"
                />
                <button className="bg-brand-600 hover:bg-brand-700 text-white text-sm py-2 px-4 rounded transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;