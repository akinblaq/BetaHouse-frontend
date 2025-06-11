import "../styles/AuthSignUp.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { auth, provider, signInWithPopup } from "../firebase";
import google from "../assets/🦆 icon _google_.png";
import logo from "../assets/Group 9282.png";
import background from "../assets/frameback.png";

export default function SignUp() {
  const [animate, setAnimate] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmpassword) {
      return alert("Passwords do not match");
    }

    const fullName = `${form.firstname} ${form.lastname}`;

    try {
      const res = await axios.post(
        "https://betahouse-backend-mvz8.onrender.com/api/auth/signup",
        {
          name: fullName,
          email: form.email,
          password: form.password,
        }
      );

      localStorage.setItem("token", res.data.token);
      alert("Sign up successful");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const token = await user.getIdToken();
      localStorage.setItem("token", token); // Save session token

      // alert("Google sign-up successful");
      window.location.href = "/dashboard"; // or use navigate("/dashboard")
    } catch (error) {
      console.error("Google sign-up failed", error);
      alert("Google sign-up failed");
    }
  };

  return (
    <section>
      <div className={`papa-auth page-wrapper ${animate ? "fade-in" : ""}`}>
        <div className="auth-container">
          <h2>
            Join our community of home seekers and explore the possibilities
            that await.
          </h2>
          <p>Let's get started by filling out the information below</p>
          <form onSubmit={handleSubmit}>
            <div className="names">
              <div className="form-div">
                <label htmlFor="firstname">First Name</label>
                <input
                  className="input"
                  type="text"
                  name="firstname"
                  id="firstname"
                  autoComplete="given-name"
                  required
                  placeholder="First Name"
                  onChange={handleChange}
                />
              </div>

              <div className="form-div">
                <label htmlFor="lastname">Last Name</label>
                <input
                  className="input"
                  type="text"
                  name="lastname"
                  id="lastname"
                  autoComplete="family-name"
                  required
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-div">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="Email"
                onChange={handleChange}
              />
            </div>

            <div className="form-div">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="new-password"
                required
                placeholder="Password"
                onChange={handleChange}
              />
            </div>

            <div className="form-div">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                autoComplete="new-password"
                required
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </div>

            <div className="form-footer">
              <label className="Term">
                <input name="checkbox" id="checkbox" type="checkbox" required />
                I agree to <span>Terms of Service</span> and{" "}
                <span>Privacy Policies</span>
              </label>
            </div>

            <button className="sum-but" type="submit">
              Sign Up
            </button>
          </form>

          <div className="or-div">
            <hr />
            <p>or</p>
            <hr />
          </div>
          <button className="google-but" onClick={handleGoogleSignUp}>
            <img src={google} alt="" /> Continue with Google
          </button>

          <p className="new-user">
            Already have an account? <a href="/">Login</a>
          </p>
        </div>

        <div
          className="back-groundd"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}
        >
          <img src={logo} alt="" />
        </div>
      </div>
    </section>
  );
}
