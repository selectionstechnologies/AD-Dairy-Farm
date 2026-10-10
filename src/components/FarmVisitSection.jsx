import React, { useState } from 'react';
import { MapPin, Phone, Mail, Calendar, Users, Send, CheckCircle, Clock } from 'lucide-react';

export default function FarmVisitSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '2',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*🚜 Farm Visit Booking Request - AD Dairy Farm*
---------------------------------------
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📅 *Preferred Date:* ${formData.date}
👥 *Number of Guests / Family:* ${formData.guests}
📝 *Notes:* ${formData.notes || 'None'}

Please confirm tour slot and location directions!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/923001234567?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-dairy-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Farm Address & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dairy-green-100 text-dairy-green-800 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Visit Us & Connect</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Come Visit AD Dairy Farm
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We practice 100% transparency. Bring your children for a refreshing weekend farm morning — pet the calves, witness automated milking, and sip warm, fresh milk right on the farm!
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
                <MapPin className="w-5 h-5 text-dairy-green-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Farm Location</h4>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    AD Dairy Farm, Main Farm Road, Near Green Agri Belt, Punjab, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
                <Clock className="w-5 h-5 text-dairy-green-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Visiting Hours</h4>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    Saturday & Sunday: 7:00 AM – 11:00 AM (By prior reservation)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
                <Phone className="w-5 h-5 text-dairy-green-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Helpline & WhatsApp</h4>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    +92 300 1234567 / +92 321 7654321
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
                <Mail className="w-5 h-5 text-dairy-green-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Inquiries</h4>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    contact@addairyfarm.com
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Tour Booking / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-soft">
              <div className="space-y-2 mb-6">
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Book a Family Farm Tour or Send Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Fill in your details below and we’ll reserve your tour slot and send location directions to your WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Asad Rehman"
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-dairy-green-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 0000000"
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-dairy-green-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-dairy-green-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Total Family Members / Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-dairy-green-600 bg-white"
                    >
                      <option value="1-2">1 to 2 People</option>
                      <option value="3-5">3 to 5 People (Family)</option>
                      <option value="6-10">6 to 10 People (Large Group)</option>
                      <option value="10+">School / Educational Group (10+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Any Special Request / Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Bringing toddlers, interested in testing raw milk..."
                    className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-dairy-green-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-dairy-green-700 hover:bg-dairy-green-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Confirm Booking via WhatsApp</span>
                </button>

                {submitted && (
                  <div className="p-3 bg-dairy-green-50 border border-dairy-green-200 rounded-xl text-dairy-green-800 text-xs font-semibold flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-dairy-green-600" />
                    <span>WhatsApp message generated! Our farm team will reply shortly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
