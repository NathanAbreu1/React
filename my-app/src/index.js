import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"
import Test from "./Test"

function Component(){

  return(
  <div>
    <Test>
    </Test>
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Component/>
)