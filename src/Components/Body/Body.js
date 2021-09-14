import React from "react";
import "./Body.css";
import About from "./About/About";
import Preface from "./Preface/Preface";
import Expertise from "./Expertise/Expertise";
import Clients from "./Clients/Clients";
import Members from "./Members/Members";
import Contact from "./Contact/Contact";


function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="preface">
        <Preface />
      </section>
      <section id="expertise">
        <Expertise />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="members">
        <Members />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
    </div>
  );
}

export default Body;
