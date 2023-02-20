import React from "react"
import img from "/Users/natejpg/Workspace/React/Airbnb/src/images/grid.png";

export default function Main(){
  return(
  <div className="main">
    <div>
    <img src={img}></img>
    </div>
    <div className="content">
    <h1>Online Experiences</h1>
    <p>Join unique interactive experiences led by <span>one-of-a kind</span> hosts 
      all without leaving home.
    </p>
    </div>
  </div>
  )
}

