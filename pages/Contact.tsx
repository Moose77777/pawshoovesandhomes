import React, { useState } from 'react';
import { MapPin, Mail, Phone, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { SERVICES, EMAIL_ADDRESS, PHONE_NUMBER } from '../constants';
import SEO from '../components/SEO';

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

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // ---------------------------------------------------------
      // IMPORTANT: YOU MUST REPLACE THIS URL WITH YOUR OWN FORMSPREE ID
      // 1. Go to https://formspree.io/
      // 2. Create a Free Account
      // 3. Create a New Form
      // 4. Paste the "Endpoint" URL they give you right here below:
      // ---------------------------------------------------------
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_UNIQUE_ID_HERE";
      
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
            name: '', email: '', phone: '', petType: 'Dog', serviceType: 'Dog Sitting & Walking', dates: '', message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-brand-50">
      <SEO 
        title="Contact Us | Book Pet Sitter Grantham"
        description="Book your free meet-and-greet in Grantham today. Contact Harriet for availability and inquiries about dog walking, horse care, and house sitting."
        canonical="/contact"
      />

      <div className="bg-brand-500 text-brand-50 py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-brand-100 text-lg">Ready to book? Have questions? We'd love to hear from you.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100 relative overflow-hidden">
            <h2 className="font-serif text-2xl font-bold text-brand-800 mb-6">Send a Message</h2>
            
            {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full py-10 animate-fade-in text-center">
                    <div className="bg-brand-100 p-4 rounded-full mb-4">
                        <CheckCircle className="w-16 h-16 text-brand-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-900 mb-2">Message Sent!</h3>
                    <p className="text-brand-700">Thank you for contacting us. Harriet will get back to you within 4 hours.</p>
                    <button onClick={() => setStatus('idle')} className="mt-6 text-brand-600 font-bold underline hover:text-brand-800">Send another message</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <label className="block text-sm font-bold text-brand-700 mb-1">Name</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-brand-50 border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none focus:border-transparent transition-all" placeholder="Jane Smith" />
                    </div>
                    <div>
                    <label className="block text-sm font-bold text-brand-700 mb-1">Phone</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 bg-brand-50 border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none focus:border-transparent transition-all" placeholder={PHONE_NUMBER} />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-brand-700 mb-1">Email</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-brand-50 border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none focus:border-transparent transition-all" placeholder={EMAIL_ADDRESS} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <label className="block text-sm font-bold text-brand-700 mb-1">Pet Type</label>
                    <select name="petType" value={formData.petType} onChange={handleChange} className="w-full p-3 bg-brand-50 border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none focus:border-transparent transition-all">
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Horse</option>
                        <option>Other / Multiple</option>
                    </select>
                    </div>
                    <div>
                    <label className="block text-sm font-bold text-brand-700 mb-1">Service Needed</label>
                    <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full p-3 bg-brand-50 border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none focus:border-transparent transition-all">
                        {SERVICES.map(s => <option key={s.id}>{s.title}</option>)}
                    </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-brand-700 mb-1">Requested Dates</label>
                    <input type="text" name="dates" value={formData.dates} onChange={handleChange} className="w-full p-3 bg-brand-50 border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none focus:border-transparent transition-all" placeholder="e.g., 15 Oct - 20 Oct" />
                </div>

                <div>
                    <label className="block text-sm font-bold text-brand-700 mb-1">Message / Special Requirements</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full p-3 bg-brand-50 border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none focus:border-transparent transition-all" placeholder="Tell us a bit about your pets..."></textarea>
                </div>

                {status === 'error' && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center text-sm">
                        <AlertCircle size={20} className="mr-2 flex-shrink-0" />
                        Something went wrong. Please try again or email us directly at {EMAIL_ADDRESS}.
                    </div>
                )}

                <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-500 text-brand-50 font-bold py-4 rounded-lg hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/30 flex justify-center items-center"
                >
                    {status === 'submitting' ? (
                        <>
                            <Loader className="animate-spin mr-2" /> Sending...
                        </>
                    ) : (
                        "Send Message"
                    )}
                </button>
                </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div>
             <h2 className="font-serif text-2xl font-bold text-brand-800 mb-6">Contact Information</h2>
             <div className="space-y-6 mb-12">
               <div className="flex items-start">
                  <div className="bg-brand-200 p-3 rounded-full mr-4 text-brand-700">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-800">Email</h3>
                    <p className="text-brand-600">{EMAIL_ADDRESS}</p>
                    <p className="text-brand-500 text-xs mt-1">Response time: Within 4 hours</p>
                  </div>
               </div>
               <div className="flex items-start">
                  <div className="bg-brand-200 p-3 rounded-full mr-4 text-brand-700">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-800">Phone</h3>
                    <p className="text-brand-600">{PHONE_NUMBER}</p>
                    <p className="text-brand-500 text-xs mt-1">Mon-Sun: 8am - 8pm</p>
                  </div>
               </div>
               <div className="flex items-start">
                  <div className="bg-brand-200 p-3 rounded-full mr-4 text-brand-700">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-800">Service Area</h3>
                    <p className="text-brand-600">Serving Grantham, Lincolnshire, and surrounding areas.</p>
                  </div>
               </div>
             </div>

             {/* Interactive Google Map */}
             <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg border border-brand-200">
                <iframe 
                    title="Paws Hooves and Homes Location"
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?q=The%20Waterfront%2C%20Grantham%2C%20NG31%206QQ&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;