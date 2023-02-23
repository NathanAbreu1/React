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
    img = {item.coverImg}
    title = {item.title}
    rating = {item.stats.rating}
    reviewCount = {item.reviewCount}
    location = {item.location}
    price = {item.price}
    openSpots = {item.openSpots}
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