import React from "react"
import ReactDOM from "react-dom/client"

export default function Props(){

  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if(hours < 12){
    timeOfDay = "morning"
  }else if(hours >= 10 && hours < 17){
    timeOfDay = "afternoon"
  }else{
    timeOfDay = "night"
  }

  return(
    <div>
      <h1> Good {timeOfDay}</h1>     
    </div>
  )
}