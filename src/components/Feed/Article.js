import React from 'react'

const Article = (props) => {

    const { article, odd } = props
    const image = { background: `url(${article.urlToImage})`}
    let direction

    if (odd) {
        direction = { flexDirection: "row-reverse", textAlign: "right"}
    } else {
        direction = { flexDirection: "row", textAlign: "left"}
    }

    return (
        <div className="article">
            <a
                target="_blank" 
                rel="noreferrer" 
                href={article.url} 
                className="title"
            >
                {article.title}
            </a>
            <div style={direction} className="body">
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