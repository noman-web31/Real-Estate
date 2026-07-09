import React from 'react'
import { assets } from "../assets/assets"

const Navbar = () => {
  return (

    <div className='absolute top-0 left-0 w-full z-10'>

      <div className='container mx-auto flex justify-between items-center px-4 py-6 md:px-20 lg:px-32 bg-transparent'>

        <img src={assets.logo} alt="logo" />

        <ul className="hidden md:flex gap-7 text-white [&_li_a]:cursor-pointer [&_li_a]:hover:text-gray-400">
  <li><a href="#Header">Home</a></li>
  <li><a href="#About">About</a></li>
  <li><a href="#Projects">Projects</a></li>
  <li><a href="#Testimonials">Testimonials</a></li>
</ul>
        <button type="button" className="hidden bg-white md:block px-8 py-2 rounded-full">Signup</button>


      </div>

    </div>
  )
}

export default Navbar

