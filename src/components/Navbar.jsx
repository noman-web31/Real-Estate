import React, { useEffect, useState } from 'react'
import { assets } from "../assets/assets"

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(()=>{
    if(showMobileMenu){
        document.body.style.overflow = 'hidden';
    }else{
       document.body.style.overflow = 'auto';
    }
    return()=> {
       document.body.style.overflow = 'auto';
    }
  },[showMobileMenu])

  return (

    <div className='absolute top-0 left-0 w-full z-10'>

      <div className='container mx-auto flex justify-between items-center px-4 py-6 md:px-20 lg:px-32 bg-transparent'>

        <img src={assets.logo} alt="logo" className='w-fit' />

        <ul className="hidden md:flex gap-7 text-white [&_li_a]:cursor-pointer [&_li_a]:hover:text-gray-400">
          <li><a href="#Header">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Testimonials">Testimonials</a></li>
        </ul>
        <button type="button" className="hidden curdor-pointer bg-white md:block px-8 py-2 rounded-full">Signup</button>
       
       <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer w-fit' alt="" />

      </div>

      {/* ---------- Mobile-Menu ---------- */}

      <div className={`md:hidden ${showMobileMenu ? `fixed w-full` : 'h-0 w-0'} fixed w-full right-0 top-0  bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon} alt="" className='w-6'/>
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
        <a href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
        <a href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
        <a href="#Projects" className='px-4 py-2 rounded-full inline-block'>projects</a>
        <a href="#Testimonials" className='px-2 py-4 rounded-full inline-block'>Testimonials</a>
      </ul>
      </div>

    </div>
  )
}

export default Navbar

