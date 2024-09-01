import React, { useEffect, useState } from 'react'
import './NewsContainer.css'

import { MapData } from '../utils/utils'

const NewsContainer = ({ filter, country = "in" }) => {

    const [newsData, setNewsData] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(() => {
        setNewsData([]);
        setPage(1)
    }
        , [filter])
    useEffect(() => {
        const FetchNews = async (filter) => {
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&${filter}&page=${page}&apiKey=05aa439981424fd3a10200af4c713692`)
                const data = await response.json()
                let news = data.articles
                // console.log(news)
                setNewsData((prev) => [...prev, ...news])
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false);
            }
        }
        FetchNews(filter)
    }, [filter, page])

    const handleScrollEvent = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setLoading(true)
                setPage((prev) => prev + 1)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollEvent)
        return () => { window.removeEventListener("scroll", handleScrollEvent) }
    }, [])


    return (
        <div className='w-[80%] mx-auto container'>
            {loading && newsData.length === 0 ? <p>Loading Your News....</p> : MapData(newsData)}
            {loading && newsData.length > 0 && <p>Loading more news...</p>}
        </div>
    )
}

export default NewsContainer
