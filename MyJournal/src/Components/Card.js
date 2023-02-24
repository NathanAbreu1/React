import React from "react";

export default function Card(props){

  return(
    <div className="card">
      <div className="imgBx">
      <img src={props.item.img}></img>
      </div>
      <div className="content">
        <p>{props.item.location}</p>
        <a href={props.item.link}></a>
        <h1>{props.item.title}</h1>
        <p>{props.item.date}</p>
        <p>{props.item.text}</p>
      </div>
    </div>
  )
}