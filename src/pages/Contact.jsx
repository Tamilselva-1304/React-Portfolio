import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Contact.scss";
import rocketIcon from "../assets/images/rocket.png";

const Contact = () => {
  useEffect(() => {
    if (document.getElementById("map") && !window.leafletMapInitialized) {
      const map = L.map("map").setView(
        [12.93522412019318, 80.22916725717236],
        13
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      L.marker([12.93522412019318, 80.22916725717236])
        .addTo(map)
        .bindPopup("My Location")
        .openPopup();

      window.leafletMapInitialized = true;
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n1mcv8c",
        "template_evtqj0i",
        form.current,
        "LnjGvAfGMCHFEeazM"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message!");
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="stars-bg" />
      <img src={rocketIcon} alt="Rocket" className="rocket" />
      <img src={rocketIcon} alt="Rocket" className="rocket1" />
      <img src={rocketIcon} alt="Rocket" className="rocket2" />
      <img src={rocketIcon} alt="Rocket" className="rocket3" />
      <img src={rocketIcon} alt="Rocket" className="rocket4" />
      <img src={rocketIcon} alt="Rocket" className="rocket5" />
      <img src={rocketIcon} alt="Rocket" className="rocket6" />
      <img src={rocketIcon} alt="Rocket" className="rocket7" />
      <img src={rocketIcon} alt="Rocket" className="rocket8" />
      <img src={rocketIcon} alt="Rocket" className="rocket9" />
      <img src={rocketIcon} alt="Rocket" className="rocket10" />
      <img src={rocketIcon} alt="Rocket" className="rocket11" />
      <img src={rocketIcon} alt="Rocket" className="rocket12" />
      <img src={rocketIcon} alt="Rocket" className="rocket13" />
      <img src={rocketIcon} alt="Rocket" className="rocket14" />

      <h1 className="page-title" data-aos="fade-down">
        Get in <span>Touch</span>
      </h1>

      <div className="contact-grid">
        <form ref={form} onSubmit={sendEmail} data-aos="fade-right">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          />
          <button type="submit">Send Message 🚀</button>
        </form>

        <div id="map" className="map-container" data-aos="fade-left" />
      </div>
    </div>
  );
};

export default Contact;
