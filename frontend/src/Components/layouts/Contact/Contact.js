import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact container-fluid text-center" id="contact">
      <form>
        {" "}
        <h2 className="text-center">Contact Us</h2>
        <div className="row">
          <div className="col-md-12 ">
            <div class="input-group">
              <span class="input-group-text">
                <i className="fa-solid fa-user" />
                <input type="text" placeholder="Enter your Name" />
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
          {" "}
          <div class="input-group">
            <span class="input-group-text">
              {" "}
              <i className="fa-solid fa-envelope" />
              <input type="email" placeholder="Enter your Email" />
            </span>
          </div>
        </div>
        </div>
        <div className="row">
           <div className="col-md-12 ">
          {" "}
          <div class="input-group">
            <span class="input-group-text">
              <i className="fa-solid fa-mobile" />
              <input type="number" placeholder="Enter your Mobile No" />
            </span>
          </div>
        </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
          <div class="input-group">
            <span class="input-group-text">
              <i className="fa-solid fa-envelope" />
              <textarea type="text" placeholder="Enter your Comments" />
            </span>
          </div>
        </div>
        </div>
        
       
        
        <button className="contact-btn">Get it Touch</button>
      </form>
    </div>
  );
}

export default Contact;
