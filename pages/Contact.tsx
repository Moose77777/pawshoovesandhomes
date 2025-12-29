import React, { useState } from 'react';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { SERVICES, EMAIL_ADDRESS, PHONE_NUMBER } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petType: 'Dog',
    serviceType: 'Dog Sitting & Walking',
    dates: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will get back to you within 24 hours.");
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      <div className="bg-brand-800 text-white py-16 text-center">
        <h1 className="font-serif text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-brand-200">Ready to book? Have questions? We'd love to hear from you.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-800 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-1">Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none" placeholder="Jane Smith" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-1">Phone</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none" placeholder={PHONE_NUMBER} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-700 mb-1">Email</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none" placeholder={EMAIL_ADDRESS} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-sm font-bold text-stone-700 mb-1">Pet Type</label>
                   <select name="petType" value={formData.petType} onChange={handleChange} className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white">
                     <option>Dog</option>
                     <option>Cat</option>
                     <option>Horse</option>
                     <option>Other / Multiple</option>
                   </select>
                </div>
                <div>
                   <label className="block text-sm font-bold text-stone-700 mb-1">Service Needed</label>
                   <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white">
                     {SERVICES.map(s => <option key={s.id}>{s.title}</option>)}
                   </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-700 mb-1">Requested Dates</label>
                <input type="text" name="dates" value={formData.dates} onChange={handleChange} className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none" placeholder="e.g., 15 Oct - 20 Oct" />
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-700 mb-1">Message / Special Requirements</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none" placeholder="Tell us a bit about your pets..."></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-600 text-white font-bold py-4 rounded-lg hover:bg-brand-700 transition-colors shadow-lg">
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
             <h2 className="font-serif text-2xl font-bold text-stone-800 mb-6">Contact Information</h2>
             <div className="space-y-6 mb-12">
               <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-full mr-4 text-brand-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800">Email</h3>
                    <p className="text-stone-600">{EMAIL_ADDRESS}</p>
                    <p className="text-stone-500 text-xs mt-1">Response time: Within 4 hours</p>
                  </div>
               </div>
               <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-full mr-4 text-brand-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800">Phone</h3>
                    <p className="text-stone-600">{PHONE_NUMBER}</p>
                    <p className="text-stone-500 text-xs mt-1">Mon-Sun: 8am - 8pm</p>
                  </div>
               </div>
               <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-full mr-4 text-brand-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800">Service Area</h3>
                    <p className="text-stone-600">Serving Grantham, Lincolnshire, and surrounding areas.</p>
                  </div>
               </div>
             </div>

             {/* Service Area Map Placeholder */}
             <div className="bg-stone-200 w-full h-64 rounded-xl flex items-center justify-center relative overflow-hidden group">
               <img 
                 src="https://picsum.photos/800/600?grayscale" 
                 alt="Map" 
                 className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity" 
               />
               <div className="relative z-10 bg-white/90 px-6 py-4 rounded-lg shadow-lg text-center">
                 <h4 className="font-bold text-stone-800">Service Radius</h4>
                 <p className="text-sm text-stone-600">40 miles from Grantham</p>
                 <p className="text-xs text-brand-600 mt-1">*Travel fees apply >15 miles</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;