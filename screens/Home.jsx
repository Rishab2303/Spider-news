import React, { useEffect, useState } from 'react'
import Navbar from '../src/components/Navbar'
import { useParams } from 'react-router-dom'
import NewsContainer from '../src/components/NewsContainer'
import Subscribe from './Subscribe'



const Home = () => {
    const [country, setCountry] = useState("in")
    const { category } = useParams();
    const [isOpen, setisOpen] = useState(false)


    const filter = category ? `category=&${category}` : "";

    useEffect(() => {
        console.log(country)
    }, [country])
    return (
        <div className=' relative '>
            <Navbar setCountry={setCountry} setisOpen={setisOpen} isOpen={isOpen} />
            <NewsContainer filter={filter} country={country} />
            <Subscribe isOpen={isOpen} />

        </div>
    )
}

export default Home
