import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in-up">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-brand-200 p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="bg-brand-100 p-3 rounded-full hidden md:block">
          <Cookie className="text-brand-600 w-8 h-8" />
        </div>
        <div className="flex-grow text-center md:text-left">
          <h3 className="font-bold text-brand-900 text-lg mb-1">We use cookies</h3>
          <p className="text-stone-600 text-sm">
            We use simple cookies to ensure you get the best experience on our website and to analyze traffic. 
            By continuing to browse, you agree to our use of cookies.
          </p>
        </div>
        <div className="flex gap-4">
            <button 
              onClick={handleAccept}
              className="bg-brand-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-600 transition-colors shadow-md whitespace-nowrap"
            >
              Accept & Close
            </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;