import React, { useState, useEffect} from 'react'

import Feed from '../components/Feed'

const { REACT_APP_API_KEY } = process.env

const Home = () => {

    const [articles, setArticles] = useState(null)



    useEffect(() => {
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
                if (response[i].author === null ||response[i].image === null) {
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
        fetchHomeArticles()
    }, [])

    const loading = () => <h2>Fetching Articles...</h2>

    const loaded = () => {
        return (
            <>
                <div className="headline">
                    <a 
                        target="_blank" 
                        rel="noreferrer" 
                        href={articles[0].urlToImage} 
                        className="title"
                    >
                        {articles[0].title}
                    </a>
                    <a
                        target="_blank" 
                        rel="noreferrer" 
                        href={articles[0].url} 
                    >
                        <img src={articles[0].image} alt={articles[0].title}/>
                    </a>
                    <a 
                        target="_blank" 
                        rel="noreferrer" 
                        href={articles[0].url} 
                        className="description"
                    >
                        {articles[0].description}
                    </a>
                </div>
                <Feed articles={articles}/>
            </>
        )
    }

    return (
        <div className="home">
            { articles ? loaded() : loading()}
        </div>
    )
}

export default Home