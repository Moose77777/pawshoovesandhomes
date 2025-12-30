import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-50 flex items-center justify-center p-4">
      <SEO 
        title="Page Not Found"
        description="The page you are looking for does not exist."
      />
      
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden text-center border border-brand-100">
        <div className="h-64 overflow-hidden relative">
          <img 
            src="/images/20210825_144654.jpg" 
            alt="Dog looking confused in heather" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>
        
        <div className="p-8 md:p-12 -mt-12 relative z-10">
          <h1 className="font-serif text-6xl font-bold text-brand-900 mb-4">Uh oh!</h1>
          <h2 className="text-2xl font-bold text-brand-600 mb-6">We sniffed everywhere, but we can't find that page.</h2>
          <p className="text-stone-600 text-lg mb-8 max-w-md mx-auto">
            It looks like this page has run off the lead. Don't worry, let's get you back to safety.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-500 text-white font-bold rounded-full hover:bg-brand-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Home size={20} className="mr-2" />
              Return Home
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-600 border-2 border-brand-500 font-bold rounded-full hover:bg-brand-50 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;