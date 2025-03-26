import React from 'react'

const NewsItem = ({ title, description, urlToImage, url }) => {
    return (
        <div className="card mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
            <img src={urlToImage} style={{ height: "200px", width: "330px" }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">{description ? description.slice(0, 90) : "no description available"}...</p>
                <a href={url} className="btn btn-primary">Read more</a>
            </div>
        </div>
    )
}

export default NewsItem
