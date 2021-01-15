import React, { useState, useEffect} from 'react'

import Feed from '../components/Feed'

const { REACT_APP_API_KEY } = process.env

const Home = () => {

    const [articles, setArticles] = useState(null)

    const fetchHomeData = async () => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${REACT_APP_API_KEY}`)
        const data = await response.json()
        // Figure out how to filter data
        // Create a function to strip title or its source
        setArticles([...data.articles])
    }

    useEffect(() => {fetchHomeData()}, [])

    return (
        <div className="home">
            <div className="headline">{articles[0].title}</div>
        </div>
    )
}

export default Home