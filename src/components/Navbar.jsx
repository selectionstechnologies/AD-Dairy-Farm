import React, { useState, useEffect } from 'react';
import { ShoppingBag, Phone, Menu, X, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Daily Subscription', href: '#subscription' },
    { name: 'Why AD Farm', href: '#quality' },
    { name: 'Farm Process', href: '#process' },
    { name: 'Testimonials', href: '#reviews' },
    { name: 'Contact & Visit', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-dairy-green-900 text-dairy-cream-100 text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2 border-b border-dairy-green-800">
        <Sparkles className="w-3.5 h-3.5 text-dairy-gold-400 animate-pulse" />
        <span>Fresh Morning Milking & Delivery (6:00 AM - 7:30 AM) | Zero Preservatives Guaranteed</span>
        <span className="hidden md:inline text-dairy-gold-300 font-semibold ml-2">Helpline: +92 300 1234567</span>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md py-2'
            : 'bg-white py-2 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

          {/* Brand Logo */}
          <a href="#home" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="AD Dairy Farm"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap text-slate-700 hover:text-dairy-green-800 hover:bg-dairy-green-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Direct Call / Helpline button */}
            <a
              href="tel:+923001234567"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap text-dairy-green-900 bg-dairy-green-50 hover:bg-dairy-green-100 border border-dairy-green-200 transition-colors"
              title="Call AD Dairy Farm"
            >
              <Phone className="w-3.5 h-3.5 text-dairy-green-700" />
              <span>Call Farm</span>
            </a>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-dairy-green-700 text-white hover:bg-dairy-green-800 shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 text-white" />
              <span className="hidden sm:inline font-bold text-xs uppercase tracking-wide">Basket</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-dairy-gold-500 text-slate-950 font-black text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:text-dairy-green-900 hover:bg-dairy-green-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="https://wa.me/923001234567?text=Hello%20AD%20Dairy%20Farm,%20I%20want%20to%20inquire%20about%20fresh%20milk%20delivery."
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-green-600 text-white font-bold text-center text-sm flex items-center justify-center gap-2 shadow"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+923001234567"
                className="w-full py-2.5 px-4 rounded-xl border border-dairy-green-700 text-dairy-green-900 font-bold text-center text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call: +92 300 1234567
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
