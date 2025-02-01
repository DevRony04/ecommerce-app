import React from 'react'

const NewsletterBox = () => {

 const onSubmitHandler = (event) =>{
  event.preventDefault()
 }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subcribe Now & Get 20% OFF</p>
      <p className='mt-3 text-gray-600'>
      Join our newsletter to stay updated with our latest products, exclusive offers, and special discounts.
      </p>
      <form onSubmit={onSubmitHandler} className='flex items-center w-full gap-3 pl-3 mx-auto my-6 border sm:w-1/2'>
        <input className='w-full outline-none sm:flex-1' type="email" placeholder='Enter Your Email' required />
        <button type='submit' className='px-10 py-4 text-xs text-white bg-black'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
