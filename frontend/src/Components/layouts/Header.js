import React from "react";
import "./header.css";
 
import rightImg from "../Images/5.png";
import leftImg from "../Images/6.png";

function Header() {
  return (
    <div className="banner">
      <div className="container-fluid header">
        <div className="row header-row">
          <div className="col-md-3 col-12 left">
            <img src={leftImg} alt="leftImg" />
          </div>
          <div className="col-md-6 col-12 content">
            {" "}
            <h1>
              Invitation Awaits
            </h1>
            <h5>What are you waiting for?</h5>
            <p>
              We bring your vision to life. Tailored invitations that reflect
              your style, personality, and event essence. Your vision, our
              expertise.
            </p>
            <a className="btn-ex" href="#products">Explore Our Collection</a>
            <i class="fa-solid fa-angle-down fa-beat"></i>
          </div>

          <div className="col-md-3 col-12 right">
            <img src={rightImg} alt="rightImg" />
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default Header;
