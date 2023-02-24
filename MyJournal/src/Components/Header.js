import React from "react";
import {Icon} from '@iconify/react';

export default function Header(){

  return(
  <section className="header">
    <div className="content">
      <Icon icon="icon-park-outline:world" />
      <h1>My Travel Journal</h1>
    </div>
  </section>
  )
}