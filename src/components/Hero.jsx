import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Truck, Droplets, Award, Star } from 'lucide-react';

export default function Hero({ onOpenQuickSubscribe }) {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background gentle gradient blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-dairy-green-100/60 via-dairy-cream-100/40 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Organic Assurance Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dairy-green-100/80 border border-dairy-green-200 text-dairy-green-900 text-xs sm:text-sm font-bold shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-dairy-green-600 animate-pulse"></span>
              <span>100% Pure, Raw & Untouched Dairy</span>
              <span className="text-dairy-gold-600 font-black">•</span>
              <span className="text-dairy-green-800 hidden sm:inline">Certified Farm Hygiene</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Pure Farm Milk, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dairy-green-800 via-dairy-green-700 to-dairy-gold-600">
                Straight from Pasture
              </span> <br />
              to Your Morning Table.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              At <strong className="text-dairy-green-900 font-semibold">AD Dairy Farm</strong>, our happy grass-fed cows and buffaloes produce rich, thick, antibiotic-free milk. Milked with modern automated pipelines, chilled to 4°C, and delivered to your doorstep in hours.
            </p>

            {/* Key Quality Checkpoints */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-dairy-green-600 flex-shrink-0" />
                <span>Zero Hormones / Oxytocin</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-dairy-green-600 flex-shrink-0" />
                <span>Never Watered Down</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-dairy-green-600 flex-shrink-0" />
                <span>Pure Desi Bilona Ghee</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-dairy-green-600 flex-shrink-0" />
                <span>Untouched by Hands</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-dairy-green-600 flex-shrink-0" />
                <span>Glass Bottle Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-dairy-green-600 flex-shrink-0" />
                <span>Daily Morning Delivery</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#products"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-dairy-green-700 hover:bg-dairy-green-800 text-white font-bold text-base shadow-lg shadow-dairy-green-800/25 hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#subscription"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-dairy-gold-400 hover:bg-dairy-gold-500 text-slate-950 font-bold text-base shadow-md transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Calculate Subscription</span>
              </a>
            </div>

            {/* Trust badge review snippet */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Customer" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Customer" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80" alt="Customer" />
              </div>
              <div className="text-left">
                <div className="flex items-center text-dairy-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-slate-800 ml-1.5">4.9 / 5</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Loved by 2,400+ families across the city</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visuals & Live Feature Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=1000&q=80"
                  alt="AD Dairy Farm Healthy Cows on Green Pastures"
                  className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                
                {/* Overlay Card Details */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold mb-2">
                    <Droplets className="w-3.5 h-3.5 text-dairy-gold-400" />
                    <span>Raw Whole Milk • Untouched Pipeline</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold">
                    Natural Green Fodder & Ethical Care
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1">
                    Free roaming, sunlit sheds, and automated gentle milking.
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Fresh Delivery */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-dairy-green-100 flex items-center gap-3 animate-float">
                <div className="w-11 h-11 rounded-xl bg-dairy-green-100 flex items-center justify-center text-dairy-green-800">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider font-bold text-slate-400">Cold Chain</span>
                  <span className="block text-sm font-extrabold text-slate-900">Arrives at 4°C Daily</span>
                </div>
              </div>

              {/* Floating Badge 2: Purity Lab Certificate */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-dairy-gold-200 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-dairy-gold-100 flex items-center justify-center text-dairy-gold-700">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider font-bold text-slate-400">AD Guarantee</span>
                  <span className="block text-sm font-extrabold text-slate-900">100% Chemical Free</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Highlight Stats Bar */}
        <div className="mt-16 pt-8 border-t border-dairy-green-200/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white shadow-soft hover:shadow-soft-hover transition-all">
            <span className="block font-serif text-3xl sm:text-4xl font-black text-dairy-green-800">2,400+</span>
            <span className="text-xs sm:text-sm font-bold text-slate-600 mt-1 block">Happy Households</span>
          </div>
          <div className="p-4 rounded-2xl bg-white shadow-soft hover:shadow-soft-hover transition-all">
            <span className="block font-serif text-3xl sm:text-4xl font-black text-dairy-green-800">4,500 L</span>
            <span className="text-xs sm:text-sm font-bold text-slate-600 mt-1 block">Daily Fresh Milk Yield</span>
          </div>
          <div className="p-4 rounded-2xl bg-white shadow-soft hover:shadow-soft-hover transition-all">
            <span className="block font-serif text-3xl sm:text-4xl font-black text-dairy-green-800">100%</span>
            <span className="text-xs sm:text-sm font-bold text-slate-600 mt-1 block">Purity & Lab Tested</span>
          </div>
          <div className="p-4 rounded-2xl bg-white shadow-soft hover:shadow-soft-hover transition-all">
            <span className="block font-serif text-3xl sm:text-4xl font-black text-dairy-green-800">&lt; 3 Hours</span>
            <span className="text-xs sm:text-sm font-bold text-slate-600 mt-1 block">Milking to Doorstep</span>
          </div>
        </div>

      </div>
    </section>
  );
}
