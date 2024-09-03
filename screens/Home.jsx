import React, { useEffect, useState } from 'react'
import Navbar from '../src/components/Navbar'
import { useParams } from 'react-router-dom'
import NewsContainer from '../src/components/NewsContainer'
import Subscribe from './Subscribe'
import Footer from '../src/components/Footer'



const Home = () => {
    const [country, setCountry] = useState("in")
    const { category } = useParams();
    const [isOpen, setisOpen] = useState(false)




    useEffect(() => {
        console.log(country)
    }, [country])
    return (
        <div className=' relative bg-black'>
            <Navbar setCountry={setCountry} setisOpen={setisOpen} isOpen={isOpen} />
            <NewsContainer category={category} country={country} />
            <Subscribe isOpen={isOpen} setisOpen={setisOpen} />
            <Footer />


        </div>
    )
}

export default Home
