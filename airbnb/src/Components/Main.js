import React from "react"
import img from "/Users/natejpg/Workspace/React/Airbnb/src/images/grid.png";


export default function Main(){
  return(
  <div className="main">
    <img src={img}></img>
    <div className="content">
    <h1>Online Experiences</h1>
    <p>Join unique interactive experiences led by one-of-a kind hosts 
      -all without leaving home.
    </p>
    </div>
  </div>
  )
}