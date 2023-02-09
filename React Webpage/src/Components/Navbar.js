import React from "react"
import reactlogo from "/Users/natejpg/Workspace/React/Project 2/src/images/react.png"

export default function Navbar(){

  return(
    <header className="header">
        <div className="logo">
      <img src={reactlogo}></img>
      <h1>ReactFacts</h1>
      </div>
      <ul className="navbar">
        <li>Course</li>
        <li>Contact</li>
        <li>About</li>
        <li>Settings</li>
      </ul>
    </header>
  )

}