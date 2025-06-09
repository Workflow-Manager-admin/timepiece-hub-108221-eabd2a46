import React, { useContext } from 'react';
import { CartContext } from './CartContext';

// PUBLIC_INTERFACE
function Navbar({ onNav, onCartClick }) {
  /** This is a public navigation bar for the Timepiece Hub.
   *  @param {function} onNav - callback for navigating between catalog/account (account is a stub)
   *  @param {function} onCartClick - callback for opening cart/checkout modal
   */
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar" style={{ background: "var(--navbar-bg)" }}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:64}}>
        <div className="logo" style={{ cursor: 'pointer', fontWeight:700, fontSize:'1.4rem', letterSpacing:'1px', color:"var(--accent)" }} onClick={() => onNav('catalog')}>
          <span role="img" aria-label="watch" style={{fontSize:'1.6em'}}>⌚</span> Timepiece Hub
        </div>
        <ul style={{listStyle:'none',display:'flex',gap:24,margin:0,padding:0,alignItems:'center'}}>
          <li>
            <button className="btn" style={{background:'none',color:'var(--secondary)',padding:0}} onClick={()=>onNav('catalog')}>
              Catalog
            </button>
          </li>
          <li>
            <button className="btn" style={{background:'none',color:'var(--secondary)',padding:0}} onClick={onCartClick}>
              Cart
              {cartItems.length > 0 && (
                <span style={{
                  background: "var(--accent)",
                  color: "var(--primary)",
                  marginLeft: 6,
                  fontWeight: "bold",
                  padding: '0.1em 0.5em',
                  borderRadius: '12px',
                  fontSize: '0.95em',
                  boxShadow: '0 0 2px #e0e0e0'
                }}>{cartItems.length}</span>
              )}
            </button>
          </li>
          <li>
            <button className="btn" style={{background:'none',color:'var(--secondary)',padding:0}} onClick={()=>onNav('account')}>
              Account
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
