import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

const { REACT_APP_API_KEY } = process.env

const Sources = () => {

    const [sources, setSources] = useState(null)

    useEffect(() => {
        const fetchSources = async () => {
            const response = await fetch(`https://newsapi.org/v2/sources?apiKey=${REACT_APP_API_KEY}`)
            const data = await response.json()
            console.log(data)
            setSources([...data.sources])
        }
        fetchSources()
    }, [])

    const renderSources = () => {
        return sources.map((source, index) => {
            return (
                <Link to={`/sources/${source.id}`} className="source" key={index}>
                    {source.name}
                    <div></div>
                </Link>
            )
        })
    }

    const loading = () => <h2>Fetching Sources...</h2>

    const loaded = () => {
        return (
            <>
                <div className="page-title">
                    <h2>Sources</h2>
                    <div></div>
                </div>
                <div className="sources-container">
                    {renderSources()}
                </div>
            </>
        )
    }

    return (
        <div className="main">
            { sources ? loaded() : loading() }
        </div>
    )
}

export default Sources