import React from "react";
import Header from "./Components/Header";
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
      <Header/>
      <section className="main">
        {cards}
      </section>
    </div>
  )
}