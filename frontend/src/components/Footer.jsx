import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
         <div className="">
            <img src={assets.logo} className='w-32 mb-5' alt="" />
            <p className='w-full text-gray-700 md:w-2/3'>
            Welcome to our store! We offer a wide range of high-quality products to meet all your needs. Stay connected with us for the latest updates, exclusive offers, and special discounts. Thank you for choosing us!
            </p>
         </div>
         <div className="">
            <p className='mb-5 text-xl font-medium'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-700'>
               <li>Home</li>
               <li>About Us</li>
               <li>Delivery</li>
               <li>Privacy Policy</li>
            </ul>
         </div>
         <div className="">
            <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-700'>
               <li>+1-212-468-7650</li>
               <li>helloforever@gmail.com</li>
            </ul>
         </div>
      </div>
      <div className="">
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
