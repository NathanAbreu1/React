import React from "react";

export default function Card(props){

  let badgeText;

  if(props.openSpots === 0){
     badgeText = "SOLD OUT"
  }else if(props.location === "Online"){
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.img}></img>
      <div className="card-stats">
        <p className="rating">{props.rating}</p>
        <span>{props.reviewCount}</span>
      </div>
      <p className="title">{props.title}</p>
      <p><span>from $ {props.price}</span> / person</p>
    </div>
  )
}