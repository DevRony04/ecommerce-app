import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

  const {products} = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0,10));
  }, [products])
  

  return (
    <div className='my-10'>
      <div className="py-8 text-3xl text-center">
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs text-gray-700 sm:text-sm md:text-base'>
        Check out our latest collection of products, carefully curated to meet your needs and preferences.
        </p>
      </div>
       {/* LRendering Products */}
       <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {
            latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
       </div>
    </div>
  )
}

export default LatestCollection
