import React from 'react';
import { Shield, CheckCircle, FileText, Heart } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { COMPANY_NAME } from '../constants';
import SEO from '../components/SEO';

// Data for Recharts
const EXPERIENCE_DATA = [
  { name: 'Dogs', value: 35 },
  { name: 'Horses', value: 40 },
  { name: 'Cats', value: 15 },
  { name: 'Other', value: 10 },
];
const COLORS = ['#8b6f47', '#d4964d', '#e5ca92', '#f7f1df'];

const AboutAndSafety: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="About Harriet Lightfoot | Expert Pet Care Grantham"
        description="Meet Harriet, a fully insured and DBS checked pet sitter with 40+ years experience. Specialised in horse care and dog walking in Grantham."
        canonical="/about"
      />

      {/* Bio Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Image Column */}
          <div className="relative sticky top-24">
            <img 
              src="/images/harriet.jpg" 
              alt="Harriet Lightfoot - Owner of Paws, Hooves & Homes Grantham" 
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto z-10 relative object-cover border-8 border-brand-50"
            />
            <div className="absolute -bottom-6 -right-6 w-full max-w-md mx-auto h-full border-4 border-brand-200 rounded-2xl -z-0 hidden md:block transform translate-x-4"></div>
            
            {/* Experience Chart */}
            <div className="mt-12 bg-stone-50 p-6 rounded-xl border border-stone-100 shadow-inner">
               <h3 className="font-bold text-stone-700 mb-2 text-center font-serif">Care Portfolio Breakdown</h3>
               <div className="h-64 w-full">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={EXPERIENCE_DATA}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {EXPERIENCE_DATA.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={36}/>
                    </PieChart>
                 </ResponsiveContainer>
               </div>
               <p className="text-center text-xs text-stone-500 mt-4">Based on 40+ years of diverse animal care.</p>
            </div>
          </div>
          
          {/* Content Column */}
          <div>
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">About The Founder</span>
            <h1 className="font-serif text-4xl font-bold text-stone-800 mb-2">Meet Harriet Lightfoot</h1>
            <h2 className="text-2xl text-brand-700 font-serif italic mb-8">A Lifetime of Animal Love</h2>
            
            <div className="prose text-stone-600 leading-relaxed space-y-6">
              <p>
                I've never known life without animals. For the past 40 years, pets have been woven into the fabric of my world—the comfort, the joy, the unconditional love they bring. Horses, cats, dogs, and countless other creatures have taught me what it truly means to care.
              </p>
              
              <h3 className="text-xl font-bold text-stone-800">The Journey That Led Here</h3>
              <p>
                My most recent companions were two horses who weren't just animals—they were my life and soul. Sharing every day with them taught me lessons about dedication, patience, and the profound responsibility of caring for another living being. When my husband and I made the decision to travel for a year, choosing to rehome my horses was one of the hardest decisions I've ever made. But it opened my eyes to something beautiful: I can channel that same love and expertise toward helping others care for their beloved animals.
              </p>

              <h3 className="text-xl font-bold text-stone-800">Professional Experience & Expertise</h3>
              <p>
                Over four decades, I've developed genuine expertise in animal care. Credentials alone don't make someone trustworthy, but my background ensures your pets are in capable hands:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-700">
                <li><strong>40+ years of pet ownership</strong> including horses, cats, dogs, and other animals.</li>
                <li><strong>Specialised horse care training</strong> gained through years of hands-on work at a dedicated horse yard near Grantham.</li>
                <li><strong>Veterinary knowledge & techniques</strong> learned through close collaboration with equine professionals.</li>
                <li>Deep understanding of animal behaviour, nutrition, and specialised care needs.</li>
              </ul>
              <p>
                 What truly makes me different is this: <strong>I care for your pets like they are my own.</strong>
              </p>

              <h3 className="text-xl font-bold text-stone-800">My Promise to You</h3>
              <p>
                You'll only need to tell me once what you need—and I'll do it beautifully. I take extra care in my work because attention to detail matters. When I finish, your home will be left exactly as you'd want it, and your pets will be happier, healthier, and loved. I'm the person who shows up early, stays late, and goes the extra mile—not because I have to, but because your animals deserve nothing less.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="bg-brand-900 text-brand-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-12">Trust & Safety Is Our Priority</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <Shield className="w-12 h-12 mx-auto mb-4 text-brand-300" />
              <h3 className="font-bold text-xl mb-3">Fully Insured</h3>
              <p className="text-brand-100/80 text-sm">
                We carry comprehensive public liability insurance to protect your home and pets against unforeseen incidents.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <Heart className="w-12 h-12 mx-auto mb-4 text-brand-300" />
              <h3 className="font-bold text-xl mb-3">First Aid Certified</h3>
              <p className="text-brand-100/80 text-sm">
                Certified in Pet CPR and First Aid. We know how to handle emergencies calmly and effectively.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-brand-300" />
              <h3 className="font-bold text-xl mb-3">DBS Checked</h3>
              <p className="text-brand-100/80 text-sm">
                Every team member undergoes a rigorous criminal background check (DBS) annually for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-center text-stone-800 mb-12">Certifications & Memberships</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
           {/* Placeholders for documents */}
           {[1, 2, 3, 4].map((i) => (
             <div key={i} className="aspect-[3/4] bg-stone-100 border-2 border-dashed border-stone-300 rounded-lg flex flex-col items-center justify-center p-4 hover:border-brand-400 transition-colors group cursor-pointer">
                <FileText className="w-10 h-10 text-stone-400 group-hover:text-brand-500 mb-2 transition-colors" />
                <span className="text-xs text-center text-stone-500 font-semibold group-hover:text-brand-700">
                  {i === 1 ? 'Public Liability Insurance' : i === 2 ? 'DBS Check Certificate' : i === 3 ? 'Pet First Aid' : 'Equine Care Cert'}
                </span>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default AboutAndSafety;