import React from "react";
import "./Card.css";
import img1 from "../../Images/birth.png";
import img2 from "../../Images/birth1.png";

function Birthday() {
  return (
    <div className="birthday" id="birthday">
      <h2>Birthday Cards</h2>
      <div className="container">
        <div className="row birth">
          <div class="col-lg-4 col-sm-12 col_birth">
            <img src={img2} alt="img" />
          </div>
          <div class="col-lg-4  col-sm-12 col_birth text-center">
            <img src={img1} alt="img" />
            <h5>view more ...</h5>
          </div>
          <div class="col-lg-4   col-sm-12 col_birth">
            <img src={img2} alt="img" />
          </div>
        </div>
      
      </div>
      
    </div>
  );
}

export default Birthday;
