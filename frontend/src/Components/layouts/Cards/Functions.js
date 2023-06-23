import React from "react";
import "./Card.css";

import img1 from "../../Images/birth.png";
import img2 from "../../Images/birth1.png";
import img3 from "../../Images/5.png";

function Functions() {
  return (
    <div className="functions text-center" id="products">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12 left-sec">
            <img src={img1} alt="img" />
            <img src={img2} alt="img" />
          </div>
          <div className="col-md-8 col-12 right-sec">
            <h2>
              Celebrate in style with our exquisite collection of
              invitations and heartfelt wishing cards.{" "}
            </h2>
            <div className="row ">
              <div className="col-md-6 col-12 rr">
                <img src={img3} alt="img" />
              </div>
              <div className="col-md-6 col-12">
                <h3 className="text-center">
                  Crafting cherished memories, one invitation and
                  wishing card at a time.
                </h3>
                <button className="card-btn">Order Cards</button>
                <img src={img1} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Functions;
