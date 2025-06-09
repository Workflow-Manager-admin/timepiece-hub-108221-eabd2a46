import React from 'react';

// PUBLIC_INTERFACE
function Footer() {
  /** Sticky footer with contact information and social links. */
  return (
    <footer style={{
      background: "var(--footer-bg)",
      color: "var(--secondary)",
      padding: "32px 0 20px 0",
      marginTop: 'auto'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', fontSize: '1em' }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.05em', marginBottom: 7 }}>
            Timepiece Hub - Modern Watch Boutique
          </div>
          <div style={{ opacity: 0.72 }}>Contact: <a href="mailto:info@timepiecehub.com" style={{ color: "var(--accent)", textDecoration: "none",marginLeft:2 }}>info@timepiecehub.com</a></div>
        </div>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center', marginTop: 12 }}>
          <a href="https://instagram.com/" style={{ color: "var(--accent)", fontSize: "1.5em" }} target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="Insta">📸</span>
          </a>
          <a href="https://x.com/" style={{ color: "var(--accent)", fontSize: "1.5em" }} target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="Twitter">🐦</span>
          </a>
          <a href="https://facebook.com/" style={{ color: "var(--accent)", fontSize: "1.5em" }} target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="FB">👍</span>
          </a>
        </div>
      </div>
      <div style={{ marginTop: 18, opacity: 0.4, fontSize: '0.98em', textAlign:'center' }}>
        &copy; {new Date().getFullYear()} Timepiece Hub. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
