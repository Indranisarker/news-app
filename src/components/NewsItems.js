import React from 'react'

export default function NewsItems(props) {
  return (
    <div>
      <div className="card">
        <img src= {props.imageUrl} className="news-image" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">Author : {props.author}</p>
            <p className="card-text"><b>Publish At : </b>{props.publishDate}</p>
            <p className="card-text">{props.desc}....</p>
            
            <div className='news-button'>
              <a href={props.newsUrl} target='_blank' className="news-link">Read More</a> 
          </div>
        </div>
        </div>
    </div>
  )
}
