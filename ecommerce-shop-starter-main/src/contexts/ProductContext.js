import React, {createContext, useState, useEffect} from 'react';

export const ProductContext = createContext();

const ProductProvider =({children}) =>{
  const [products,serProducts] = useState([]);
  useEffect(()=>{
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      serProducts(data);
    };
    fetchProducts();
  }, [])
  return <ProductContext.Provider value={{products}}> {children}</ProductContext.Provider>;
}

export default ProductProvider;