import React from "react"
import img from "/Users/natejpg/Workspace/React/Airbnb/src/images/airbnb.png"

export default function Navbar(){

return(
  <div className="navbar">
    <div className="logo">
      <img src={img} className="img-logo"></img>
      <h3>Airbnb</h3>
    </div>
  </div>
)
}