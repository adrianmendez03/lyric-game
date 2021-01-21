import React from 'react'

const Article = (props) => {

    const { article } = props
    const image = { background: `url(${article.urlToImage})`}

    return (
        <div className="article">
            <a
                target="_blank" 
                rel="noreferrer" 
                href={article.url} 
                className="title"
            >
                <div className="source">
                    {article.source.name}
                    <div></div>
                </div>
                {article.title}
            </a>
            <div className="body">
                <a 
                    style={image}
                    target="_blank" 
                    rel="noreferrer" 
                    href={article.url} 
                    className="image"
                >
                </a>
                <div className="description">
                    {article.description}
                </div>
            </div>
        </div>
    )
}

export default Article