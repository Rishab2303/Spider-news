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

      <div className='w-[80%] m-auto p-2  border-b-2 border-gray-200 '>


        <div className='flex items-center justify-between'>
          <CountryFilter setCountry={setCountry} />
          <Link to="/">
            <div className='flex justify-center'>
              <div className='w-16 h-16 mr-2'>
                <img src="/spider1.jfif" alt="" className="src" />
              </div>
              <div className=' flex justify-between'>
                <div className='flex flex-col justify-center items-center'>
                  <div><span className='the-news-style text-3xl'>The News</span> <span className='font-bold text-4xl'>SPIDER</span></div>
                  <span className='text-sm'>JOURNALISM OF COURAGE</span>
                </div>
              </div>
            </div>
          </Link>
          <div className='flex flex-col items-center gap-2'>
            <button className='bg-black text-white px-3 py-1 border border-white outline outline-offset-1 outline-red-500  rounded-md ' onClick={handleLoginClick}>Subscribe</button>
            <CurrentDate />
          </div>

        </div>

      </div>

      <Categories />
    </div>
  )
}

export default Navbar
