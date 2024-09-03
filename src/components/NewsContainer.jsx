import React, { useCallback, useEffect, useState } from 'react'

import './NewsContainer.css'

import { MapData } from '../utils/utils'
import { useParams } from 'react-router-dom'

const NewsContainer = ({ country }) => {

    const [newsData, setNewsData] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const { category } = useParams();
    console.log("string=", category)

    useEffect(() => {
        setNewsData([]);
        resetPage()
        FetchNews(category)
    }
        , [category, country])
    // console.log(newsData)
    // function to news data        
    const FetchNews = useCallback(async (category, page = 1) => {

        try {
            const url = new URL("https://newsapi.org/v2/top-headlines")
            const query = category ? { country, category } : { country }
            url.search = new URLSearchParams({ ...query, page, apiKey: "0ceeaf763e5e4d169689f8339df8606f" }).toString()

            console.log(url)
            const response = await fetch(url)
            const data = await response.json()


            let news = Array.isArray(data.articles) ? data.articles : [];

            console.log(news)
            setNewsData((prev) => [...prev, ...news])
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }, [category, page, country])

    useEffect(() => {
        console.log("adjfgsdhf", page)


    }, [page])

    const resetPage = () => {
        setPage(1)

    }

    const incrementPage = () => {

        setPage((prev) => {
            const nextpage = prev + 1

            FetchNews(category, nextpage)
            return nextpage
        })
        console.log("aja bhai", page)

    }
    const handleScrollEvent = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setLoading(true)

                incrementPage()

                console.log("pg=", page)
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", handleScrollEvent)
        return () => { window.removeEventListener("scroll", handleScrollEvent) }
    }, [handleScrollEvent])


    return (

        <div className='w-full md:w-[80%] mx-auto container '>
            {loading && newsData.length === 0 ? <p>Loading Your News....</p> : <div className='news-strip'><div className='news-content'>{newsData[0].title}||{newsData[1].title}||{newsData[2].title}</div></div>}
            {loading && newsData.length === 0 ? <p>Loading Your News....</p> : MapData(newsData)}
            {loading && newsData.length > 0 && <p>Loading more news...</p>}

        </div>
    )
}

export default NewsContainer
