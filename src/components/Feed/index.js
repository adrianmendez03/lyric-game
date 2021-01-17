import React from 'react'

import Article from './Article'

const Feed = ({ articles }) => {

    const feedArticles = articles.filter((article, index) => {
        return index > 0 
    }).map((article, index) => {
        return <Article article={article} key={index} />
    })

    return (
        <div className="feed">
            {feedArticles}
        </div>
    )
}

export default Feed