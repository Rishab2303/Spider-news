import React, { useState } from 'react'
import CurrentDate from './Date'
import Categories from './Categories'
import CountryFilter from './countryFilter'

import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({ setCountry = { setCountry }, setisOpen = { setisOpen }, isOpen }) => {

  const handleLoginClick = () => {
    setisOpen(true)
    console.log(isOpen)

  }



  return (
    <div>

      <div className=' md:w-[80%] m-auto p-2 bg-white border-b-2 border-gray-200 '>


        <div className='flex items-center justify-center md:justify-between'>
          <CountryFilter setCountry={setCountry} />
          <Link to="/">
            <div className='nav-logo m-w-64  flex justify-center'>
              <div className=' w-12 md:w-16 h-16 mr-2'>
                <img src="/spider1.jfif" alt="" className="src" />
              </div>
              <div className=' flex justify-between'>
                <div className='flex flex-col justify-center items-center'>
                  <div><span className='the-news-style md:text-3xl'>The News</span> <span className='font-bold md:text-4xl'>SPIDER</span></div>
                  <span className='text-xs md:text-sm'>JOURNALISM OF COURAGE</span>
                </div>
              </div>
            </div>
          </Link>
          <div className=' hidden md:flex flex-col items-center gap-2'>
            <button className=' text-sm md:text-base bg-black text-white px-1 md:px-2 py-1 border border-white outline outline-offset-1 outline-red-500  rounded-md ' onClick={handleLoginClick}>Subscribe</button>
            <CurrentDate />
          </div>

        </div>

      </div>
      <div className='md:hidden w-full flex justify-between px-2 items-center bg-white border-b-2 border-gray-200  py-2 '>
        <CountryFilter setCountry={setCountry} hide='' />
        <div className=' bg-white md:flex flex-col justify-center items-center gap-4'>
          <button className=' text-sm md:text-base bg-black text-white px-1 md:px-2 py-1 border border-white outline outline-offset-1 outline-red-500  rounded-md ' onClick={handleLoginClick}>Subscribe</button>
          <CurrentDate />
        </div>



      </div>

      <Categories />
    </div>
  )
}

export default Navbar
