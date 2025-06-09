import React, { useContext } from 'react';
import { CartContext } from './CartContext';

// PUBLIC_INTERFACE
function ProductModal({ product, open, onClose }) {
  /** Detail modal for a selected product (watch). */
  const { addToCart } = useContext(CartContext);

  if (!open || !product) return null;

  return (
    <div style={{
      position: "fixed", left: 0, top: 0, width: "100vw", height: "100vh",
      background: "rgba(20,20,30,0.40)", zIndex: 2000,
      display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div style={{
        background: "var(--card-bg)", color: "var(--primary)", minWidth: 300, maxWidth: 400,
        borderRadius: 16, boxShadow: "var(--shadow)", padding: 32, position: "relative"
      }}>
        <button
          style={{
            position:'absolute',top:12,right:14,fontSize:"1.6em",background:'none',
            border:'none',cursor:'pointer',color:"var(--accent)"
          }}
          onClick={onClose}
          aria-label="Close product details"
        >&times;</button>
        <div style={{textAlign:'center'}}>
          <img src={product.image} alt={product.name} style={{maxWidth:'65%',margin:"0 auto",borderRadius:6,marginBottom:12}}/>
        </div>
        <h2 style={{margin:'0 0 6px 0',fontWeight:700}}>{product.name}</h2>
        <div style={{marginBottom:4}}><span style={{color:"var(--primary)",fontWeight:600}}>{product.brand}</span></div>
        <div style={{marginBottom:6,color:'var(--accent)',fontWeight:600,fontSize:'1.2em'}}>${product.price.toLocaleString()}</div>
        <p style={{color:"var(--primary)",opacity:0.88,fontSize:'1em',marginBottom:10}}>{product.description}</p>
        <ul style={{listStyle:'disc',paddingLeft:18,marginBottom:14,fontSize:'0.98em'}}>
          {product.features && product.features.map((feat,i) => <li key={i}>{feat}</li>)}
        </ul>
        <button className="btn btn-large"
          style={{
            width:"100%",background:"var(--accent)",color:"var(--primary)",fontWeight:700,marginTop:10,marginBottom:5
          }}
          onClick={() => { addToCart(product); onClose(); }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default ProductModal;
