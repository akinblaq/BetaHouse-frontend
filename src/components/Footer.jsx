import React from "react";
import "../styles/Footer.css";
import logo from "../assets/Group 9282.png";
import location from "../assets/Icon.png";
import phone from "../assets/phone (2).png";
import email from "../assets/email (2).png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="link-father">
        <div className="info-div">
          <div>
            <img src={logo} alt="" />
            <p className="p-info">
              Discover, rent, and find your ideal home hassle-free with
              BetaHouse. Take control of your rental journey today!
            </p>
          </div>
          <div className="three-p-img">
            <div className="p-div">
              <img src={location} alt="" />
              <p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=95+Tinubu+Estate,+Lekki,+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  95 Tinubu Estate, Lekki, Lagos
                </a>
              </p>
            </div>
            <div className="p-div">
              <img src={phone} alt="" />
              <p>
                <a href="tel:+234 675 8935 675">+234 675 8935 675</a>
              </p>
            </div>
            <div className="p-div">
              <img src={email} alt="" />
              <p>
                <a href="mailto:contact@betahouse.com">contact@betahouse.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="link-div">
          <div className="link">
            <h3>Quick Links</h3>

            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">roperties</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="link">
            <h3>More</h3>
            <ul>
              <li>
                <a href="#">Agents</a>
              </li>
              <li>
                <a href="#">Affordable Houses</a>
              </li>
              <li>
                <a href="#">FAQ's</a>
              </li>
            </ul>
          </div>
          <div className="link">
            <h3>Popular Search</h3>
            <ul>
              <li>
                <a href="#">Apartment for sale</a>
              </li>
              <li>
                <a href="#">roperties</a>
              </li>
              <li>
                <a href="#">3 bedroom flat</a>
              </li>
              <li>
                <a href="#">Bungalow</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="foot-down-div">
        <p>Copyright 2023 Betahouse | Designed by Michael.fig</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
