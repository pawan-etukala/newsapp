import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';

const NewsBoard = ({category}) => {
    const [articles,setArticales] = useState([]);
     useEffect(()=>{ 
          let url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=dd254b9bb6bf4473a8a225282d039479`;
          fetch(url).then(response=> response.json())
                    .then(data=> setArticales(data.articles)); 
                },[category])
  return (
    <div>
       <h2 className='text-center'> Latest<span className=' badge bg-danger text-white' > News</span></h2>
       {
        articles.map((news,index)=>{
         return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })
       }
    </div>
  )
}

export default NewsBoard
