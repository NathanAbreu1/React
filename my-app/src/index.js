import React from "react"
import  ReactDOM from "react-dom"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import Test from "./Test"

function Component(){
  return(
    <div>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
    </div>
  )
}

ReactDOM.render(<Component/>, document.getElementById("root"));

