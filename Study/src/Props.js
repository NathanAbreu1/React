import React from "react";

export default function Props(props){
  console.log(props)
  return(
    <div className="testing">
      <h1>{props.setup}</h1>
      <p>{props.punchline}</p>
    </div>
  )
} 