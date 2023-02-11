import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";


export default function App (){
  return(
    <section>
      <div className="container">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
  </section>
  )
  
}