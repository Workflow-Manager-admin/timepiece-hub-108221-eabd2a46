import React from 'react';

// PUBLIC_INTERFACE
function HeroBanner({ onShopClick }) {
  /** This hero banner sits at the top of homepage with a featured watch and CTA. */
  return (
    <section className="hero" style={{
      paddingTop: 120, paddingBottom: 64, textAlign: 'center', background: "var(--secondary)"
    }}>
      <div className="subtitle" style={{ color:"var(--accent)",fontWeight:600,fontSize:"1.2em",marginBottom:12 }}>
        Discover Timeless Elegance
      </div>
      <h1 className="title" style={{color:"var(--primary)"}}>The Art of Watchmaking</h1>
      <div className="description" style={{
        color: "var(--primary)", maxWidth: 600, margin: "auto", fontSize: "1.1em"
      }}>
        Curated luxury, iconic brands, and innovative timepieces. Find your next statement watch in our premiere selection.
      </div>
      <button className="btn btn-large" style={{
        background: "var(--accent)",
        color: "var(--primary)",
        fontWeight: 700,
        marginTop: 24
      }} onClick={onShopClick}>
        Shop Catalog
      </button>
    </section>
  );
}
export default HeroBanner;
