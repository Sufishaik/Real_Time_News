import React, { useEffect, useState } from 'react'
// import NavBar from './NavBar'
// import NewsItem from './NewsItem'
import NewsItem from './NewsItem';
// import Spinner from './Spinner';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";  //To use feature of Infinite scroll bar we have to import it.


const News = (props) => {
  const [articles, setArticles] = useState([])   //here we are using state variables.
  // const [loading, setLoading] = useState(true)
  const [page, setpage] = useState(1)
  // const [totalResults, settotalResults] = useState(0)


  const captializeFirstLetter = (string) => {   //function for converting first letter of string to Capital form 
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=72e6d783eecc436791054a217877b128&page=${page}&pageSize=${props.pageSize}`;
    // setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    let parsedImgData=parsedData.articles.filter(function(element){return element.urlToImage!=null}); // we are using filter function to get only those URL's which having image for news.
    props.setProgress(70);
    setArticles(parsedImgData);
    props.setProgress(100);
  }

  useEffect(() => {   //this useEffect hook will run after component get rendered or change.
    document.title = `${captializeFirstLetter(props.category)} - News`;
    updateNews();
  },[])

        // const handleNextClick = async () => {
        //   setpage(page+1)
        //   updateNews();
        // }


        // const handlePrevClick = async () => {
        //   setpage(page-1)
        //   updateNews();
        // }

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=72e6d783eecc436791054a217877b128&page=${page + 1}&pageSize=${props.pageSize}`;
    setpage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    let parsedImgData=parsedData.articles.filter(function(element){return element.urlToImage!=null});
    setArticles(articles.concat(parsedImgData));
  };
  return (
    <>
      <u><h1 className='text-center' style={{ margin: "35px, 0px", marginTop: "70px" }}>Top {captializeFirstLetter(props.category)} Headilines</h1></u>
      {/* {loading && <Spinner/>} */}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}   //after scrolling down fetch more date function will execute.
        hasMore={true}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {     //Here we are Iterating over the article which is state variable.
              return <div className="col-md-4" key={element.url}>
                <NewsItem articles={element.articles} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>   
            })}
            
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}


News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general"
}
News.proptype = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News  //exporting News Component.