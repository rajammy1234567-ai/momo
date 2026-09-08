import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Plus, Minus, Trash2, Send, Coffee, Check } from 'lucide-react';

export const OrderTray = ({ tray, onUpdateQty, onRemoveItem, onClearTray }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [orderType, setOrderType] = useState('Takeaway');
  const [notes, setNotes] = useState('');
  const [customerName, setCustomerName] = useState('');

  const totalCount = tray.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = tray.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const handleWhatsAppOrder = () => {
    if (tray.length === 0) return;

    let message = `🥟 *NEW ORDER - CHAOW MOMO CAFÉ*\n`;
    message += `*Himalayan Taste • Punjabi Tadka*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    if (customerName.trim()) {
      message += `👤 *Customer Name:* ${customerName.trim()}\n`;
    }
    message += `📍 *Order Type:* ${orderType}\n\n`;
    message += `📋 *Items Ordered:*\n`;

    tray.forEach((item, index) => {
      message += `${index + 1}. ${item.qty}x ${item.name} (${item.isVeg ? '🟢 Veg' : '🔴 Non-Veg'}) - ₹${item.price * item.qty}\n`;
    });

    message += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `🧾 *Total Items:* ${totalCount}\n`;
    message += `💰 *Total Amount:* ₹${totalPrice}\n`;

    if (notes.trim()) {
      message += `📝 *Special Request:* ${notes.trim()}\n`;
    }

    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `_Sent from Chaow Momo Official Website_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919780524008&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating Tray Button */}
      <AnimatePresence>
        {totalCount > 0 && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-primary-red text-white px-5 py-3.5 rounded-full shadow-[0_10px_30px_rgba(252,117,102,0.6)] border-2 border-white hover:scale-105 transition-all cursor-pointer"
            aria-label="View Order Tray"
          >
            <div className="relative">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                {totalCount}
              </span>
            </div>
            <div className="text-left font-bold text-sm">
              <div className="text-xs uppercase tracking-wider text-yellow-200">Your Tray</div>
              <div>₹{totalPrice}</div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Slide-over Tray Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute inset-y-0 right-0 max-w-full flex pl-10"
            >
              <div className="w-screen max-w-md bg-white text-gray-800 shadow-2xl flex flex-col">
                {/* Header */}
                <div className="p-6 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-xl">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black tracking-tight leading-tight">Your Order Tray</h3>
                      <p className="text-xs text-yellow-100 font-medium">{totalCount} item{totalCount !== 1 ? 's' : ''} selected</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {tray.length === 0 ? (
                    <div className="text-center py-12 text-gray-400">
                      <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-30" />
                      <p className="font-bold text-lg text-gray-500">Your tray is empty</p>
                      <p className="text-sm">Explore our 75+ item menu and tap "Add to Tray" to start your order.</p>
                    </div>
                  ) : (
                    tray.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between gap-3 p-3.5 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:border-orange-200 transition-all"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <span className={`w-3 h-3 rounded-full flex-shrink-0 ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} title={item.isVeg ? 'Veg' : 'Non-Veg'} />
                          <div className="min-w-0">
                            <h4 className="font-bold text-sm text-gray-900 truncate">{item.name}</h4>
                            <p className="text-xs text-gray-500">₹{item.price} each</p>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl border border-gray-200 shadow-inner">
                          <button
                            onClick={() => onUpdateQty(item.id, -1)}
                            className="p-1 text-gray-600 hover:text-red-500 cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-bold text-sm min-w-[20px] text-center">{item.qty}</span>
                          <button
                            onClick={() => onUpdateQty(item.id, 1)}
                            className="p-1 text-gray-600 hover:text-green-600 cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-right min-w-[65px]">
                          <div className="font-black text-sm text-gray-900">₹{item.price * item.qty}</div>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-[10px] text-red-400 hover:text-red-600 font-medium cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))
                  )}

                  {tray.length > 0 && (
                    <div className="pt-2 space-y-4">
                      {/* Order Type Toggle */}
                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Order For:</label>
                        <div className="grid grid-cols-2 gap-2 bg-gray-100 p-1 rounded-xl">
                          {['Takeaway', 'Dine-In'].map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setOrderType(type)}
                              className={`py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                                orderType === type ? 'bg-white text-primary-red shadow-sm' : 'text-gray-500 hover:text-gray-800'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Name input */}
                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Your Name (Optional)</label>
                        <input
                          type="text"
                          placeholder="e.g. Aman Sharma"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="w-full text-xs p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500"
                        />
                      </div>

                      {/* Special Notes */}
                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Special Cooking Request</label>
                        <textarea
                          rows="2"
                          placeholder="e.g., Extra spicy chutney, less ice in mojito, pack separately..."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full text-xs p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 resize-none"
                        ></textarea>
                      </div>

                      <button
                        onClick={onClearTray}
                        className="text-xs text-gray-400 hover:text-red-500 flex items-center gap-1 cursor-pointer pt-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Clear Tray
                      </button>
                    </div>
                  )}
                </div>

                {/* Footer */}
                {tray.length > 0 && (
                  <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
                    <div className="flex items-center justify-between text-base">
                      <span className="text-gray-600 font-medium">Estimated Subtotal:</span>
                      <span className="text-2xl font-black text-gray-900">₹{totalPrice}</span>
                    </div>

                    <button
                      onClick={handleWhatsAppOrder}
                      className="w-full py-4 px-6 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-green-600/30 hover:brightness-105 active:scale-98 transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Order via WhatsApp
                    </button>

                    <p className="text-[11px] text-center text-gray-400">
                      Orders sent directly to Chaow Momo at Motia'z Royal Business Park, Zirakpur (+91 9780524008).
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
