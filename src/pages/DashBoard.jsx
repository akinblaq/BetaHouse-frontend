import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import PropertyCard from "../components/PropertyCard";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [message, setMessage] = useState("");
  const [animate, setAnimate] = useState(false);
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    bedrooms: 0,
  });

  useEffect(() => {
    const fetchProtected = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(
          "https://betahouse-backend-mvz8.onrender.com/api/protected/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMessage(res.data.message);
      } catch (err) {
        setMessage("Access denied. Please login.");
      }
    };

    fetchProtected();

    // Trigger animation
    setTimeout(() => setAnimate(true), 100);
  }, []);

  // Receive filter values from NavBar
  const handleFilter = (filterValues) => {
    setFilters(filterValues);
  };

  return (
    <div className={`dashboard-wrapper ${animate ? "fade-in" : ""}`}>
      <NavBar onFilter={handleFilter} />
      <PropertyCard filters={filters} />
      <CTA />
      <Footer />
    </div>
  );
}
