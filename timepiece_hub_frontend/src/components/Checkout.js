import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

// PUBLIC_INTERFACE
function Checkout({ open, onClose }) {
  /** Simple secure checkout modal/page (mock, for demo only). */
  const { cartItems, clearCart } = useContext(CartContext);
  const [complete, setComplete] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  if (!open) return null;

  function handlePlaceOrder(e) {
    e.preventDefault();
    setComplete(true);
    clearCart();
  }

  return (
    <div style={{
      position: "fixed", left: 0, top: 0, width: "100vw", height: "100vh",
      background: "rgba(26,26,26,0.20)", zIndex: 2100,
      display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div style={{
        background: "var(--card-bg)", color: "var(--primary)", minWidth: 300, maxWidth: 380,
        borderRadius: 16, boxShadow: "var(--shadow)", padding: 36, position: "relative", textAlign:'center'
      }}>
        <button
          style={{
            position:'absolute',top:12,right:14,fontSize:"1.6em",background:'none',
            border:'none',cursor:'pointer',color:"var(--accent)"
          }}
          onClick={onClose}
          aria-label="Close checkout"
        >&times;</button>
        {complete ? (
          <>
            <div style={{fontSize:'2em',margin:"22px 0",color:"var(--accent)"}}>&#x1f381;</div>
            <div style={{fontWeight:700,fontSize:'1.08em',marginBottom:22}}>Thank you!<br/>Your order has been received.</div>
            <button className="btn btn-large" style={{
              background:"var(--accent)",color:"var(--primary)",fontWeight:700
            }} onClick={onClose}>Close</button>
          </>
        ) : (
          <>
            <h2 style={{margin:'0 0 10px 0',fontWeight:700}}>Checkout</h2>
            <form onSubmit={handlePlaceOrder} style={{display:'flex',flexDirection:'column', gap:10}}>
              <input type="text" name="name" placeholder="Full Name" required style={{padding:8,borderRadius:4,fontSize:'1em',border:'1px solid var(--border-color)',background:'var(--secondary)'}} />
              <input type="text" name="address" placeholder="Address" required style={{padding:8,borderRadius:4,fontSize:'1em',border:'1px solid var(--border-color)',background:'var(--secondary)'}} />
              <input type="email" name="email" placeholder="Email" required style={{padding:8,borderRadius:4,fontSize:'1em',border:'1px solid var(--border-color)',background:'var(--secondary)'}} />
              <div style={{margin:"10px 0",fontWeight:600}}>Order Total: <span style={{color:"var(--accent)"}}>${subtotal.toLocaleString()}</span></div>
              <button className="btn btn-large" style={{
                width:"100%",background:"var(--accent)",color:"var(--primary)",fontWeight:700,marginTop:10
              }} type="submit">Place Order</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
export default Checkout;
