import React, { useState } from "react";
import "../styles/NavBar.css";
import logo from "../assets/Group 9282.png";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import bgImage from "../assets/Frame 9325.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section
      className="property"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      <nav>
        <div className="nav-prop">
          <img src={logo} alt="" />

          {/* Hamburger icon for small screens */}
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
          </div>

          <div className={`div-a ${menuOpen ? "show" : ""}`}>
            <a href="">Home</a>
            <a href="#properties">Properties</a>
            <a href="#footer">About Us</a>
            <a href="#footer">Blog</a>
            <a href="#footer">ContactUs</a>
          </div>

          <div className={`div-but ${menuOpen ? "show" : ""}`}>
            <a href="/signup">
              <button className="but-1">Signup</button>
            </a>
            <a href="/">
              <button className="but-2">Login</button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero text and filter form */}
      <div className="details">
        <div className="texts">
          <h3>Browse Our Properties</h3>
          <p>
            Find your perfect home among our curated properties. Start browsing
            now!
          </p>
        </div>

        <div className="div-shadow">
          <div className="div-con">
            <div className="divs">
              <div className="div-1">
                <h4>LOCATION</h4>
                <input
                  id="text"
                  name="text"
                  type="text"
                  placeholder="eg. Gbagada"
                />
              </div>

              <div className="div-2">
                <h4>PROPERTY TYPE</h4>
                <input
                  id="property"
                  name="property"
                  type="text"
                  placeholder="eg. Duplex, Bedroom Flat"
                />
              </div>

              <div className="div-3">
                <h4>BEDROOMS</h4>
                <div className="div-3-child">
                  <CiCircleMinus className="circle" />
                  <p>0</p>
                  <CiCirclePlus className="circle" />
                </div>
              </div>
            </div>
            <button className="but-4">Find Property</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
