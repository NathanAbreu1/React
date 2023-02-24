import React from "react";

export default function Card(props){

  return(
    <div>
      <h1>{props.item.location}</h1>
      <img src = {props.item.img}/>
    </div>
  )
}