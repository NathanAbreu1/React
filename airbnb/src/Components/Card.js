import React from "react";

export default function Card(props){

  return(
    <div className="card">
      <img src={props.img}></img>
      <div className="card-stats">
        <p>{props.rating}</p>
        <span>{props.reviewCount }</span>
        <h3>{props.country}</h3>
      </div>
      <p>{props.name}</p>
      <p><span>{props.price}</span> / person</p>
    </div>
  )
}