import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';

function App() {
  // top-level UI state
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [page, setPage] = useState('catalog'); // could be 'catalog' or 'account' (stub)

  // Nav handler: switch "pages"
  function handleNav(route) {
    if (route === 'cart') setShowCart(true);
    else setPage(route);
  }

  return (
    <CartProvider>
      <div className="app" style={{ minHeight: "100vh", background:"var(--secondary)", display: "flex", flexDirection: "column" }}>
        <Navbar
          onNav={handleNav}
          onCartClick={() => setShowCart(true)}
        />

        <main style={{ flex: 1, background: "var(--secondary)", minHeight: 500 }}>
          {page === 'catalog' && (
            <>
              <HeroBanner onShopClick={() => {
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }} />
              <div className="container">
                <ProductGrid onProductClick={p => setModalProduct(p)} />
              </div>
              <ProductModal
                product={modalProduct}
                open={!!modalProduct}
                onClose={() => setModalProduct(null)}
              />
            </>
          )}

          {page === 'account' && (
            <div className="container" style={{marginTop: 130, minHeight:400, textAlign:'center'}}>
              <h2 style={{color:"var(--primary)",fontWeight:700,marginBottom:12}}>Account (Coming Soon)</h2>
              <div style={{color:"var(--primary)",opacity:0.9}}>User authentication and account management will arrive in a future update.</div>
              <button className="btn btn-large" style={{marginTop:28,background:"var(--accent)",color:"var(--primary)"}} onClick={()=>setPage('catalog')}>Back to Store</button>
            </div>
          )}
        </main>

        <Cart
          open={showCart}
          onClose={() => setShowCart(false)}
          onCheckout={() => { setShowCart(false); setShowCheckout(true); }}
        />

        <Checkout
          open={showCheckout}
          onClose={() => setShowCheckout(false)}
        />

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;