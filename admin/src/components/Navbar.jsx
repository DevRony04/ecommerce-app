import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
      <button onClick={()=>setToken('')} className='px-5 py-2 text-white rounded-full text-md bg-slate-700 sm:px-7 sm:py-2 sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
