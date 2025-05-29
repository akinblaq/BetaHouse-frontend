import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/PropertyCard.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoChevronBackSharp } from "react-icons/io5";
import location from "../assets/location (2).png";
import bed from "../assets/bed.png";
import bath from "../assets/bath.png";
import comeGo from "../assets/come&go.png";
import share from "../assets/share.png";
import heart from "../assets/heart.png";
import link from "../assets/Link (3).png";
import video from "../assets/video.png";
import pic from "../assets/pic.png";
import down from "../assets/down.png";
import filter from "../assets/filter.png";

const PropertyCard = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/properties");
        setProperties(res.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

  // Pagination calculations
  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section id="properties">
      <div className="property-wrapper">
        <div className="main-div">
          <div className="first-div">
            <img src={filter} alt="" />
            <p>More Filter</p>
            <p>Showing 1 – 9 of 20 results</p>
          </div>

          <div className="second-div">
            <p>
              <span>Sort by:</span>
            </p>
            <p>Default</p>
            <img src={down} alt="" />
          </div>
        </div>
        <div className="property-grid">
          {currentProperties.map((property) => (
            <div key={property._id} className="property-card">
              <div
                key={property._id}
                className="image-div"
                style={{
                  backgroundImage: `url(${property.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px",
                }}
              >
                <div className="papa-div">
                  <div className="but-div">
                    <button className="green">Featured</button>
                    <button className="grey">For Sale</button>
                  </div>
                  <div className="div-img">
                    <img src={link} alt="" />
                    <img src={video} alt="" />
                    <img src={pic} alt="" />
                  </div>
                </div>
              </div>
              <div className="texts-below">
                <div className="text-blow-2">
                  <div className="card-one">
                    <h3>{property.title}</h3>
                    <div className="one">
                      <img src={location} alt="" />
                      <p> {property.location}</p>
                    </div>

                    <div className="two">
                      <div className="three">
                        <img src={bed} alt="" />
                        <p>{property.bedrooms} Beds</p>
                      </div>
                      <div className="four">
                        <img src={bath} alt="" />
                        <p>{property.bathrooms} Baths</p>
                      </div>
                    </div>
                  </div>

                  <div className="card-two">
                    <p> {property.price}</p>
                    <img src={comeGo} alt="" />
                    <img src={share} alt="" />
                    <img src={heart} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button onClick={handlePrev} disabled={currentPage === 1}>
            <IoChevronBackSharp />
          </button>
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map(
            (page) => (
              <button
                key={page}
                className={currentPage === page ? "active" : ""}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )
          )}
          <button onClick={handleNext} disabled={currentPage === totalPages}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyCard;
