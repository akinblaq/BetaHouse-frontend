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
import SkeletonCard from "./SkeletonCard";

const PropertyCard = ({ filters }) => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("");
  const propertiesPerPage = 9;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const start = Date.now();
        const res = await axios.get(
          "https://betahouse-backend-mvz8.onrender.com/api/properties"
        );

        const elapsed = Date.now() - start;
        const delay = Math.max(0, 3000 - elapsed); // Ensure minimum 3 seconds

        setTimeout(() => {
          setProperties(res.data);
          setLoading(false);
        }, delay);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...properties];

      if (filters?.location) {
        filtered = filtered.filter((prop) =>
          prop.location.toLowerCase().includes(filters.location.toLowerCase())
        );
      }

      if (filters?.propertyType) {
        filtered = filtered.filter((prop) =>
          prop.title.toLowerCase().includes(filters.propertyType.toLowerCase())
        );
      }

      if (filters?.bedrooms && filters.bedrooms > 0) {
        filtered = filtered.filter(
          (prop) => parseInt(prop.bedrooms) === parseInt(filters.bedrooms)
        );
      }

      if (sortOption) {
        filtered.sort((a, b) => {
          switch (sortOption) {
            case "location":
              return a.location.localeCompare(b.location);
            case "price":
              return (
                parseInt(a.price.replace(/[^\d]/g, "")) -
                parseInt(b.price.replace(/[^\d]/g, ""))
              );
            case "bathrooms":
              return a.bathrooms - b.bathrooms;
            case "bedrooms":
              return a.bedrooms - b.bedrooms;
            default:
              return 0;
          }
        });
      }

      setFilteredProperties(filtered);
      setCurrentPage(1);
    };

    applyFilters();
  }, [filters, properties, sortOption]);

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirst, indexOfLast);

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
            <p>
              Showing {indexOfFirst + 1} –{" "}
              {Math.min(indexOfLast, filteredProperties.length)} of{" "}
              {filteredProperties.length} results
            </p>
          </div>

          <div className="second-div">
            <label htmlFor="sortSelect">
              <span>Sort by:</span>
            </label>
            <select
              id="sortSelect"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Default</option>
              <option value="location">Location</option>
              <option value="price">Price</option>
              <option value="bathrooms">Bathrooms</option>
              <option value="bedrooms">Bedrooms</option>
            </select>
          </div>
        </div>

        <div className="property-grid">
          {loading
            ? Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)
            : currentProperties.map((property) => (
                <div key={property._id} className="property-card">
                  <div
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
                          <p>{property.location}</p>
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
                        <p>{property.price}</p>
                        <img src={comeGo} alt="" />
                        <img src={share} alt="" />
                        <img src={heart} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {!loading && (
          <div className="pagination">
            <button onClick={handlePrev} disabled={currentPage === 1}>
              <IoChevronBackSharp />
            </button>
            {Array.from(
              { length: Math.min(5, totalPages) },
              (_, i) => i + 1
            ).map((page) => (
              <button
                key={page}
                className={currentPage === page ? "active" : ""}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
            <button onClick={handleNext} disabled={currentPage === totalPages}>
              <IoIosArrowForward />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyCard;
