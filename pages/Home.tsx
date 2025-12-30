import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, Clock, Star, ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Quote, Pause, Play } from 'lucide-react';
import { SERVICES, TESTIMONIALS, BLOG_POSTS, COMPANY_NAME, GALLERY_IMAGES } from '../constants';
import SEO from '../components/SEO';
import { generateOrganizationSchema } from '../utils/schema';

const Home: React.FC = () => {
  // Testimonial Carousel Logic
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    if (!isPaused) {
        timerRef.current = setInterval(nextTestimonial, 6000);
    }
    return () => {
        if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const previewImages = [
    GALLERY_IMAGES.find(img => img.category === 'Dog') || GALLERY_IMAGES[0],
    GALLERY_IMAGES.find(img => img.category === 'Horse') || GALLERY_IMAGES[1],
    GALLERY_IMAGES.find(img => img.category === 'Cat') || GALLERY_IMAGES[2],
    GALLERY_IMAGES.find(img => img.src.includes('beach')) || GALLERY_IMAGES[3],
  ].filter(Boolean);

  return (
    <div className="flex flex-col">
      <SEO 
        title="Pet Sitter Grantham | Dog Walking, Cat Sitting & Horse Care"
        description="Reliable pet sitting and dog walking in Grantham, Lincolnshire. Fully insured and DBS checked with 40+ years of animal experience. Call 07711 865958."
        canonical="/"
        schema={generateOrganizationSchema()}
      />

      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden bg-brand-900">
        <div 
          className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url('/images/20240707_112019.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-brand-900/30 z-0"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto space-y-8 animate-fade-in-up pt-10">
          <div className="inline-block px-6 py-2 rounded-full bg-brand-50/10 backdrop-blur-md border border-brand-50/20 text-brand-50 font-bold tracking-widest text-xs uppercase mb-4 shadow-lg">
            Serving Grantham, Stamford & The Vale of Belvoir
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-brand-50 leading-tight drop-shadow-xl">
            Professional Pet Care<br/>
            <span className="text-brand-300 italic relative">
              You Can Trust
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-300/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-100 max-w-2xl mx-auto font-light drop-shadow-md leading-relaxed">
            40+ years of equine & canine experience. Fully insured, DBS checked, and dedicated to your animal's happiness in Lincolnshire.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link to="/contact" className="px-10 py-5 bg-brand-500 text-brand-50 rounded-full font-bold text-lg hover:bg-brand-400 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border-2 border-transparent hover:border-brand-300">
              Book a Service
            </Link>
            <Link to="/about" className="px-10 py-5 bg-transparent text-brand-50 border-2 border-brand-50 rounded-full font-bold text-lg hover:bg-brand-50 hover:text-brand-900 transition-all shadow-lg backdrop-blur-sm">
              Meet Harriet
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview - Modern Cards */}
      <section className="bg-brand-50 py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <span className="text-brand-500 font-bold uppercase tracking-widest text-sm mb-2 block">Our Expertise</span>
              <h2 className="font-serif text-4xl font-bold text-brand-900 mb-6">Tailored Care For Every Animal</h2>
              <div className="w-24 h-1 bg-brand-300 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Paws */}
               <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-brand-100 group transform hover:-translate-y-2">
                  <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-500 transition-colors duration-500 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600 group-hover:text-white transition-colors"><path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"/><path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.96-1.45-2.344-2.5"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/><path d="M4.42 11.247A4.335 4.335 0 0 1 6.944 6.77c3.21-.94 5.442 1.499 5.442 1.499a6.852 6.852 0 0 1 1.215.004c.329.094.053-.199.353-.13a2.193 2.193 0 0 1 .656.33c2.145 1.527 2.126 5.61 2.126 5.61a5.125 5.125 0 0 1 .594 3.477c-.502 3.158-3.143 4.836-5.344 4.97-2.202-.133-4.842-1.812-5.344-4.97-.42-2.648.33-5.462.778-6.314Z"/></svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-800 mb-3">Dog Sitting Grantham</h3>
                  <p className="text-brand-700 leading-relaxed mb-8 px-4">
                    Reliable dog walking and sitting in Grantham. Routine, play, and endless affection for your furry friends.
                  </p>
                  <Link to="/services" className="inline-flex items-center text-brand-600 font-bold hover:text-brand-800 uppercase tracking-wider text-sm border-b-2 border-transparent hover:border-brand-600 transition-all pb-1">
                    View Dog Services <ArrowRight size={16} className="ml-2" />
                  </Link>
               </div>

               {/* Hooves */}
               <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-brand-100 group transform hover:-translate-y-2">
                  <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-500 transition-colors duration-500 shadow-inner">
                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600 group-hover:text-white transition-colors"><path d="m5 16-1 2.5 1 2.5h3l1-2.5-1-2.5z"/><path d="m14 16-1 2.5 1 2.5h3l1-2.5-1-2.5z"/><path d="M7 16c-.5-2 0-4.5 2.5-5 .2-.6 1.4-1.2 2.5-1 .6-1.5 2.4-2.5 4-2.5 2 0 4 2 4 4.5V16"/><path d="M12 11h.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z"/></svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-800 mb-3">Horse Care Lincolnshire</h3>
                  <p className="text-brand-700 leading-relaxed mb-8 px-4">
                    Specialised equine care by a 40-year veteran. Turnout, mucking out, rug changes, and health checks across Lincolnshire.
                  </p>
                  <Link to="/services" className="inline-flex items-center text-brand-600 font-bold hover:text-brand-800 uppercase tracking-wider text-sm border-b-2 border-transparent hover:border-brand-600 transition-all pb-1">
                    View Horse Care <ArrowRight size={16} className="ml-2" />
                  </Link>
               </div>

               {/* Homes */}
               <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-brand-100 group transform hover:-translate-y-2">
                  <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-500 transition-colors duration-500 shadow-inner">
                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600 group-hover:text-white transition-colors"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-800 mb-3">House Sitting</h3>
                  <p className="text-brand-700 leading-relaxed mb-8 px-4">
                    House sitting that keeps your property secure and lived-in. Plants watered, post collected, and total peace of mind.
                  </p>
                  <Link to="/services" className="inline-flex items-center text-brand-600 font-bold hover:text-brand-800 uppercase tracking-wider text-sm border-b-2 border-transparent hover:border-brand-600 transition-all pb-1">
                    View House Sitting <ArrowRight size={16} className="ml-2" />
                  </Link>
               </div>
            </div>
        </div>
      </section>

      {/* Trust Badges - High Contrast */}
      <section className="bg-brand-900 py-16 border-t border-brand-800 text-brand-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-around gap-12">
          <div className="flex items-center space-x-4">
            <Shield className="w-12 h-12 text-brand-300" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-wide">Fully Insured</span>
              <span className="text-sm text-brand-300/80 uppercase tracking-wider">Public Liability Cover</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Heart className="w-12 h-12 text-brand-300" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-wide">First Aid Certified</span>
              <span className="text-sm text-brand-300/80 uppercase tracking-wider">Expert Emergency Care</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircle className="w-12 h-12 text-brand-300" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-wide">DBS Checked</span>
              <span className="text-sm text-brand-300/80 uppercase tracking-wider">Verified Background</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-10 left-10 text-brand-100 opacity-50">
          <Quote size={120} />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
           <div className="text-center mb-12">
             <h2 className="font-serif text-3xl font-bold text-brand-900">Client Stories</h2>
           </div>
           
           <div className="bg-brand-50 rounded-3xl p-8 md:p-12 shadow-xl border border-brand-100 relative">
             <div className="min-h-[200px] flex flex-col justify-center items-center text-center transition-opacity duration-500">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-brand-400 fill-current" />
                  ))}
                </div>
                <blockquote className="font-serif text-xl md:text-2xl text-brand-800 italic mb-8 leading-relaxed">
                  "{TESTIMONIALS[currentTestimonial].content}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img 
                    src={TESTIMONIALS[currentTestimonial].imageUrl} 
                    alt={TESTIMONIALS[currentTestimonial].clientName} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-brand-300"
                    width="64"
                    height="64"
                  />
                  <div className="text-left">
                    <p className="font-bold text-brand-900">{TESTIMONIALS[currentTestimonial].clientName}</p>
                    <p className="text-sm text-brand-600">{TESTIMONIALS[currentTestimonial].petName} the {TESTIMONIALS[currentTestimonial].petType}</p>
                  </div>
                </div>
             </div>

             {/* Carousel Controls */}
             <button onClick={prevTestimonial} aria-label="Previous Testimonial" className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-brand-500 hover:text-brand-700 hover:bg-brand-100 transition-colors">
               <ChevronLeft size={24} />
             </button>
             <button onClick={nextTestimonial} aria-label="Next Testimonial" className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-brand-500 hover:text-brand-700 hover:bg-brand-100 transition-colors">
               <ChevronRight size={24} />
             </button>
             <button onClick={() => setIsPaused(!isPaused)} aria-label={isPaused ? "Play Carousel" : "Pause Carousel"} className="absolute right-4 top-4 bg-white p-2 rounded-full shadow-sm text-brand-400 hover:text-brand-600 transition-colors">
               {isPaused ? <Play size={16} /> : <Pause size={16} />}
             </button>
           </div>
           
           <div className="flex justify-center gap-2 mt-6">
             {TESTIMONIALS.map((_, idx) => (
               <button 
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-all ${idx === currentTestimonial ? 'bg-brand-500 w-6' : 'bg-brand-200'}`}
               />
             ))}
           </div>
        </div>
      </section>

      {/* Areas We Cover - Local SEO Text Block */}
      <section className="bg-brand-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="font-serif text-3xl font-bold text-brand-900 mb-6">Areas We Cover</h2>
           <p className="text-brand-800 leading-relaxed text-lg">
             Based at The Waterfront in Grantham, we are proud to offer professional pet sitting, dog walking, and equine care services across a 40-mile radius. We frequently visit clients in 
             <span className="font-bold"> Barrowby</span>, 
             <span className="font-bold"> Great Gonerby</span>, 
             <span className="font-bold"> Harlaxton</span>, and the 
             <span className="font-bold"> Vale of Belvoir</span>. 
             For horse care and farm sitting, we extend our specialist services to <span className="font-bold">Stamford</span>, <span className="font-bold">Bourne</span>, <span className="font-bold">Sleaford</span>, and <span className="font-bold">Newark</span>.
           </p>
        </div>
      </section>

      {/* Recent Adventures Gallery Preview */}
      <section className="bg-brand-900 py-20 relative">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                 <span className="text-brand-300 font-bold uppercase tracking-widest text-sm">Gallery</span>
                 <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-50 mt-2">Recent Adventures in Lincolnshire</h2>
              </div>
              <Link to="/gallery" className="flex items-center text-brand-300 hover:text-brand-100 transition-colors font-bold group">
                 View Full Gallery <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {previewImages.map((img, idx) => (
                 img ? (
                   <div key={idx} className={`relative rounded-xl overflow-hidden group shadow-lg ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                      <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        width={idx === 0 ? 800 : 400}
                        height={idx === 0 ? 600 : 400}
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/40 transition-colors duration-300"></div>
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                         <span className="text-xs font-bold uppercase bg-brand-500 px-3 py-1 rounded-full shadow-md">{img.category}</span>
                      </div>
                   </div>
                 ) : null
               ))}
            </div>
         </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-brand-500 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Ready to give your pets the best care?</h2>
          <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a complimentary meet-and-greet in Grantham today. We'll come to you, meet your animals, and create a care plan that fits your life.
          </p>
          <Link to="/contact" className="inline-block bg-white text-brand-600 font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-brand-50 hover:shadow-xl transition-all transform hover:-translate-y-1">
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;