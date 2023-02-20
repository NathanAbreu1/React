import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Card from "./Components/Card";
import Data from "./Data";


export default function App(){

  const cards = Data.map(item => {
  
  return(
    <Card
    img = {item.coverImg}
    name = {item.title}
    rating = {item.stats.reviewCount}
    reviewCount = {item.reviewCount}
    country = {item.reviewCount}
    title = {item.reviewCount}
    location = {item.location}
    price = {item.price}
      />
    )
  })
  
  return(
    <div>
      <Navbar/>
      <Main/>
      {cards}
    </div>
  )
}