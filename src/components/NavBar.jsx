import React from "react";
import "../styles/NavBar.css";
import logo from "../assets/Group 9282.png";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import bgImage from "../assets/Frame 9325.png";

function NavBar() {
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
          <div className="div-a">
            <a href="">Home</a>
            <a href="#properties">Properties</a>
            <a href="#footer">About Us</a>
            <a href="#footer">Blog</a>
            <a href="#footer">ContactUs</a>
          </div>
          <div className="div-but">
            <a href="/signup">
              <button className="but-1">Signup</button>
            </a>
            <a href="/">
              <button className="but-2">Login</button>
            </a>
          </div>
        </div>
      </nav>
      {/* ======================== */}

      <div className="details">
        <div className="texts">
          <h3>Browse Our Properties</h3>
          <p>
            Find your perfect home among our curated properties. Start browsing
            now!
          </p>
        </div>
        {/* ======== */}
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
                  type="property"
                  placeholder="eg. Duplex, Bedroom Fla"
                />
              </div>

              {/* ====== 3rd div info==== */}
              <div className="div-3">
                <h4>BEDROOM</h4>
                <div className="div-3-child">
                  <CiCircleMinus className="circle" />
                  <p>0</p>
                  <CiCirclePlus className="circle" />
                </div>
              </div>
            </div>
            {/* ========== */}
            <button className="but-4">Find Property</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
