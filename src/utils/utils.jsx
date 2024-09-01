//utility function for making a fetch request
export const FetchNews = async (filter) => {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?${filter}&apiKey=bdff4859e46b44e5b67303dedc3b5b57`)
        const data = await response.json()
        console.log(data)
        let news = data.articles
        return news

    } catch (error) {
        console.log(error)
    }

}
// utility function for maping the data

export const MapData = (data) => {
    return data.map((news) =>
    (<div className="p-2 flex flex-col newsDiv " style={{ width: '25%', gap: '1rem' }} key={news.url}>
        <div className="w-full ">{news.urlToImage === null ? <img className=" bg-cover m-auto" src="./news_alt_img.png" alt="" /> : <img src={news.urlToImage} alt="" className="src" />}</div>
        <div className="w-full text-wrap font-bold">{`${news.title.slice(0, 70)}.....`}</div>
        <div className="newsAnchor"><a href={news.url} target="_blank">Read More</a></div>
    </div>)
    )
}



export default { FetchNews, MapData }