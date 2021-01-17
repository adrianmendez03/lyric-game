import React, { useState, useEffect} from 'react'

import Feed from '../components/Feed'

const { REACT_APP_API_KEY } = process.env

const Home = () => {

    const [articles, setArticles] = useState(null)

    const formatTitle = (title) => {
        for (let i = title.length - 1; i > 0; i--) {
            if (title[i] === "-") {
                title = title.slice(0, i - 1)
                break
            }
        }
        return title
    }

    const filterArticles = (response) => {
        for (let i = 0; i < response.length; i++) {
            if (response[i].author === null) {
                response.splice(i, 1)
            }
            response[i].title = formatTitle(response[i].title)
        }
        return response
    }

    const fetchHomeArticles = async () => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${REACT_APP_API_KEY}`)
        const data = await response.json()
        const filteredArticles = filterArticles(data.articles)
        setArticles([...filteredArticles])
    }

    useEffect(() => {fetchHomeArticles()}, [])

    return (
        <div className="home">
            Article 1 
        </div>
    )
}

export default Home