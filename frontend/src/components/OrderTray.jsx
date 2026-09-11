import React, { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, Send } from 'lucide-react';

export const OrderTray = ({ tray, onUpdateQty, onRemoveItem, onClearTray }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [orderType, setOrderType] = useState('Takeaway');
  const [notes, setNotes] = useState('');
  const [customerName, setCustomerName] = useState('');

  const totalCount = tray.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = tray.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const handleWhatsAppOrder = () => {
    if (tray.length === 0) return;

    let message = `🥟 *NEW ORDER - CHAW MOMOS CAFÉ*\n`;
    message += `*Himalayan Taste • Punjabi Tadka*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    if (customerName.trim()) {
      message += `👤 *Customer Name:* ${customerName.trim()}\n`;
    }
    message += `📍 *Order Type:* ${orderType}\n\n`;
    message += `📋 *Items Ordered:*\n`;

    tray.forEach((item, index) => {
      const variantText = item.variant ? ` [${item.variant}]` : '';
      const vegDot = item.isVeg ? '🟢 Veg' : '🔴 Non-Veg';
      message += `${index + 1}. ${item.qty}x ${item.name}${variantText} (${vegDot}) - ₹${item.price * item.qty}\n`;
    });

    message += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `🧾 *Total Items:* ${totalCount}\n`;
    message += `💰 *Grand Total:* ₹${totalPrice}\n`;

    if (notes.trim()) {
      message += `📝 *Special Request:* ${notes.trim()}\n`;
    }

    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `_Sent from Chaw Momos Official Website_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919780524008&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating Tray Button */}
      {totalCount > 0 && (
        <button
          onClick={() => setIsOpen(true)}
          className="cm-tray-floating-btn"
          aria-label="View Order Tray"
        >
          <div className="cm-tray-icon-wrap">
            <ShoppingBag size={20} />
            <span className="cm-tray-badge">{totalCount}</span>
          </div>
          <div className="cm-tray-btn-text">
            <div className="cm-tray-btn-label">Your Order Tray</div>
            <div className="cm-tray-btn-price">₹{totalPrice}</div>
          </div>
        </button>
      )}

      {/* Slide-over Drawer & Backdrop */}
      {isOpen && (
        <>
          <div
            className="cm-tray-backdrop"
            onClick={() => setIsOpen(false)}
          />
          <aside className="cm-tray-drawer" role="dialog" aria-modal="true">
            {/* Drawer Header */}
            <div className="cm-tray-header">
              <div className="cm-tray-header-left">
                <div className="cm-tray-header-icon">
                  <ShoppingBag size={22} />
                </div>
                <div>
                  <h3 className="cm-tray-header-title">Your Order Tray</h3>
                  <p className="cm-tray-header-sub">
                    {totalCount} item{totalCount !== 1 ? 's' : ''} selected • ₹{totalPrice}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="cm-tray-close-btn"
                aria-label="Close Tray"
              >
                <X size={20} />
              </button>
            </div>

            {/* Tray Items Body */}
            <div className="cm-tray-body">
              {tray.length === 0 ? (
                <div className="cm-tray-empty">
                  <ShoppingBag size={48} className="cm-tray-empty-icon" />
                  <h4>Your tray is empty</h4>
                  <p>Browse our menu and click "+ Add to Tray" or select rates from the list to start your order.</p>
                </div>
              ) : (
                <>
                  <div className="cm-tray-items-list">
                    {tray.map((item) => (
                      <div key={item.trayId || item.id} className="cm-tray-item-row">
                        <div className="cm-tray-item-info">
                          <span
                            className={`cm-diet-dot ${item.isVeg ? 'veg' : 'non-veg'}`}
                            title={item.isVeg ? 'Veg' : 'Non-Veg'}
                          />
                          <div>
                            <h4 className="cm-tray-item-name">{item.name}</h4>
                            {item.variant && (
                              <span className="cm-tray-item-variant">
                                Variant: <strong>{item.variant}</strong>
                              </span>
                            )}
                            <div className="cm-tray-item-unit-price">₹{item.price} each</div>
                          </div>
                        </div>

                        {/* Quantity Stepper */}
                        <div className="cm-tray-qty-ctrls">
                          <button
                            onClick={() => onUpdateQty(item.trayId || item.id, -1)}
                            className="cm-tray-qty-btn"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="cm-tray-qty-num">{item.qty}</span>
                          <button
                            onClick={() => onUpdateQty(item.trayId || item.id, 1)}
                            className="cm-tray-qty-btn"
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} />
                          </button>
                        </div>

                        {/* Row Price & Remove */}
                        <div className="cm-tray-item-cost">
                          <div className="cm-tray-row-total">₹{item.price * item.qty}</div>
                          <button
                            onClick={() => onRemoveItem(item.trayId || item.id)}
                            className="cm-tray-remove-link"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Options */}
                  <div className="cm-tray-options">
                    {/* Dine-in or Takeaway */}
                    <div className="cm-tray-field">
                      <label className="cm-tray-field-label">Order Type:</label>
                      <div className="cm-tray-type-toggle">
                        {['Takeaway', 'Dine-In'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setOrderType(type)}
                            className={`cm-tray-type-btn ${orderType === type ? 'active' : ''}`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Customer Name */}
                    <div className="cm-tray-field">
                      <label className="cm-tray-field-label">Your Name (Optional):</label>
                      <input
                        type="text"
                        placeholder="e.g. Aman Sharma"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="cm-tray-input"
                      />
                    </div>

                    {/* Cooking Notes */}
                    <div className="cm-tray-field">
                      <label className="cm-tray-field-label">Special Cooking Request:</label>
                      <textarea
                        rows="2"
                        placeholder="e.g., Extra spicy red chutney, less ice in mojito, pack separately..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="cm-tray-input"
                        style={{ resize: 'none' }}
                      />
                    </div>

                    <button
                      onClick={onClearTray}
                      className="cm-tray-clear-btn"
                    >
                      <Trash2 size={13} /> Clear Entire Tray
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Tray Drawer Footer */}
            {tray.length > 0 && (
              <div className="cm-tray-footer">
                <div className="cm-tray-total-row">
                  <span className="cm-tray-total-label">Grand Total Amount:</span>
                  <span className="cm-tray-total-val">₹{totalPrice}</span>
                </div>

                <button
                  onClick={handleWhatsAppOrder}
                  className="cm-tray-whatsapp-btn"
                >
                  <Send size={16} /> Send Order on WhatsApp
                </button>

                <p className="cm-tray-footer-note">
                  Direct dispatch to Chaow Momo, Chandigarh outlet.
                </p>
              </div>
            )}
          </aside>
        </>
      )}
    </>
  );
};
