import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const openChat = () => {
    const text = encodeURIComponent('Assalam-o-Alaikum AD Dairy Farm! I want to inquire about your fresh milk and dairy products.');
    window.open(`https://wa.me/923001234567?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Help bubble pill */}
      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-md border border-slate-200 text-xs font-bold text-slate-800 animate-bounce">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span>Need Milk Today? Chat with us!</span>
      </div>

      <button
        onClick={openChat}
        className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-green-400/40"
        aria-label="Direct WhatsApp Chat"
      >
        <MessageCircle className="w-7 h-7 fill-white text-green-600 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
}
