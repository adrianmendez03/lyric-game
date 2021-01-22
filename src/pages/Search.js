import React, { useState, useEffect } from 'react'

import Feed from '../components/Feed'

const { REACT_APP_API_KEY } = process.env

const Search = props => {

    const [articles, setArticles] = useState(null)
    const { term } = props.match.params

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${term}&apiKey=${REACT_APP_API_KEY}`)
            const data = await response.json()
            setArticles([...data.articles])
        }
        fetchArticles()
    }, [term])
    
    const loading = () => <h2>Fetching Articles...</h2>
    const loaded = () => {
        return (
            <>
                <div className="page-title">
                    <h4>Results for</h4>
                    <h2>{term}</h2>
                    <div></div>
                </div>
                <Feed articles={articles} />
            </>
        )
    }

    return (
        <div id="search" className="main">
            { articles ? loaded() : loading() }
        </div>
    )
}

export default Search