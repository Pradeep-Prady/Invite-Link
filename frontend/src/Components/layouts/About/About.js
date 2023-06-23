import React from "react";
import aboutus from "../../Images/6.png";
import { Link } from "react-router-dom";

import './about.css'

function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="row">

          <div className="offset-md-2 col-md-4 col-12 col-1">
            <h1>Who We Are</h1>
            <h3>
              Where vision meets expertise, we specialize in creating tailored
              invitations that reflect your unique style, personality, and the
              essence of your event.
            </h3>

            <Link to="/about-info">
              <button>Read more</button>
            </Link>
          </div>
          <div className="col-md-4 col-12 col-2 offset-end-1 aboutImg">
            <img src={aboutus} alt="aboutus"  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
