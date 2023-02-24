import React from "react";
import { Icon } from '@iconify/react';

export default function Card(props){

  return(
    <div className="card">
      <div className="imgBx">
      <img src={props.item.img}></img>
      </div>
      <div className="content">
        <div className="location">
        <Icon id = "icon" icon="material-symbols:location-on" width="25px" height="25px"/>
         <h2>{props.item.location}</h2>
         <a href={props.item.link}>View on Google Maps</a>
        </div>
        <h1>{props.item.title}</h1>
        <h2>{props.item.date}</h2>
        <p>{props.item.text}</p>
      </div>
    </div>
  )
}