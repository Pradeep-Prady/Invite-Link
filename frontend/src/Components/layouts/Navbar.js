import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");

  const onClickActive = (item) => {
    setActiveItem(item);
    closeOffcanvas();
  };

  const closeOffcanvas = () => {
    const offcanvas = document.getElementById("offcanvasWithBothOptions");
    if (offcanvas.classList.contains("show")) {
      offcanvas.classList.remove("show");
      document.body.classList.remove("offcanvas-open");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      nav.classList.toggle("sticky", window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="home">
      <nav>
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <ul>
          <li
            onClick={() => onClickActive("Home")}
            className={activeItem === "Home" ? "active" : ""}
          >
            {/* <Link to="#home">
              Home
            </Link> */}
            <a href="#home">Home</a>
          </li>
          <li
            onClick={() => onClickActive("Products")}
            className={activeItem === "Products" ? "active" : ""}
          >
            <a href="#products">Products</a>
          </li>
          <li
            onClick={() => onClickActive("About")}
            className={activeItem === "About" ? "active" : ""}
          >
            <a href="#about">About</a>
          </li>
          <li
            onClick={() => onClickActive("Contact")}
            className={activeItem === "Contact" ? "active" : ""}
          >
            <a href="#contact">Contact</a>
          </li>
          <button
            className="toggle_btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </ul>
      </nav>
      <div className="dropdown_menu">
        <div
          class="offcanvas offcanvas-end"
          data-bs-scroll="true"
          tabindex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
              {" "}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <li
              onClick={() => onClickActive("Home")}
              className={activeItem === "Home" ? "active" : ""}
            >
              <a href="#home">Home</a>
            </li>
            <li
              onClick={() => onClickActive("Products")}
              className={activeItem === "Products" ? "active" : ""}
            >
              <a href="#products">Products</a>
            </li>
            <li
              onClick={() => onClickActive("About")}
              className={activeItem === "About" ? "active" : ""}
            >
              <a href="#about">About</a>
            </li>
            <li
              onClick={() => onClickActive("Contact")}
              className={activeItem === "Contact" ? "active" : ""}
            >
              <a href="#contact">Contact</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
