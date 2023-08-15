import React, {createContext, useState, useEffect} from 'react'

export const ProductContext = createContext();

const ProductProvider =({children}) => {
    // products state
    const [products, setProducts] = useState([]);

    // fetch products
    useEffect(()=> {
      const fetchProducts = async ()=> {
        const response = await fetch();
      }
    })
  return <ProductContext.Provider>
    {children}
  </ProductContext.Provider>
}


export default ProductContext