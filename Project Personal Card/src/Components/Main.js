import React from "react";
import { Icon } from '@iconify/react';

export default function Main(){
  return(
  <div className="content">
    <div className="info-container">
      <h2>Nathan Abreu</h2>
      <p>Software Engineering</p>
      <div className="info-container-links">
        <a className="email"><Icon icon="material-symbols:mark-email-read-outline" className="Icon"/>Email</a>
        <a className="linkedin"><Icon icon="ph:linkedin-logo" className="Icon"/>Linkedin</a>
      </div>
    </div>
    <div className="about">
      <h1>About</h1>
      <p>My name is Nathan but people call me Nate, I'm a Software Engineer, I graduated 
        from UnB, I speak fluenty english, spanish, french and my native language which is 
        portuguese.
    </p>
    <h1>Interests</h1>
    <p>My main interests fall on the field of mathematics and artificial inteligence.
      My favorite quote from Pamela McCorduck "AI began with the ancient wish to forge 
      the gods."
    </p>
    </div>
  </div>
  )
}