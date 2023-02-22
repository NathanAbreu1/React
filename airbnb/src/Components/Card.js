import React from "react";

export default function Card(props){

  return(
    <div className="card">
      {props.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
      <img src={props.img}></img>
      <div className="card-stats">
        <p>{props.rating}</p>
        <span>{props.reviewCount}</span>
        <h3>{props.country}</h3>
      </div>
      <p>{props.name}</p>
      <p><span>from $ {props.price}</span> / person</p>
    </div>
  )
}