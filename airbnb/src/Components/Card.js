import React from "react";
import img1 from "/Users/natejpg/Workspace/React/Airbnb/src/images/pexels1.jpeg"
import img2 from "/Users/natejpg/Workspace/React/Airbnb/src/images/pexels2.webp"
import img3 from "/Users/natejpg/Workspace/React/Airbnb/src/images/pexels3.jpg"

export default function Card(){

  return(
    <div className="card">
      <img src={img1}></img>
      <div className="card-stats">
        <p>5.0</p>
        <span>4</span>
        <h3>USA</h3>
      </div>
      <p>Life lessons with Katye Zafyrix</p>
      <p><span>From $138 </span>/ person</p>
    </div>
  )

}