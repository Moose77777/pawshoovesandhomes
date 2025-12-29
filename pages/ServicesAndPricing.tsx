import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesAndPricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);
  const activeService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-brand-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-900 mb-4">Services & Pricing</h1>
          <p className="text-brand-800 text-lg max-w-2xl mx-auto">
            Transparent pricing for exceptional care. No hidden fees, just happy pets.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all ${
                activeTab === service.id
                  ? 'bg-brand-600 text-white shadow-lg transform scale-105'
                  : 'bg-stone-100 text-stone-600 hover:bg-brand-50 hover:text-brand-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <service.icon size={18} />
                <span>{service.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start animate-fade-in">
          {/* Left: Details */}
          <div>
            <img 
              src={activeService.image} 
              alt={activeService.title} 
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg mb-8"
            />
            <h2 className="font-serif text-3xl font-bold text-stone-800 mb-4">{activeService.title}</h2>
            <div className="space-y-4 text-stone-600 mb-8">
              {activeService.fullDescription.map((desc, idx) => (
                <p key={idx}>{desc}</p>
              ))}
            </div>
            
            <h3 className="font-bold text-lg text-brand-800 mb-4">What's Included:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeService.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-stone-700">
                  <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pricing Table */}
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-stone-800 mb-6 border-b border-stone-200 pb-4">
              Pricing Options
            </h3>
            
            <table className="w-full mb-8 text-left">
              <thead>
                <tr className="text-stone-500 text-sm uppercase tracking-wider">
                  <th className="pb-4">Service Type</th>
                  <th className="pb-4 text-right">Rate</th>
                </tr>
              </thead>
              <tbody className="space-y-4">
                <tr className="border-b border-stone-200">
                  <td className="py-4 font-bold text-stone-800">Standard Visit ({activeService.duration})</td>
                  <td className="py-4 text-right text-brand-700 font-bold">{activeService.price}</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="py-4 font-bold text-stone-800">Holiday Rate</td>
                  <td className="py-4 text-right text-stone-600">+$10 / visit</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="py-4 font-bold text-stone-800">Additional Pet</td>
                  <td className="py-4 text-right text-stone-600">+$5 / pet</td>
                </tr>
              </tbody>
            </table>

            <div className="bg-brand-50 p-4 rounded-lg mb-8">
              <h4 className="font-bold text-brand-800 mb-2 flex items-center">
                <AlertCircle size={18} className="mr-2" />
                Add-On Services
              </h4>
              <ul className="text-sm text-brand-900 space-y-1">
                <li>• Medication Administration: +$5/visit</li>
                <li>• Plant Watering (Excessive): +$10/visit</li>
                <li>• Key Pickup/Dropoff: $15</li>
              </ul>
            </div>

            <div className="text-center">
              <Link 
                to="/contact" 
                className="block w-full py-4 bg-brand-600 text-white rounded-lg font-bold hover:bg-brand-700 transition-colors shadow-md"
              >
                Book {activeService.title}
              </Link>
              <p className="text-xs text-stone-500 mt-4">
                *Prices subject to change based on location and specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesAndPricing;