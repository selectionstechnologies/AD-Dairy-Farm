import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [deliveryNotes, setDeliveryNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 1000 || subtotal === 0 ? 0 : 150;
  const grandTotal = subtotal + deliveryFee;

  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;

    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }

    const itemsSummary = cart
      .map(
        (item, index) =>
          `${index + 1}. *${item.name}* (${item.volume})\n   Qty: ${item.quantity} x Rs. ${item.price} = Rs. ${item.quantity * item.price}`
      )
      .join('\n');

    const msg = `*🛒 NEW ORDER - AD DAIRY FARM*
---------------------------------------
👤 *Customer:* ${customerName || 'Customer'}
📞 *Phone:* ${customerPhone || 'Not provided'}
🏠 *Address:* ${customerAddress || 'Please confirm address'}
📝 *Special Instructions:* ${deliveryNotes || 'Morning Delivery'}

*📦 Order Items:*
${itemsSummary}
---------------------------------------
*Subtotal:* Rs. ${subtotal.toLocaleString()}
*Delivery Fee:* ${deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}`}
*Grand Total:* *Rs. ${grandTotal.toLocaleString()}*

Please confirm delivery slot and payment on arrival (Cash on Delivery / Online)!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/923001234567?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-dairy-cream-50">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-dairy-green-100 rounded-xl text-dairy-green-800">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-slate-900">Your Fresh Basket</h3>
                <p className="text-xs text-slate-500 font-medium">{cart.length} item(s) selected</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-dairy-cream-100 text-dairy-green-800 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8 opacity-40" />
                </div>
                <h4 className="font-serif font-bold text-base text-slate-800">Your basket is empty</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Explore our pure fresh milk, Bilona desi ghee, soft paneer, and farm butter to get started!
                </p>
                <button
                  onClick={onClose}
                  className="mt-3 px-5 py-2.5 rounded-xl bg-dairy-green-700 text-white font-bold text-xs"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl border border-slate-100 bg-white shadow-xs flex items-center gap-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                          {item.name}
                        </h4>
                        <span className="text-[11px] text-slate-500 block">{item.volume}</span>
                        <div className="text-xs font-black text-dairy-green-800 mt-1">
                          Rs. {item.price}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:bg-slate-200 text-slate-600"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 font-bold text-xs text-slate-900">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:bg-slate-200 text-slate-600"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery Information inputs */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-dairy-green-900">
                    Delivery & Customer Details
                  </h4>

                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-dairy-green-600"
                  />

                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp Number *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-dairy-green-600"
                  />

                  <textarea
                    rows={2}
                    placeholder="Complete Delivery Address & Sector / Colony *"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-dairy-green-600"
                  />

                  <input
                    type="text"
                    placeholder="Notes (e.g. Morning 7 AM delivery)"
                    value={deliveryNotes}
                    onChange={(e) => setDeliveryNotes(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-dairy-green-600"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer Billing & WhatsApp Order Button */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-slate-100 bg-dairy-cream-50 space-y-3">
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900 font-mono">Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-semibold text-slate-900">
                    {deliveryFee === 0 ? <span className="text-dairy-green-700 font-bold">FREE</span> : `Rs. ${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total Amount</span>
                  <span className="font-serif font-black text-dairy-green-900 text-lg font-mono">
                    Rs. {grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3.5 px-4 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white text-green-600" />
                <span>Place Order via WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Pay on Delivery (Cash / Bank Transfer on Arrival)
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
