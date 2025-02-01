import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className="pt-10 text-2xl text-center border-t">
          <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className="flex flex-col justify-center gap-10 my-10 md:flex-row mb-28">
          <img className='w-full md:max-w-[430px]' src={assets.contact_img} alt="" />
          <div className="flex flex-col items-start justify-center gap-6">
            <p className='text-xl font-semibold text-gray-800'>Our Store</p>
            <p className='text-gray-700'>9400 S Normandie Ave #14 <br /> Los Angeles, CA, USA</p>
            <p className='text-gray-700'>Tel: (415) 555-0457 <br />Email: helloforever@gmail.com</p>
            <p className='text-xl font-semibold text-gray-800'>Careers at Forever</p>
            <p className='text-gray-700'>Learn more about our teams and job openings.</p>
            <button className='px-8 py-4 transition-all duration-500 border border-black text-md hover:bg-black hover:text-white'>Explore Jobs</button>
          </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
