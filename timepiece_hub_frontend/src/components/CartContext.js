import React, { createContext, useState } from 'react';

export const CartContext = createContext();

// PUBLIC_INTERFACE
export function CartProvider({ children }) {
  /** A React Context provider for the shopping cart state. */
  const [cartItems, setCartItems] = useState([]);

  // PUBLIC_INTERFACE
  function addToCart(product) {
    setCartItems(prev => {
      const found = prev.find(item => item.id === product.id);
      if (found) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  // PUBLIC_INTERFACE
  function removeFromCart(productId) {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  }

  // PUBLIC_INTERFACE
  function updateCartQty(productId, quantity) {
    setCartItems(prev =>
      prev.map(item => item.id === productId ? { ...item, quantity } : item)
    );
  }

  // PUBLIC_INTERFACE
  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateCartQty,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}
