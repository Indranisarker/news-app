import React from 'react'

export default function NewsItems(props) {
  return (
    <div>
      <div className="card">
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex:'1', left:'88%' }}>
                  {props.source}
          </span>
        <img src= {props.imageUrl} className="news-image" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}...
            </h5>
            <p className="card-text">Author : {!props.author? 'Unknown' : props.author}</p>
            <p className="card-text"><b>Publish At : </b>{new Date(props.publishDate).toUTCString()}</p>
            <p className="card-text">{props.desc}....</p>
            
            <div className='news-button'>
              <a href={props.newsUrl} target='_blank' className="news-link">Read More</a> 
          </div>
        </div>
        </div>
    </div>
  )
}
