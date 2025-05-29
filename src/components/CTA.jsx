import React from "react";
import linkOne from "../assets/Link-one.png";
import linkTwo from "../assets/Link-two.png";
import linkThree from "../assets/Link-three.png";
import linkFour from "../assets/Link-four.png";
import naira from "../assets/naira.png";
import location from "../assets/Icon.png";
import back from "../assets/back.png";
import forward from "../assets/forward.png";
import "../styles/CTA.css";

function CTA() {
  return (
    <section className="wrap">
      <div className="main-con">
        <h3 className="meh3">Discover Our Popular Properties</h3>
        <div className="father-con">
          <div
            className="card"
            style={{
              backgroundImage: `url(${linkOne})`,
              backgroundSize: "cover",
            }}
          >
            <img className="back" src={back} alt="" />
            <div className="text-div">
              <h3>Semi Detached Duplex</h3>

              <div className="h-image">
                <img src={naira} alt="" />
                <h3>1, 430,000,000</h3>
              </div>
              <div className="five-p">
                <p>6 Bed </p>
                <p className="pp">|</p>
                <p> 3 Bath </p>
                <p className="pp">|</p>
                <p> 720 sq ft</p>
              </div>

              <div className="loca-div">
                <img src={location} alt="" />
                <p>Victoria Island, Lagos</p>
              </div>
            </div>
          </div>

          <div
            className="card"
            style={{
              backgroundImage: `url(${linkTwo})`,
              backgroundSize: "cover",
            }}
          >
            <div className="text-div">
              <h3>Special Duplex</h3>

              <div className="h-image">
                <img src={naira} alt="" />
                <h3>670,000,000</h3>
              </div>
              <div className="five-p">
                <p>6 Bed </p>
                <p className="pp">|</p>
                <p> 3 Bath </p>
                <p className="pp">|</p>
                <p> 720 sq ft</p>
              </div>

              <div className="loca-div">
                <img className="locate" src={location} alt="" />
                <p>Victoria Island, Lagos</p>
              </div>
            </div>
          </div>

          <div
            className="card"
            style={{
              backgroundImage: `url(${linkThree})`,
              backgroundSize: "cover",
            }}
          >
            <div className="text-div">
              <h3>Split-Level House</h3>

              <div className="h-image">
                <img src={naira} alt="" />
                <h3>340,000,000</h3>
              </div>
              <div className="five-p">
                <p>6 Bed </p>
                <p className="pp">|</p>
                <p> 3 Bath </p>
                <p className="pp">|</p>
                <p> 720 sq ft</p>
              </div>

              <div className="loca-div">
                <img className="locate" src={location} alt="" />
                <p>Victoria Island, Lagos</p>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${linkFour})`,
              backgroundSize: "cover",
            }}
            className="card"
          >
            <div className="text-div">
              <h3>Twin Duplex</h3>

              <div className="h-image">
                <img src={naira} alt="" />
                <h3>290,000,000</h3>
              </div>
              <div className="five-p">
                <p>6 Bed </p>
                <p className="pp">|</p>
                <p> 3 Bath </p>
                <p className="pp">|</p>
                <p> 720 sq ft</p>
              </div>

              <div className="loca-div">
                <img className="locate" src={location} alt="" />
                <p>Victoria Island, Lagos</p>
              </div>
            </div>
            <img className="forward" src={forward} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
