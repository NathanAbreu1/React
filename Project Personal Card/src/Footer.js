import React from "react";
import {Icon} from '@iconify/react';

export default function Footer(){

  return(
  <div className="footer">
    <a><Icon icon="teenyicons:twitter-outline" className="icon"/></a>
    <a><Icon icon="iconoir:github" className="icon"/></a>
    <a><Icon icon="iconoir:instagram" className="icon"/></a>
  </div>
  )
}