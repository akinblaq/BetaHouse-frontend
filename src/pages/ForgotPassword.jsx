// src/components/ForgotPassword.jsx
import { useState } from "react";
import axios from "axios";
import logo from "../assets/Group 9282.png";
import background from "../assets/frameback.png";
import "../styles/Auth.css"; // reuse your existing auth styling

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [animate, setAnimate] = useState(true); // instant fade-in

  // === Function that triggers backend request ===
  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    console.log("Submitting reset for:", email); // Debug

    try {
      await axios.post(
        "https://betahouse-backend-mvz8.onrender.com/api/auth/forgot-password",
        { email } // ✅ fixed here
      );
      setMsg("✅  Check your inbox for password-reset instructions.");
    } catch (err) {
      console.error(err); // log error
      setMsg(err.response?.data?.message || "❌  Could not send reset email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`papa-auth page-wrapper ${animate ? "fade-in" : ""}`}>
      <div className="auth-container">
        <div className="forget">
          <h2>Password Reset</h2>
          <p>Enter the email you used for BetaHouse account registration.</p>

          <form onSubmit={handleReset}>
            <label htmlFor="reset-email">Email</label>
            <input
              id="reset-email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="sum-but" type="submit" disabled={loading}>
              {loading ? "Sending…" : "Send Reset Link"}
            </button>
          </form>

          {msg && (
            <p style={{ marginTop: "1rem", textAlign: "center" }}>{msg}</p>
          )}
        </div>
      </div>
      <div
        className="back-ground"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        <img src={logo} alt="" />
      </div>
    </section>
  );
}
