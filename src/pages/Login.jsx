import "../styles/Auth.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import google from "../assets/🦆 icon _google_.png";
import logo from "../assets/Group 9282.png";
import background from "../assets/frameback.png";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://betahouse-backend-mvz8.onrender.com/api/auth/login",
        form
      );

      const token = res.data.token;

      if (rememberMe) {
        localStorage.setItem("token", res.data.token);
        // persists after browser is closed
      } else {
        sessionStorage.setItem("token", token); // clears after session ends
      }

      navigate(`/dashboard`);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="papa-auth">
      <div className="auth-container">
        <h2>Welcome Back to BetaHouse</h2>
        <p>Let's get started by filling out the information below</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            required
            placeholder="Enter your Email"
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            required
            placeholder="Enter your password"
            onChange={handleChange}
          />

          <div className="form-footer">
            <label className="remember-me">
              <input
                type="checkbox"
                name="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>

            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button className="sum-but" type="submit">
            Login
          </button>
        </form>

        <div className="or-div">
          <hr />
          <p>or</p>
          <hr />
        </div>
        <button className="google-but">
          <img src={google} alt="" /> Continue with Google
        </button>
        <p className="new-user">
          New User? <a href="/signup">Sign up</a>
        </p>
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
    </div>
  );
}
