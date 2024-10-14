import React, { createContext, useState } from 'react'


export const CartContext = createContext(null);
export const ShoppingCartProvider = ({ children }) => {

  // const ShoppingCart = () => {
  //   const [cart, setCart] = useState([]);
  //   const [products, setProducts] = useState([
  //     { id: 1, name: 'Product 1', price: 10.99 },
  //     { id: 2, name: 'Product 2', price: 9.99 },
  //     { id: 3, name: 'Product 3', price: 12.99 },
  //   ]);

  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>  
  )
}
