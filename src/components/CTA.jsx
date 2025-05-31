import React, { useState } from "react";
import linkOne from "../assets/Link-one.png";
import linkTwo from "../assets/Link-two.png";
import linkThree from "../assets/Link-three.png";
import linkFour from "../assets/Link-four.png";
import naira from "../assets/naira.png";
import location from "../assets/Icon.png";
import back from "../assets/back.png";
import forward from "../assets/forward.png";
import "../styles/CTA.css";

const cardData = [
  { title: "Semi Detached Duplex", price: "1,430,000,000", img: linkOne },
  { title: "Special Duplex", price: "670,000,000", img: linkTwo },
  { title: "Split-Level House", price: "340,000,000", img: linkThree },
  { title: "Twin Duplex", price: "290,000,000", img: linkFour },
  { title: "Modern Flat", price: "800,000,000", img: linkFour },
  { title: "Luxury Condo", price: "1,200,000,000", img: linkThree },
  { title: "Mini Flat", price: "350,000,000", img: linkTwo },
  { title: "Elegant Villa", price: "950,000,000", img: linkOne },
];

function CTA() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 4;

  const handleNext = () => {
    if (startIndex + cardsPerPage < cardData.length) {
      setStartIndex(startIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - cardsPerPage >= 0) {
      setStartIndex(startIndex - cardsPerPage);
    }
  };

  const visibleCards = cardData.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section className="wrap">
      <div className="main-con">
        <h3 className="meh3">Discover Our Popular Properties</h3>
        <div className="carousel-controls">
          <div className="father-con">
            <img className="back" src={back} alt="Back" onClick={handlePrev} />
            {visibleCards.map((card, index) => (
              <div
                key={index}
                className="card"
                style={{
                  backgroundImage: `url(${card.img})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="text-div">
                  <h3>{card.title}</h3>
                  <div className="h-image">
                    <img src={naira} alt="naira" />
                    <h3>{card.price}</h3>
                  </div>
                  <div className="five-p">
                    <p>6 Bed </p>
                    <p className="pp">|</p>
                    <p>3 Bath </p>
                    <p className="pp">|</p>
                    <p>720 sq ft</p>
                  </div>
                  <div className="loca-div">
                    <img src={location} alt="location" />
                    <p>Victoria Island, Lagos</p>
                  </div>
                </div>
              </div>
            ))}
            <img
              className="forward"
              src={forward}
              alt="Forward"
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
