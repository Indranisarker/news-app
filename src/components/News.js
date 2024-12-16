import { useState, useEffect } from 'react';
import React from 'react';
import NewsItems from './NewsItems';
import LoadingSpinner from './LoadingSpinner';
import InfiniteScroll from "react-infinite-scroll-component";



export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fetch news on initial render and when page changes
  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=2f7863a6210d43f481f078051702ec44&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      try {
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(parseData.articles);
        setTotalArticles(parseData.totalArticles);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
      document.title = `${props.category} - NewsNow`
    };
    fetchNews();
  }, [page]); // Add `page` as a dependency

  // Calculate the number of pages
  let noOfPages = Math.ceil(totalArticles / props.pageSize);

  //fetch more data
  const fetchMoreData = async () => {
    if (page >= noOfPages) {
           return;
         }
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=2f7863a6210d43f481f078051702ec44&page=${page}&pageSize=${props.pageSize}`;
      setPage(page + 1);
      try {
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));
        setTotalArticles(parseData.totalArticles);
        setPage(page + 1);
        if (page >= noOfPages) {
          setLoading(false);
        }
        
      } catch (error) {
        console.error("Error fetching news:", error);
      }
  };

  // const handlePrevious = async () => {
  //   setLoading(true)
  //   if (page > 1) {
  //     setPage(page - 1); // This will trigger the useEffect and fetch the previous page
  //   }
  // };

  // const handleNext = async () => {
  //   setLoading(true)
  //   if (page < noOfPages) {
  //     setPage(page + 1); // This will trigger the useEffect and fetch the next page
  //   }
  // };
  function capitalizeFirstLetter(word) {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <>
        <h1 className='text-center' style={{ marginTop:'120px'}}>NewsNow - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <LoadingSpinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalArticles}
          loader={<LoadingSpinner/> }
        >
      <div className='container my-3'>
        <div className='row my-5'>
          {articles.map((article) => (
            <div key={article.url} className='col-md-3 my-3'>
              <NewsItems
                imageUrl={article.urlToImage ? article.urlToImage : '3d-world-news-background-loop-free-video.jpg'}
                title={article.title ? article.title.slice(0, 40) : ''}
                author={article.author}
                desc={article.description ? article.description.slice(0, 88) : ''}
                publishDate={article.publishedAt}
                newsUrl={article.url} source ={article.source.name}
              />
            </div>
             ))}
            </div>
            </div>
          </InfiniteScroll>
       
 
      {/* <div className='container d-flex justify-content-between'>
        <button type='button' disabled={page <= 1} className='btn btn-dark' onClick={handlePrevious}>
          &larr; Previous
        </button>
        <button type='button' disabled={page >= noOfPages} className='btn btn-dark' onClick={handleNext}>
          Next &rarr;
        </button>
      </div> */}
    </>
  );
}
