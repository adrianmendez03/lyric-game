import React from 'react'

const Article = ({article}) => {

    const image = { background: `url(${article.urlToImage})`}

    return (
        <div className="article">
            <div className="title">{article.title}</div>
            <div className="body">
                <div style={image} className="image"></div>
                <div className="description">
                    {article.description}
                </div>
            </div>
        </div>
    )
}

export default Article