import React from 'react'
import image from './assets/news-img.jpeg'

const Newsitem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src?src:image} style={{height:"200px", width:"320px"}} className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,50):" news is a report of current event.it is information about something just happend that just happend"}</p>
    <a href={url} className="btn btn-primary">Read more</a>
  </div>
</div>
  )
}

export default Newsitem
 