import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Card from "./Components/Card";
import Data from "./Data";


export default function App(){

  const cards = Data.map(item => {
  
  return(
    <Card
    key = {item.id}
    item = {item}
      />
    )
  })
  
  return(
    <div>
      <Navbar/>
      <Main/>
      <section className="card-list">
      {cards}
      </section>
    </div>
  )
}