import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, Clock, Star, ArrowRight } from 'lucide-react';
import { SERVICES, TESTIMONIALS, BLOG_POSTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/1025/1920/1080" // Pug wrapped in blanket
            alt="Happy pet" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight shadow-sm">
            Peace of Mind for <br/>
            <span className="text-brand-300">Paws, Hooves & Homes</span>
          </h1>
          <p className="text-xl text-stone-100 max-w-2xl mx-auto font-light">
            Professional, insured, and loving care for your animals while you're away. From stable to sofa, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/contact" className="px-8 py-4 bg-brand-600 text-white rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book a Service
            </Link>
            <Link to="/services" className="px-8 py-4 bg-white/90 text-brand-900 rounded-full font-bold text-lg hover:bg-white transition-all shadow-lg backdrop-blur-sm">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-brand-50 py-8 border-b border-brand-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-around gap-8 text-brand-800/80">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6" />
            <span className="font-semibold uppercase tracking-wider text-sm">Fully Insured & Bonded</span>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="w-6 h-6" />
            <span className="font-semibold uppercase tracking-wider text-sm">Pet First Aid Certified</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-6 h-6" />
            <span className="font-semibold uppercase tracking-wider text-sm">24/7 Availability</span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-800 mb-4">Our Services</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              We offer tailored care plans for every member of your furry (or hooved) family.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-brand-50 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-brand-100">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 text-brand-600 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <service.icon size={32} />
                </div>
                <h3 className="font-bold text-xl text-stone-800 mb-3">{service.title}</h3>
                <p className="text-stone-600 mb-6 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
                <Link to="/services" className="inline-flex items-center text-brand-700 font-bold text-sm hover:text-brand-900">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-brand-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <Heart size={400} />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-brand-300 fill-current" />
            ))}
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl italic mb-8 leading-relaxed">
            "{TESTIMONIALS[0].content}"
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <img 
              src={TESTIMONIALS[0].imageUrl} 
              alt={TESTIMONIALS[0].clientName} 
              className="w-16 h-16 rounded-full border-2 border-brand-300"
            />
            <div className="text-left">
              <div className="font-bold text-lg">{TESTIMONIALS[0].clientName}</div>
              <div className="text-brand-200 text-sm">Owner of {TESTIMONIALS[0].petName} ({TESTIMONIALS[0].petType})</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-stone-800 mb-2">Pet Care Tips</h2>
              <p className="text-stone-600">Latest advice from our blog</p>
            </div>
            <Link to="/resources" className="hidden md:inline-flex items-center text-brand-700 font-bold hover:underline">
              View All Posts <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">{post.category}</span>
                  <h3 className="font-bold text-lg mt-2 mb-3 text-stone-800">{post.title}</h3>
                  <p className="text-stone-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link to="/resources" className="text-stone-900 text-sm font-bold hover:text-brand-600">Read More</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/resources" className="inline-block bg-white border border-stone-300 text-stone-700 px-6 py-2 rounded-full font-bold">
              View All Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;