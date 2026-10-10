import React from 'react';
import { ShieldCheck, Snowflake, HeartPulse, Droplets, FlaskConical, Award, Check } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Droplets className="w-6 h-6 text-dairy-green-600" />,
      title: 'Untouched Automated Milking',
      desc: 'Milking is performed using computerized Swedish vacuum pipelines directly into stainless steel tanks. No human hand touches your milk.'
    },
    {
      icon: <Snowflake className="w-6 h-6 text-dairy-green-600" />,
      title: 'Instant 4°C Cold Chain',
      desc: 'Raw milk is chilled to 4°C within 15 minutes of milking. This freezes bacterial reproduction naturally without boiling or pasteurizing.'
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-dairy-green-600" />,
      title: 'Zero Hormones & Antibiotics',
      desc: 'Strictly zero oxytocin or growth steroids. When a cow requires medical treatment, its milk is withheld from distribution until clear.'
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-dairy-green-600" />,
      title: 'Daily Lab Purity Checks',
      desc: 'Every single batch undergoes rigorous testing for fat percentage, SNF (Solids Not Fat), water dilution, and microbial safety.'
    },
    {
      icon: <Award className="w-6 h-6 text-dairy-green-600" />,
      title: 'Pure Organic Green Fodder',
      desc: 'Our cows graze on lush alfalfa, maize, and silage cultivated on farm soil without toxic chemical sprays.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-dairy-green-600" />,
      title: 'Tamper-Evident Eco Glass',
      desc: 'Delivered in sanitized, reusable glass bottles that preserve the natural buttery taste and eliminate microplastic leaching.'
    }
  ];

  return (
    <section id="quality" className="py-16 sm:py-24 bg-dairy-cream-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dairy-green-100 text-dairy-green-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Gold Standard Hygiene</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Why AD Dairy Farm is the Trusted Choice
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We don’t buy milk from third-party middlemen. Everything is produced, tested, chilled, and bottled on our own single farm.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-100 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1 space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-dairy-green-50 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table: AD Dairy vs Common Market Milk */}
        <div className="mt-16 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-soft">
          <div className="p-6 sm:p-8 bg-dairy-green-900 text-white">
            <h3 className="font-serif text-2xl font-bold">The Difference You Can Taste</h3>
            <p className="text-xs sm:text-sm text-dairy-cream-200 mt-1">
              Compare AD Dairy Farm fresh single-source milk with commercial processed milk and street vendors.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-dairy-cream-50 font-bold text-slate-700">
                  <th className="p-4 sm:px-6">Quality Factor</th>
                  <th className="p-4 sm:px-6 text-dairy-green-800 bg-dairy-green-50/50">AD Dairy Farm</th>
                  <th className="p-4 sm:px-6 text-slate-500">Commercial Packet Milk</th>
                  <th className="p-4 sm:px-6 text-slate-500">Traditional Street Milk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 sm:px-6 font-semibold text-slate-800">Source</td>
                  <td className="p-4 sm:px-6 font-bold text-dairy-green-800 bg-dairy-green-50/30">Single Certified Organic Farm</td>
                  <td className="p-4 sm:px-6 text-slate-600">Collected from hundreds of mixed sources</td>
                  <td className="p-4 sm:px-6 text-slate-600">Unknown source / Middlemen</td>
                </tr>
                <tr>
                  <td className="p-4 sm:px-6 font-semibold text-slate-800">Preservatives & Powder</td>
                  <td className="p-4 sm:px-6 font-bold text-dairy-green-800 bg-dairy-green-50/30">100% Zero Added Anything</td>
                  <td className="p-4 sm:px-6 text-slate-600">Often reconstituted milk powder & stabilizers</td>
                  <td className="p-4 sm:px-6 text-slate-600">Risk of chemical adulteration & ice water</td>
                </tr>
                <tr>
                  <td className="p-4 sm:px-6 font-semibold text-slate-800">Milking Method</td>
                  <td className="p-4 sm:px-6 font-bold text-dairy-green-800 bg-dairy-green-50/30">Automated Pipeline, Untouched</td>
                  <td className="p-4 sm:px-6 text-slate-600">Bulk vat processing</td>
                  <td className="p-4 sm:px-6 text-slate-600">Manual hand milking into open buckets</td>
                </tr>
                <tr>
                  <td className="p-4 sm:px-6 font-semibold text-slate-800">Natural Cream (Malai)</td>
                  <td className="p-4 sm:px-6 font-bold text-dairy-green-800 bg-dairy-green-50/30">Full Natural Cream Intact</td>
                  <td className="p-4 sm:px-6 text-slate-600">Skimmed off for butter/commercial cream</td>
                  <td className="p-4 sm:px-6 text-slate-600">Often diluted or extracted</td>
                </tr>
                <tr>
                  <td className="p-4 sm:px-6 font-semibold text-slate-800">Cold Chain</td>
                  <td className="p-4 sm:px-6 font-bold text-dairy-green-800 bg-dairy-green-50/30">Delivered within 3 hours at 4°C</td>
                  <td className="p-4 sm:px-6 text-slate-600">Stored for days or weeks</td>
                  <td className="p-4 sm:px-6 text-slate-600">Carried in open cans without temperature control</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
