import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="pt-8 text-2xl text-center border-t">
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="flex flex-col gap-16 my-10 md:flex-row">
        <img className='w-full md:max-w-[400px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 text-center text-gray-700 md:w-2/4">
           <p>  Welcome to our store! We are dedicated to providing you with the best shopping experience possible. Our team works tirelessly to curate a selection of high-quality products that meet your needs and preferences.</p>
           <p> Our mission is to offer exceptional value and service to our customers. We believe in building lasting relationships and strive to exceed your expectations with every purchase. Thank you for choosing us!</p>
           <b className='text-lg text-gray-900'>Our Mission :-</b>
           <p>  We aim to inspire and empower our customers by offering products that enhance their lifestyle. Our commitment to quality and customer satisfaction drives us to continuously improve and innovate.</p>
        </div>
      </div>
      <div className="py-4 text-2xl">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col mb-20 text-sm md:flex-row">
        <div className="flex flex-col gap-5 px-10 py-8 transition-all duration-100 border md:px-16 sm:py-20 hover:bg-slate-100">
          <b className='text-lg'>Quality Assurance:-</b>
          <p className='text-gray-700 text-md'>Our team works tirelessly to curate a selection of high-quality products that meet your needs and preferences.</p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 transition-all duration-100 border md:px-16 sm:py-20 hover:bg-slate-100">
          <b className='text-lg'>Convenience:-</b>
          <p className='text-gray-700 text-md'>We aim to inspire and empower our customers by offering products that enhance their lifestyle. Our commitment to quality and customer satisfaction drives us to continuously improve and innovate.</p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 transition-all duration-100 border md:px-16 sm:py-20 hover:bg-slate-100">
          <b className='text-lg'>Exceptional Customer Service:-</b>
          <p className='text-gray-700 text-md'> To be the leading ecommerce company in India with a team of highly skilled professionals, dedicated towards providing exceptional value and service to our customers.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
