import React, { useEffect } from 'react'
import Navbar from '../src/components/Navbar'
import { useParams } from 'react-router-dom'
import NewsContainer from '../src/components/NewsContainer'



const Home = () => {
    const { category } = useParams();
    const filter = category ? `category=${category}` : "country=in";
    return (
        <div>
            <Navbar />
            <NewsContainer filter={filter} />

        </div>
    )
}

export default Home
