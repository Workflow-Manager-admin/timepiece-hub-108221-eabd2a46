import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

// PUBLIC_INTERFACE
function Cart({ open, onClose, onCheckout }) {
  /** Shopping cart modal: lists cart items, update/remove, proceed to checkout. */
  const { cartItems, removeFromCart, updateCartQty, clearCart } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  if (!open) return null;

  return (
    <div style={{
      position: "fixed", right: 0, top: 0, width: "100vw", height: "100vh",
      background: "rgba(20,20,30,0.32)", zIndex: 2050,
      display: "flex", alignItems: "flex-start", justifyContent: "flex-end"
    }}>
      <div style={{
        background: "var(--card-bg)", color: "var(--primary)", minWidth: 300, maxWidth: 420,
        borderRadius: "0 0 0 16px", boxShadow: "var(--shadow)", padding: 32, position: "relative", marginTop:48, height: "calc(100vh - 48px)", overflowY:'auto'
      }}>
        <button
          style={{
            position: 'absolute', top: 12, right: 14, fontSize: "1.6em", background: 'none',
            border: 'none', cursor: 'pointer', color: "var(--accent)"
          }}
          onClick={onClose}
          aria-label="Close cart"
        >&times;</button>
        <h2 style={{ margin: '0 0 10px 0', fontWeight: 700 }}>Your Cart</h2>
        {cartItems.length === 0 ?
          <div style={{ margin: "40px 0", color: 'var(--primary)' }}>
            Cart is empty.
          </div> :
          <div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {cartItems.map(item =>
                <li
                  key={item.id}
                  style={{
                    borderBottom: "1px solid var(--border-color)", display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 0'
                  }}>
                  <span style={{ fontWeight: 600 }}>{item.name}</span>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={e => updateCartQty(item.id, parseInt(e.target.value||'1'))}
                    style={{ width: 48, marginLeft: 8, marginRight: 8, background:"var(--secondary)",border:"1px solid var(--border-color)",borderRadius:4,fontSize:'1em',padding:'2px 8px' }}
                  />
                  <span>${(item.price * item.quantity).toLocaleString()}</span>
                  <button onClick={() => removeFromCart(item.id)}
                    style={{ background: 'none', border: 'none', color: 'var(--accent)', fontWeight: 700, marginLeft:8, fontSize:'1.12em', cursor:'pointer' }}>
                    Remove
                  </button>
                </li>
              )}
            </ul>
            <div style={{ marginTop: 18, textAlign: "right", fontWeight: 600, fontSize: "1.08em" }}>
              Subtotal: <span style={{ color: "var(--accent)", marginLeft: 7 }}>${subtotal.toLocaleString()}</span>
            </div>
            <button className="btn btn-large" style={{
              width: "100%",
              background:"var(--accent)", color:"var(--primary)",fontWeight:700,marginTop:28
            }} onClick={onCheckout}>
              Checkout
            </button>
            <button className="btn"
              style={{
                width: "100%",
                color: "var(--secondary)", background: "#882e2e", fontWeight: 500, marginTop: 12
              }}
              onClick={clearCart}>Clear Cart
            </button>
          </div>
        }
      </div>
    </div>
  );
}
export default Cart;
