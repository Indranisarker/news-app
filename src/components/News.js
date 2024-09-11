import { useState, useEffect } from 'react';
import React from 'react';
import NewsItems from './NewsItems';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const pageSize = 12; // Define page size

  // Fetch news on initial render and when page changes
  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&sports=cricket&apiKey=2f7863a6210d43f481f078051702ec44&page=${page}&pageSize=${pageSize}`;
      try {
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(parseData.articles);
        setTotalArticles(parseData.totalResults); // Use totalResults, not totalResult
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, [page]); // Add `page` as a dependency

  // Calculate the number of pages
  let noOfPages = Math.ceil(totalArticles / pageSize);

  const handlePrevious = async () => {
    if (page > 1) {
      setPage(page - 1); // This will trigger the useEffect and fetch the previous page
    }
  };

  const handleNext = async () => {
    if (page < noOfPages) {
      setPage(page + 1); // This will trigger the useEffect and fetch the next page
    }
  };

  return (
    <>
      <div className='container my-3'>
        <h2>NewsNow - Top Headlines</h2>
        <div className='row my-5'>
          {articles.map((article) => (
            <div key={article.url} className='col-md-3 my-3'>
              <NewsItems
                imageUrl={article.urlToImage ? article.urlToImage : '3d-world-news-background-loop-free-video.jpg'}
                title={article.title ? article.title.slice(0, 40) : ''}
                author={article.author}
                desc={article.description ? article.description.slice(0, 88) : ''}
                publishDate={article.publishedAt}
                newsUrl={article.url}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='container d-flex justify-content-between'>
        <button type='button' disabled={page <= 1} className='btn btn-dark' onClick={handlePrevious}>
          &larr; Previous
        </button>
        <button type='button' disabled={page >= noOfPages} className='btn btn-dark' onClick={handleNext}>
          Next &rarr;
        </button>
      </div>
    </>
  );
}
