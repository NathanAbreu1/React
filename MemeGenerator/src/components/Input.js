import React from "react";
import Data from "../Data";

export default function Input(){

  const [img, setImg] = React.useState("");

  function loadRandomImage(){
    const memesArray = Data.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setImg(memesArray[randomNumber].url);
  }

  return(
    <div className="container">
      <div className="input">
        <input type="text" placeholder="First Text"></input>
        <input type="text" placeholder="Last Text"></input>
      </div>
      <button className="btn" onClick={loadRandomImage}>Get a meme image</button>
      <div className="imgBx">
        <img src={img}></img>
      </div>
    </div>
  )
}