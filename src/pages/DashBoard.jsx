import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import PropertyCard from "../components/PropertyCard";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProtected = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(
          "http://localhost:5000/api/protected/dashboard",
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
  }, []);

  return (
    <div>
      <NavBar />
      <PropertyCard />
      <CTA />
      <Footer />
    </div>
  );
}
