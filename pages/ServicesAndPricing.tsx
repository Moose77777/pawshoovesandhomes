import React from 'react';
import { SERVICES, COMPANY_NAME } from '../constants';
import { CheckCircle, AlertCircle, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { generateServiceSchema } from '../utils/schema';

const ServicesAndPricing: React.FC = () => {
  return (
    <div className="bg-brand-50">
      <SEO 
        title="Pet Sitting Prices Grantham | Dog Walking & Horse Care Rates"
        description="Transparent pricing for Dog Walking, Horse Care, and House Sitting in Grantham. Competitive rates starting from £12 per visit."
        canonical="/services"
        schema={generateServiceSchema()}
      />

      {/* Header */}
      <div className="bg-brand-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 pattern-dots"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-50 mb-6">Services & Pricing</h1>
          <p className="text-brand-200 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Transparent pricing for exceptional care. No hidden fees, just happy pets in Grantham, Stamford, Bourne, and the Vale of Belvoir.
          </p>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-brand-100 flex flex-col hover:shadow-2xl transition-shadow duration-300">
              {/* Card Image */}
              <div className="h-48 overflow-hidden relative group">
                <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  width="400"
                  height="300" 
                />
                <div className="absolute top-4 right-4 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20 shadow-md">
                   {service.title.split(' ')[0]}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-brand-900 mb-2">{service.title}</h3>
                <p className="text-brand-600 text-sm mb-6 flex-grow leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="bg-brand-50 rounded-lg p-4 mb-6">
                  <span className="block text-xs text-brand-500 uppercase tracking-wide font-bold mb-1">Starting At</span>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-brand-800">{service.price}</span>
                  </div>
                  <span className="text-xs text-brand-400 mt-1 block">{service.duration}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start text-sm text-stone-600">
                      <CheckCircle size={16} className="text-brand-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/contact" 
                  className="w-full block text-center bg-brand-900 text-brand-50 py-3 rounded-lg font-bold hover:bg-brand-700 transition-colors mt-auto"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
         <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-brand-100 p-4 rounded-full">
              <AlertCircle size={32} className="text-brand-600" />
            </div>
            <div className="flex-grow">
               <h3 className="font-serif text-2xl font-bold text-brand-900 mb-2">Need something custom?</h3>
               <p className="text-stone-600 mb-4">
                 Every animal is unique. We offer tailored packages for multi-pet households in Grantham, elderly animals requiring medication, or long-term farm sitting in rural Lincolnshire.
               </p>
               <div className="flex flex-wrap gap-4 text-sm text-brand-700 font-medium">
                 <span className="flex items-center"><CheckCircle size={16} className="mr-1"/> Medication Administration</span>
                 <span className="flex items-center"><CheckCircle size={16} className="mr-1"/> Plant Watering</span>
                 <span className="flex items-center"><CheckCircle size={16} className="mr-1"/> Key Holding</span>
               </div>
            </div>
            <Link to="/contact" className="whitespace-nowrap px-6 py-3 border-2 border-brand-500 text-brand-600 font-bold rounded-full hover:bg-brand-500 hover:text-white transition-colors">
              Contact Us
            </Link>
         </div>
      </div>
    </div>
  );
};

export default ServicesAndPricing;