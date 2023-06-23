import React from "react";
import "../layouts/footer.css";

function Footer() {
  return (
    <div className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Links</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className=" col">
            <h2>Links</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="icons">
        <i className="fa-brands fa-instagram" />
        <i class="fa-brands fa-github"></i>
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-facebook"></i>
      </div>
      <div className="credits">
        <p>© 2023 Reserved by Pradeep</p>
      </div>
    </div>
  );
}

export default Footer;
