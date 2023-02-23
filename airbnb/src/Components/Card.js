import React from "react";
import { Icon } from '@iconify/react';


export default function Card(props){

  let badgeText;

  if(props.item.openSpots === 0){
     badgeText = "SOLD OUT"
  }else if(props.item.location === "Online"){
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.item.coverImg}></img>
      <div className="card-stats">
        <p className="rating">{props.item.stats.rating}</p>
        <span><Icon icon="material-symbols:star" /></span>
      </div>
      <p className="title">{props.item.title}</p>
      <p><span>from $ {props.item.price}</span> / person</p>
    </div>
  )
}