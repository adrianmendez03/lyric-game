import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Feed from '../components/Feed'

const { REACT_APP_API_KEY } = process.env

const Source = props => {

    const [articles, setArticles] = useState(null)

    useEffect(() => {
        const fetchSource = async () => {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${props.match.params.source}&apiKey=${REACT_APP_API_KEY}`)
            const data = await response.json()
            setArticles([...data.articles])
        }
        fetchSource()
    }, [props.match.params.source])

    const loading = () => <h2>Fetching Articles...</h2>
    const loaded = () => {
        return (
            <>
                <div className="navigation">
                    <Link to="/sources">sources</Link> / {props.match.params.source}
                </div>
                <div className="page-title">
                    <h2>{articles[0].source.name}</h2>
                    <div></div>
                </div>
                <Feed articles={articles} />
            </>
        )
    }

    return (
        <div id="source" className="main">
            { articles ? loaded() : loading() }
        </div>
    )
}

export default Source