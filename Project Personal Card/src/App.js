import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Footer";


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