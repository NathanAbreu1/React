import React from "react"

export default function Header(){

  return(
    <header>
      <navbar className="navbar">
        <img src="images/react.png" width="100px" height="100px"></img>
        <ul>
          <li>Contact</li>
          <li>Settings</li>
          <li>About</li>
          <li>Pricing</li>
        </ul>
      </navbar>
    </header>
  )

}