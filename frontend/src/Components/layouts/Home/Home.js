import React from "react";
import Header from "../Header";
import About from "../About/About";
import Birthday from "../Cards/Birthday";
import "../../../App.css";
import Functions from "../Cards/Functions";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <div>
      <Header />
      <Birthday />
      <Functions/>
      <About />
      <Contact/>
    </div>
  );
}

export default Home;
