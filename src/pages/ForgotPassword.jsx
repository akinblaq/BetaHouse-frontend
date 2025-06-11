// src/components/ForgotPassword.jsx
import { useState } from "react";
import axios from "axios";
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
    try {
      await axios.post(
        "https://betahouse-backend-mvz8.onrender.com/api/auth/forgot-password",
        { email }
      );
      setMsg("✅  Check your inbox for password-reset instructions.");
    } catch (err) {
      setMsg(err.response?.data?.message || "❌  Could not send reset email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`papa-auth page-wrapper ${animate ? "fade-in" : ""}`}>
      <div className="auth-container">
        <h2>Password Reset</h2>
        <p>
          Enter the email you used for BetaHouse and we’ll send a reset link.
        </p>

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

        {msg && <p style={{ marginTop: "1rem", textAlign: "center" }}>{msg}</p>}
      </div>
    </section>
  );
}
