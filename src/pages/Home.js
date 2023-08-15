import React, {useContext} from 'react';
// import product context
import {ProductContext} from '../contexts/ProductContext'

const Home = () => {

  const {products} = useContext(ProductContext);
  console.log(products);

  // filter product 

  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing"
  });
  return <div>
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {filteredProducts.map(product => {
            return <div className='w-full h-[300px] bg-pink-200 mb-4'>{product.title} </div>
          })}
        </div>
      </div>
    </section>
  </div>
}

export default Home