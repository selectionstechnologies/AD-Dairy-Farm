import React from 'react';
import { testimonialsData } from '../data/testimonials';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-dairy-cream-100/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dairy-gold-100 text-dairy-gold-800 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-dairy-gold-500 text-dairy-gold-500" />
            <span>Verified Customer Stories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Trusted by Families Every Morning
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See why mothers, doctors, chefs, and daily subscribers rely on AD Dairy Farm for pure nutrition.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((review) => (
            <div
              key={review.id}
              className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-100 shadow-soft hover:shadow-soft-hover transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-dairy-gold-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-dairy-green-100" />
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3.5">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-dairy-green-100"
                />
                <div>
                  <h4 className="font-serif font-bold text-slate-900 text-sm">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span>{review.role}</span>
                    <span>•</span>
                    <span className="text-dairy-green-700 font-semibold">{review.city}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
