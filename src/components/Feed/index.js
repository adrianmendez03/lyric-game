import React from 'react'

import Article from './Article'

const Feed = ({ articles }) => {

    const feedArticles = articles.filter((article, index) => {
        return index > 0 
    }).map((article, index) => {
        return index % 2 === 0 ? <Article article={article} key={index} odd={false}/> : <Article article={article} key={index} odd={true}/>
    })

    return (
        <div className="feed">
            {feedArticles}
        </div>
    )
}

export default Feed