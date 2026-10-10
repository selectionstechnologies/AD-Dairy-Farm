import React from 'react';
import { Phone, Mail, MapPin, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dairy-green-950 text-dairy-cream-100 pt-16 pb-12 border-t border-dairy-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-dairy-green-900/80">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-dairy-green-800 flex items-center justify-center text-white border border-dairy-green-700">
                <span className="font-serif font-black text-xl text-dairy-gold-400">AD</span>
              </div>
              <span className="font-serif font-black text-2xl text-white tracking-tight">
                AD Dairy Farm
              </span>
            </div>

            <p className="text-sm text-dairy-cream-300 max-w-sm leading-relaxed">
              Committed to providing 100% pure, unadulterated, and nutrient-dense dairy products. Milked cleanly, chilled rapidly to 4°C, and delivered to your family before breakfast.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs font-semibold text-dairy-gold-400">
              <ShieldCheck className="w-4 h-4 text-dairy-gold-400" />
              <span>Zero Preservatives • Zero Hormones • Glass Bottle Delivery</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-dairy-cream-300">
              <li><a href="#home" className="hover:text-dairy-gold-300 transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-dairy-gold-300 transition-colors">Farm Products</a></li>
              <li><a href="#subscription" className="hover:text-dairy-gold-300 transition-colors">Daily Milk Subscription</a></li>
              <li><a href="#quality" className="hover:text-dairy-gold-300 transition-colors">Why AD Dairy</a></li>
              <li><a href="#process" className="hover:text-dairy-gold-300 transition-colors">Milking Process</a></li>
              <li><a href="#reviews" className="hover:text-dairy-gold-300 transition-colors">Customer Reviews</a></li>
            </ul>
          </div>

          {/* Our Products */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base">Our Dairy</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-dairy-cream-300">
              <li><a href="#products" className="hover:text-dairy-gold-300 transition-colors">Pure A2 Cow Milk</a></li>
              <li><a href="#products" className="hover:text-dairy-gold-300 transition-colors">Fresh Buffalo Milk</a></li>
              <li><a href="#products" className="hover:text-dairy-gold-300 transition-colors">Vedic Bilona Desi Ghee</a></li>
              <li><a href="#products" className="hover:text-dairy-gold-300 transition-colors">White Farm Butter</a></li>
              <li><a href="#products" className="hover:text-dairy-gold-300 transition-colors">Soft Malai Paneer</a></li>
              <li><a href="#products" className="hover:text-dairy-gold-300 transition-colors">Thick Earthen Dahi</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base">Get in Touch</h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-dairy-cream-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-dairy-gold-400 flex-shrink-0 mt-0.5" />
                <span>AD Dairy Farm, Main Agro Belt, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-dairy-gold-400 flex-shrink-0" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-dairy-gold-400 flex-shrink-0" />
                <span>contact@addairyfarm.com</span>
              </div>
              <div className="pt-2">
                <span className="block text-[11px] uppercase font-bold text-dairy-gold-400">Delivery Hours</span>
                <span className="text-xs">Morning: 6:00 AM – 7:30 AM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-dairy-cream-400 gap-4">
          <p>© {new Date().getFullYear()} AD Dairy Farm. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Delivering Pure Health & Wellness Every Morning</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
