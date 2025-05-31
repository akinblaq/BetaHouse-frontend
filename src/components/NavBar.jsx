import React, { useState } from "react";
import "../styles/NavBar.css";
import logo from "../assets/Group 9282.png";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import bgImage from "../assets/Frame 9325.png";

function NavBar({ onFilter }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSubmit = () => {
    onFilter({ location, propertyType, bedrooms });
  };

  const incrementBedrooms = () => setBedrooms(bedrooms + 1);
  const decrementBedrooms = () => {
    if (bedrooms > 0) setBedrooms(bedrooms - 1);
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

          {/* <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
          </div> */}
        </div>
      </nav>

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
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="div-2">
                <h4>PROPERTY TYPE</h4>
                <input
                  id="property"
                  name="property"
                  type="text"
                  placeholder="eg. Duplex, Bedroom, Flat"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                />
              </div>

              <div className="div-3">
                <h4>BEDROOMS</h4>
                <div className="div-3-child">
                  <CiCircleMinus
                    className="circle"
                    onClick={decrementBedrooms}
                  />
                  <p>{bedrooms}</p>
                  <CiCirclePlus
                    className="circle"
                    onClick={incrementBedrooms}
                  />
                </div>
              </div>
            </div>
            <button className="but-4" onClick={handleSubmit}>
              Find Property
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
