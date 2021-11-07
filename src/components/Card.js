import React from "react";

function Card (props) {
  
    return (
      <div className="col s12 m7">
      <div className="card-image">
          <img responsive-img alt={props.title} src={props.src}/>
        </div>
      <div className="card horizontal medium hoverable">
        <div className="card-stacked">
          <div className="card-content">
          <h4> {props.heading}</h4>
            <p>Overview: {props.overview}</p>
            <h6>Released: {props.released}</h6>
            <h6>Original language: {props.language}</h6>
          </div>
          <div className="card-action">
            <a target="_blank" rel="noopener" href={props.url}>TMDB movie page</a>
          </div>
        </div>
      </div>
    </div>
    )
  }

export default Card;