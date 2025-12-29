import React from 'react';
import { Award, Shield, CheckCircle, FileText, Heart } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// Data for Recharts to satisfy requirement
const EXPERIENCE_DATA = [
  { name: 'Dogs', value: 40 },
  { name: 'Horses', value: 30 },
  { name: 'Cats', value: 20 },
  { name: 'Small Animals', value: 10 },
];
const COLORS = ['#8b6f47', '#d4964d', '#e5ca92', '#f7f1df'];

const AboutAndSafety: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Bio Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/images/20230722_123456.jpg" // Woman portrait
              alt="Sarah - Owner" 
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto z-10 relative object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-brand-200 rounded-2xl -z-0 hidden md:block"></div>
          </div>
          
          <div>
            <h1 className="font-serif text-4xl font-bold text-stone-800 mb-6">Hi, I'm Sarah</h1>
            <h2 className="text-xl text-brand-600 font-semibold mb-6">Founder & Head Pet Sitter</h2>
            <div className="prose text-stone-600 leading-relaxed space-y-4">
              <p>
                I founded <strong>Paws, Hooves & Homes</strong> with a simple mission: to provide the kind of care I would want for my own animals. Having grown up on a farm and spent my adult life rescuing seniors dogs, I understand that pets are family.
              </p>
              <p>
                My journey began 10 years ago working in equine therapy stables, which taught me the patience and attention to detail required for large animal care. Since then, I've expanded to professional pet sitting, bringing medical administration skills and a calm demeanor to every visit.
              </p>
              <p>
                When I'm not caring for your pets, you can find me hiking with my two rescue labs or volunteering at the local equine shelter.
              </p>
            </div>
            
            {/* Experience Chart */}
            <div className="mt-8 bg-stone-50 p-6 rounded-xl border border-stone-100">
               <h3 className="font-bold text-stone-700 mb-2 text-center">Our Care Portfolio Breakdown</h3>
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
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="bg-brand-900 text-brand-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-12">Trust & Safety Is Our Priority</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <Shield className="w-12 h-12 mx-auto mb-4 text-brand-300" />
              <h3 className="font-bold text-xl mb-3">Insured & Bonded</h3>
              <p className="text-brand-100/80 text-sm">
                We carry comprehensive liability insurance and bonding to protect your home and pets against unforeseen incidents.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <Heart className="w-12 h-12 mx-auto mb-4 text-brand-300" />
              <h3 className="font-bold text-xl mb-3">First Aid Certified</h3>
              <p className="text-brand-100/80 text-sm">
                Certified in Pet CPR and First Aid by the Red Cross. We know how to handle emergencies calmly.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-brand-300" />
              <h3 className="font-bold text-xl mb-3">Background Checked</h3>
              <p className="text-brand-100/80 text-sm">
                Every team member undergoes a rigorous criminal background check annually for your peace of mind.
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
             <div key={i} className="aspect-[3/4] bg-stone-100 border-2 border-dashed border-stone-300 rounded-lg flex flex-col items-center justify-center p-4 hover:border-brand-400 transition-colors group">
                <FileText className="w-10 h-10 text-stone-400 group-hover:text-brand-500 mb-2" />
                <span className="text-xs text-center text-stone-500 font-semibold">
                  {i === 1 ? 'Business License' : i === 2 ? 'Insurance Cert' : i === 3 ? 'CPR Training' : 'Vet Reference'}
                </span>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default AboutAndSafety;