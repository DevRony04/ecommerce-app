import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {

 
  const {productId} = useParams();
  const {products,currency,addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false)
  const [image,setImage] = useState('')
  const [size,setSize]=useState('')
  
  const fetchProductData = async () =>{
    
    products.map((item)=>{
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })

  }

  useEffect(()=>{
    fetchProductData();
  },[productId,products])

  return productData ? (
    <div className='pt-10 transition-opacity duration-500 ease-in border-t-2 opacity-100'>
    {/* Product Data */}
      <div className="flex flex-col gap-12 sm:gap-12 sm:flex-row">
      {/*...... Product Images....... */}
      <div className="flex flex-col-reverse flex-1 gap-3 sm:flex-row">
         <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
           {
            productData.image.map((item,index)=>(
              <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
            ))
           }
         </div>
         <div className="w-full sm:w-[80%]">
           <img className='w-full h-auto' src={image} alt="" />
         </div>
      </div>
      {/*.....Product Info..... */}
      <div className="flex-1">
         <h1 className='mt-2 text-2xl font-medium'>{productData.name}</h1>
         <div className="flex items-center gap-1 mt-2">
           <img src={assets.star_icon} alt="" className="w-3 5" />
           <img src={assets.star_icon} alt="" className="w-3 5" />
           <img src={assets.star_icon} alt="" className="w-3 5" />
           <img src={assets.star_icon} alt="" className="w-3 5" />
           <img src={assets.star_dull_icon} alt="" className="w-3 5" />
           <p className='pl-2'>(122)</p>
         </div>
         <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
         <p className='mt-5 text-gray-600 md:w-4/5'>{productData.description}</p>
         <div className="flex flex-col gap-4 my-8">
           <p>Select Size</p>
           <div className="flex gap-2">
              {productData.sizes.map((item,index)=>(
                 <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-200 ${item === size ? 'border-orange-600' : ''}`} key={index}>{item}</button>
              ))} 
           </div>
         </div>
         <button onClick={()=>addToCart(productData._id,size)} className='px-8 py-3 text-sm text-white bg-black active:bg-gray-700'>ADD TO CART</button>
         <hr className='mt-8 sm:w-4/5' />
         <div className="flex flex-col gap-1 mt-5 text-sm text-gray-600">
            <p>100% Original Product.</p>
            <p>Cash on Delivery is Available on this Product.</p>
            <p>Easy Return and Exchange policy within 7 days.</p>
         </div>
      </div>
    </div>

    {/*....Description & Review Section.... */}
    <div className="mt-20">
     <div className="flex">
      <b className='px-5 py-3 text-sm border'>Description</b>
      <p className='px-5 py-3 text-sm border'>Reviews (122)</p>
     </div>
     <div className="flex flex-col gap-4 px-6 py-6 text-sm text-gray-600 border">
       <p> This product is crafted with the highest quality materials to ensure durability and comfort. Perfect for any occasion, it combines style and functionality. Our customers love it for its unique design and excellent performance.</p>
       <p>Experience the best in quality and style with our exclusive range of products. Designed to meet your needs and preferences, each item is a testament to our commitment to excellence.</p>
     </div>
    </div>
      {/*....Display Related Products.... */}

      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
