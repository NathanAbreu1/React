import React from "react";
import Header from "./Components/Header";
import Data from "./Data";
import Card from "./Components/Card";

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
      <Header/>
      <section className="main">
          {cards}
      </section>
    </div>
  )
}