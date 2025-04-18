import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (email) {
      toast.success(`Thank you for subscribing with email: ${email}`, {
        position: "bottom-right",
        autoClose: 3000,
      });
      setEmail("");
    } else {
      toast.error("Please enter a valid email address.", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <footer className="footer">
      <div className="newsletter-section">
        <h3>
          Subscribe to <span> my Newsletter</span>
        </h3>
        <p>Get updates on my latest projects and blogs!</p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="email-input"
          />
          <button onClick={handleSubscribe} className="subscribe-btn">
            Subscribe
          </button>
        </div>
      </div>

      <div className="footer-links">
        <ul>
          <li>
            <NavLink to="/about">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/tamil-selvan-130225214/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Tamilselva-1304"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.youtube.com/@kadhalmarket1304"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
      </div>

      <div className="footer-info">
        <p>&copy; 2025 Tamil selva🩷. All rights reserved.</p>
      </div>

      <ToastContainer />
    </footer>
  );
};

export default Footer;
