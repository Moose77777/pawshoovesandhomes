import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQS, BLOG_POSTS } from '../constants';
import SEO from '../components/SEO';
import { generateFAQSchema } from '../utils/schema';

const Resources: React.FC = () => {
  return (
    <div className="bg-brand-50 min-h-screen">
      <SEO 
        title="Pet Care Tips & FAQs | Grantham Pet Sitter Resources"
        description="Helpful guides on dog walking, horse care, and pet health in Lincolnshire. Frequently asked questions about our services and booking policies."
        canonical="/resources"
        schema={generateFAQSchema()}
      />
      
      {/* Blog Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-stone-800 mb-8 border-l-4 border-brand-600 pl-4">Care Guides & Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {BLOG_POSTS.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
               <div className="h-48 overflow-hidden relative">
                 <img src={post.image} alt={post.title} width="400" height="250" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
               </div>
               <div className="p-6">
                 <div className="flex justify-between items-center mb-2">
                   <span className="text-xs font-bold text-brand-600 bg-brand-100 px-2 py-1 rounded">{post.category}</span>
                   <span className="text-xs text-stone-400">{post.date}</span>
                 </div>
                 <h3 className="font-bold text-lg text-stone-800 mb-2 group-hover:text-brand-700 transition-colors">{post.title}</h3>
                 <p className="text-sm text-stone-600 mb-4 line-clamp-3">{post.excerpt}</p>
                 <span className="text-brand-500 text-sm font-bold flex items-center">Read Article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform"/></span>
               </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-stone-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-stone-500 mb-12">Everything you need to know about booking pet sitting in Grantham.</p>
          
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <Disclosure key={index} as="div" className="border border-stone-200 rounded-lg">
                {({ open }) => (
                  <>
                    <Disclosure.Button className={`flex justify-between w-full px-4 py-4 text-sm font-bold text-left text-brand-900 bg-brand-50 hover:bg-brand-100 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75 ${open ? 'rounded-b-none' : ''}`}>
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-brand-500 transition-transform`}
                      />
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                      <Disclosure.Panel className="px-4 py-4 text-sm text-stone-600 bg-white rounded-b-lg leading-relaxed">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="bg-stone-100 rounded-xl p-8 border border-stone-200">
          <h2 className="font-serif text-2xl font-bold text-stone-800 mb-6">Important Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-stone-700">
            <div>
              <h3 className="font-bold text-brand-800 mb-2">Booking & Cancellations</h3>
              <p className="mb-4">
                We require a 50% deposit to secure dates for house sitting and holiday bookings. Standard cancellations must be made 48 hours in advance for a full refund.
              </p>
              <h3 className="font-bold text-brand-800 mb-2">Bank Holidays</h3>
              <p>
                A surcharge applies to major holidays (Christmas, Boxing Day, New Year's, Easter). Bookings for these dates should be made at least 1 month in advance.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-brand-800 mb-2">Veterinary Emergencies</h3>
              <p className="mb-4">
                In the event of a medical emergency, we will attempt to contact you and your vet immediately. If unavailable, we reserve the right to seek care at the nearest animal hospital in Grantham.
              </p>
              <h3 className="font-bold text-brand-800 mb-2">Keys & Access</h3>
              <p>
                We require two forms of entry (e.g., key and code) or a key safe code. Keys are kept in a secure, non-labelled safe when not in use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;