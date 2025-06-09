import React, { useState } from 'react';
import { products } from '../data/products';

// PUBLIC_INTERFACE
function ProductGrid({ onProductClick }) {
  /** The grid displaying all watches, supports searching and filtering. */
  const [search, setSearch] = useState('');
  const [brand, setBrand] = useState('');
  const uniqueBrands = [...new Set(products.map(p => p.brand))];

  // Apply search and filter
  const displayed = products.filter(p =>
    (!brand || p.brand === brand) &&
    (p.name.toLowerCase().includes(search.toLowerCase()) ||
     p.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section style={{marginTop:24,marginBottom:32}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,marginBottom:18}}>
        <div style={{flex:1}}>
          <input
            type="text"
            placeholder="Search watches..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              padding: '8px 14px', border: '1px solid var(--border-color)',
              borderRadius: 5, fontSize: '1em', outline: 'none', background:"var(--secondary)"
            }}
          />
        </div>
        <div>
          <select value={brand} onChange={e => setBrand(e.target.value)}
            style={{
              padding: '8px', border: '1px solid var(--border-color)',
              borderRadius: 5, fontSize: '1em', background:"var(--secondary)"
            }}
          >
            <option value="">All Brands</option>
            {uniqueBrands.map(br =>
              <option key={br} value={br}>{br}</option>
            )}
          </select>
        </div>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 32, marginTop: 8
      }}>
        {displayed.map(product => (
          <div key={product.id} style={{
            background: "var(--card-bg)", borderRadius:8, boxShadow: "var(--shadow)", padding:20, textAlign: 'center', cursor:'pointer',transition:'box-shadow .15s'
          }} onClick={() => onProductClick(product)}>
            <div style={{height:160,display:'flex',alignItems:'center',justifyContent:'center'}}>
              <img src={product.image} alt={product.name} style={{maxWidth: '80%', maxHeight: '100%', borderRadius:5}} />
            </div>
            <div style={{fontWeight:700,fontSize:'1.1em',marginTop:16,color:"var(--primary)"}}>{product.name}</div>
            <div style={{color:"var(--accent)",fontWeight:500,margin:'5px 0'}}>${product.price.toLocaleString()}</div>
            <div style={{color:'var(--primary)',opacity:0.75,fontSize:'0.96em'}}>{product.brand}</div>
          </div>
        ))}
        {displayed.length === 0 &&
          <div style={{gridColumn:'1/-1',textAlign:'center',color:'var(--primary)',background:'var(--secondary)',padding:28,borderRadius:10}}>
            No watches found. Try another search or filter.
          </div>}
      </div>
    </section>
  );
}
export default ProductGrid;
