import React from "react"

export default function Navbar(){

  return(
    <header className="header">
      <div className="logo">
        <img src="../images/react.png"></img>
        <h1>ReactFacts</h1>
      </div>
      <ul className="navbar">
        <li>React Course</li>
        <li>Contact</li>
        <li>About</li>
        <li>Settings</li>
      </ul>
    </header>
  )

}