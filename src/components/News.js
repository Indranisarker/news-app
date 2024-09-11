import { useState, useEffect } from 'react'
import React from 'react'
import NewsItems from './NewsItems'

export default function News() {
    const [articles, setArticles] = useState([])

    useEffect(()=>{
      const fetchNews = async() =>{
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2f7863a6210d43f481f078051702ec44";
        try{
          let data = await fetch(url);
          let parseData = await data.json();
          setArticles(parseData.articles);
        }catch (error) {
          console.error("Error fetching news:", error);
        }
      };
      fetchNews();
    },[]);
  return (
    <div className='container my-3'>
      <h2>NewsNow - Top Healines</h2>
      <div className='row my-5'>
       { articles.map((article)=>(
          <div key={article.url} className='col-md-3 my-3'>
          <NewsItems imageUrl = {article.urlToImage} title={article.title.slice(0,40)} author = {article.author}
           desc={article.description.slice(0,88)} publishDate = {article.publishedAt} newsUrl = {article.url}/>
  </div>
        ))}
      </div>
    </div>
  )
}
