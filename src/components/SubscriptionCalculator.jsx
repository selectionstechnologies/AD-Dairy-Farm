import React, { useState } from 'react';
import { Calculator, Calendar, Clock, Sparkles, CheckCircle2, MessageCircle, Heart, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SubscriptionCalculator() {
  const [milkType, setMilkType] = useState('cow'); // 'cow' or 'buffalo' or 'mixed'
  const [litersPerDay, setLitersPerDay] = useState(2);
  const [frequency, setFrequency] = useState('daily'); // 'daily' (30 days) or 'alternate' (15 days) or 'weekdays' (26 days)
  const [timeSlot, setTimeSlot] = useState('morning'); // 'morning' or 'evening'
  const [customerName, setCustomerName] = useState('');
  const [customerArea, setCustomerArea] = useState('');

  // Unit prices
  const cowPrice = 180;
  const buffaloPrice = 210;

  let unitPrice = cowPrice;
  if (milkType === 'buffalo') unitPrice = buffaloPrice;
  if (milkType === 'mixed') unitPrice = (cowPrice + buffaloPrice) / 2;

  // Monthly delivery days
  let daysInMonth = 30;
  if (frequency === 'alternate') daysInMonth = 15;
  if (frequency === 'weekdays') daysInMonth = 26;

  const totalMonthlyLiters = litersPerDay * daysInMonth;
  const rawMonthlyCost = totalMonthlyLiters * unitPrice;
  const discountPercent = litersPerDay >= 3 ? 8 : 5; // Subscription loyalty discount
  const discountAmount = Math.round((rawMonthlyCost * discountPercent) / 100);
  const finalMonthlyPrice = rawMonthlyCost - discountAmount;

  const handleWhatsAppSubscribe = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch (e) {
      // safe fallback if canvas-confetti is not loaded
    }

    const typeLabel = milkType === 'cow'
      ? 'Pure Desi Cow Milk (A2)'
      : milkType === 'buffalo'
      ? 'Fresh Farm Buffalo Milk'
      : 'Combo (Cow + Buffalo Milk)';

    const freqLabel = frequency === 'daily'
      ? 'Everyday (Daily)'
      : frequency === 'alternate'
      ? 'Alternate Days'
      : 'Mon to Sat (Weekdays)';

    const slotLabel = timeSlot === 'morning'
      ? 'Morning (6:00 AM - 7:30 AM)'
      : 'Evening (5:30 PM - 7:00 PM)';

    const message = `*🌟 AD Dairy Farm - New Subscription Request 🌟*
---------------------------------------
👤 *Customer Name:* ${customerName || 'New Customer'}
📍 *Delivery Area:* ${customerArea || 'To be specified'}

🥛 *Milk Variety:* ${typeLabel}
📦 *Quantity / Delivery:* ${litersPerDay} Liter(s)
📅 *Frequency:* ${freqLabel}
⏰ *Preferred Time Slot:* ${slotLabel}

📊 *Monthly Total:* ~${totalMonthlyLiters} Liters
💰 *Est. Monthly Bill:* Rs. ${finalMonthlyPrice.toLocaleString()} (${discountPercent}% Subscription Discount included)

Please confirm trial bottle or subscription start date!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/923001234567?text=${encoded}`, '_blank');
  };

  return (
    <section id="subscription" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dairy-gold-100 text-dairy-gold-800 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Smart Milk Planner</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Daily Milk Subscription Calculator
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Customize your household’s daily fresh milk delivery. Enjoy uninterrupted mornings, priority chilled slots, and monthly savings.
          </p>
        </div>

        {/* Calculator Widget Container */}
        <div className="mt-12 max-w-4xl mx-auto bg-dairy-cream-50 rounded-3xl border border-dairy-green-200/80 shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Inputs Column */}
            <div className="p-6 sm:p-8 lg:col-span-7 space-y-6">
              
              {/* 1. Milk Type Selection */}
              <div>
                <label className="block text-xs uppercase font-extrabold tracking-wider text-slate-500 mb-2.5">
                  1. Choose Your Fresh Milk Type
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    onClick={() => setMilkType('cow')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      milkType === 'cow'
                        ? 'border-dairy-green-700 bg-white shadow-sm ring-2 ring-dairy-green-700/20'
                        : 'border-slate-200 bg-white/60 hover:bg-white text-slate-600'
                    }`}
                  >
                    <span className="block text-xs font-bold text-slate-900">Desi Cow</span>
                    <span className="text-[11px] text-dairy-green-700 font-bold block mt-0.5">Rs. 180 / L</span>
                  </button>

                  <button
                    onClick={() => setMilkType('buffalo')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      milkType === 'buffalo'
                        ? 'border-dairy-green-700 bg-white shadow-sm ring-2 ring-dairy-green-700/20'
                        : 'border-slate-200 bg-white/60 hover:bg-white text-slate-600'
                    }`}
                  >
                    <span className="block text-xs font-bold text-slate-900">Buffalo</span>
                    <span className="text-[11px] text-dairy-green-700 font-bold block mt-0.5">Rs. 210 / L</span>
                  </button>

                  <button
                    onClick={() => setMilkType('mixed')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      milkType === 'mixed'
                        ? 'border-dairy-green-700 bg-white shadow-sm ring-2 ring-dairy-green-700/20'
                        : 'border-slate-200 bg-white/60 hover:bg-white text-slate-600'
                    }`}
                  >
                    <span className="block text-xs font-bold text-slate-900">Cow + Buffalo</span>
                    <span className="text-[11px] text-dairy-green-700 font-bold block mt-0.5">Rs. 195 / L</span>
                  </button>
                </div>
              </div>

              {/* 2. Liters Per Delivery */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs uppercase font-extrabold tracking-wider text-slate-500">
                    2. Liters Per Delivery
                  </label>
                  <span className="font-serif text-lg font-bold text-dairy-green-900">
                    {litersPerDay} {litersPerDay === 1 ? 'Liter' : 'Liters'} / Day
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((qty) => (
                    <button
                      key={qty}
                      onClick={() => setLitersPerDay(qty)}
                      className={`py-2.5 rounded-xl font-bold text-sm transition-all ${
                        litersPerDay === qty
                          ? 'bg-dairy-green-800 text-white shadow-sm'
                          : 'bg-white border border-slate-200 text-slate-700 hover:border-dairy-green-500'
                      }`}
                    >
                      {qty} L
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Delivery Frequency */}
              <div>
                <label className="block text-xs uppercase font-extrabold tracking-wider text-slate-500 mb-2">
                  3. Delivery Frequency
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setFrequency('daily')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                      frequency === 'daily'
                        ? 'bg-dairy-green-800 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700'
                    }`}
                  >
                    Daily (30 Days)
                  </button>
                  <button
                    onClick={() => setFrequency('alternate')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                      frequency === 'alternate'
                        ? 'bg-dairy-green-800 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700'
                    }`}
                  >
                    Alternate (15 Days)
                  </button>
                  <button
                    onClick={() => setFrequency('weekdays')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                      frequency === 'weekdays'
                        ? 'bg-dairy-green-800 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700'
                    }`}
                  >
                    Mon - Sat (26 Days)
                  </button>
                </div>
              </div>

              {/* 4. Delivery Slot */}
              <div>
                <label className="block text-xs uppercase font-extrabold tracking-wider text-slate-500 mb-2">
                  4. Preferred Delivery Time Slot
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTimeSlot('morning')}
                    className={`p-3 rounded-xl border flex items-center gap-2.5 text-left transition-all ${
                      timeSlot === 'morning'
                        ? 'border-dairy-green-700 bg-white ring-2 ring-dairy-green-700/20'
                        : 'border-slate-200 bg-white/60 text-slate-600'
                    }`}
                  >
                    <Clock className="w-4 h-4 text-dairy-green-700 flex-shrink-0" />
                    <div>
                      <span className="block text-xs font-bold text-slate-900">Morning Slot</span>
                      <span className="text-[11px] text-slate-500">6:00 AM - 7:30 AM</span>
                    </div>
                  </button>

                  <button
                    onClick={() => setTimeSlot('evening')}
                    className={`p-3 rounded-xl border flex items-center gap-2.5 text-left transition-all ${
                      timeSlot === 'evening'
                        ? 'border-dairy-green-700 bg-white ring-2 ring-dairy-green-700/20'
                        : 'border-slate-200 bg-white/60 text-slate-600'
                    }`}
                  >
                    <Clock className="w-4 h-4 text-dairy-green-700 flex-shrink-0" />
                    <div>
                      <span className="block text-xs font-bold text-slate-900">Evening Slot</span>
                      <span className="text-[11px] text-slate-500">5:30 PM - 7:00 PM</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Customer quick contact fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Farhan Ali"
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-dairy-green-600 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Delivery Area / Society
                  </label>
                  <input
                    type="text"
                    value={customerArea}
                    onChange={(e) => setCustomerArea(e.target.value)}
                    placeholder="e.g. Phase 4, Bahria Town"
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-dairy-green-600 bg-white"
                  />
                </div>
              </div>

            </div>

            {/* Right Summary Column */}
            <div className="bg-gradient-to-br from-dairy-green-900 to-dairy-green-950 p-6 sm:p-8 lg:col-span-5 text-white flex flex-col justify-between">
              
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-dairy-gold-400 font-extrabold">
                    Subscription Summary
                  </span>
                  <h3 className="font-serif text-2xl font-bold mt-1">
                    Estimated Monthly Cost
                  </h3>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-dairy-cream-200">
                  <div className="flex justify-between py-1 border-b border-dairy-green-800">
                    <span>Total Liters / Month</span>
                    <strong className="text-white font-mono">{totalMonthlyLiters} L</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-dairy-green-800">
                    <span>Standard Billing</span>
                    <span className="font-mono">Rs. {rawMonthlyCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-dairy-green-800 text-dairy-gold-400">
                    <span>Recurring Member Discount ({discountPercent}%)</span>
                    <span className="font-mono">- Rs. {discountAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-dairy-green-800">
                    <span>Sterilized Glass Bottle Pack</span>
                    <span className="text-dairy-green-300 font-bold">FREE Delivery</span>
                  </div>
                </div>

                {/* Final Total Display */}
                <div className="p-4 rounded-2xl bg-dairy-green-800/60 border border-dairy-green-700">
                  <span className="text-xs text-dairy-cream-300 uppercase tracking-wider font-semibold block">
                    Net Monthly Subscription
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl font-black text-dairy-gold-300 mt-1">
                    Rs. {finalMonthlyPrice.toLocaleString()}
                  </div>
                  <span className="text-[11px] text-dairy-green-200 block mt-1">
                    (Roughly Rs. {Math.round(finalMonthlyPrice / daysInMonth)} per day)
                  </span>
                </div>

                <div className="space-y-2 text-xs text-dairy-cream-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-dairy-gold-400 flex-shrink-0" />
                    <span>Pause or cancel anytime with 1 WhatsApp message</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-dairy-gold-400 flex-shrink-0" />
                    <span>Glass bottle replacement on every delivery</span>
                  </div>
                </div>
              </div>

              {/* Start Subscription CTA */}
              <div className="mt-8 pt-4">
                <button
                  onClick={handleWhatsAppSubscribe}
                  className="w-full py-3.5 px-6 rounded-2xl bg-dairy-gold-400 hover:bg-dairy-gold-500 text-slate-950 font-black text-sm shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950 text-dairy-gold-400" />
                  <span>Start Subscription via WhatsApp</span>
                </button>
                <p className="text-center text-[11px] text-dairy-cream-300 mt-2">
                  No advance commitment required. Try 1 free trial bottle first!
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
