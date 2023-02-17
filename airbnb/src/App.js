import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Card from "./Components/Card";
import Props from "./Components/Props";

export default function App(){
  
  return(
    <div>
      <Navbar></Navbar>
      <Card></Card>
      <Props></Props>
   </div>
  )
}