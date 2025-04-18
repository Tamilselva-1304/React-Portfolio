import React, { useState, useEffect } from "react";
import "./Hero.scss";
import { BiRotateRight } from "react-icons/bi";
import certificate from "../assets/images/certificate.png";
import problem from "../assets/images/prb.png";
import experience from "../assets/images/exp.png";
import skill from "../assets/images/skills.png";
import { FaReact, FaLaravel, FaJsSquare, FaSass } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import CursorEffect from "../components/CursorEffect";
import { NavLink } from "react-router-dom";
import ResumeDownloadButton from "../components/ResumeDownloadButton";

const Hero = () => {
  const slogans = [
    {
      tamil: "வாழ்க்கை என்பது பயணம்தான், முடிவான இடமல்ல.",
      english: "Life is a journey, not a destination.",
    },
    {
      tamil: "வாழ்க்கையை நீங்கள் உருவாக்கும் கலையாக காணுங்கள்.",
      english: "See life as an art you create.",
    },
    {
      tamil: "ஒவ்வொரு நாளும் ஒரு புதிய தொடக்கம்.",
      english: "Every day is a new beginning.",
    },

    {
      tamil: "தோல்வி என்பது வெற்றியின் முதல் படி.",
      english: "Failure is the first step to success.",
    },
    {
      tamil: "வெற்றிக்கு சோதனைகள் தடையாக அல்ல, பாலமாகும்.",
      english: "Challenges aren't barriers to success, they are bridges.",
    },
    {
      tamil: "தொடர்ந்து உழைத்தால் ஏதும் முடியாததில்லை.",
      english: "Nothing is impossible with consistent effort.",
    },

    {
      tamil: "அன்பு வாழ்க்கையை அழகாக்கும் ஜீவன்.",
      english: "Love is the soul that makes life beautiful.",
    },
    {
      tamil: "உண்மையான அன்பு பேச வேண்டியதில்லை, உணரச் செய்கிறது.",
      english: "True love doesn't need words, it makes you feel.",
    },
    {
      tamil: "அன்பு என்பது மனங்களை இணைக்கும் பாலம்.",
      english: "Love is the bridge that connects hearts.",
    },

    {
      tamil: "உங்கள் கனவுகளை எதிர்நோக்கி பயணியுங்கள்.",
      english: "Walk toward your dreams.",
    },
  ];

  const [quote, setQuote] = useState({ tamil: "", english: "" });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * slogans.length);
    setQuote(slogans[randomIndex]);
  }, []);

  return (
    <>
      <CursorEffect />
      <ResumeDownloadButton />
      <section className="hero-section" data-aos="fade-right">
        <div className="hero-left">
          <h1>
            Hi, I'm <span>Tamil selvan</span>
          </h1>
          <p>
            Bringing ideas to life with React, Laravel & 3D magic — Full Stack
            Developer at heart💜.
          </p>
          <NavLink to="/projects" className="btn">
            View Projects
          </NavLink>

          <div className="rotate-hint">
            <BiRotateRight className="rotate-icon" />
            <span>Drag to rotate</span>
          </div>
        </div>

        <div className="hero-right">
          <spline-viewer
            url="https://prod.spline.design/NZ6Yg2Knl2DF8jd8/scene.splinecode"
            style={{ width: "100%", height: "100%", border: "none" }}
          ></spline-viewer>
        </div>
      </section>

      <section className="about-me-section" data-aos="flip-right">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        <div className="about-grid">
          <div className="card card-1">
            <img src={certificate} alt="Education" />
            <div>
              <h3>Education</h3>
              <p>
                I hold a Master's degree in MCA and I have done my certification
                in Full Stack Development at Login 360.
              </p>
            </div>
          </div>
          <div className="card card-2">
            <img src={problem} alt="Problem Solving" />
            <div>
              <h3>Problem-Solving</h3>
              <p>I tackle problems with a clear and organized approach.</p>
            </div>
          </div>
          <div className="card card-3">
            <img src={experience} alt="Experience" />
            <div>
              <h3>Experience</h3>
              <p>
                I have one year of experience as a Full Stack Web Developer.
              </p>
            </div>
          </div>
          <div className="card card-4">
            <img src={skill} alt="Technical Skills" />
            <div>
              <h3>Technical Skills</h3>
              <p>
                As a Full Stack Web Developer, I specialize in React JS,
                Tailwind CSS, SCSS, jQuery, Laravel, Bootstrap, and Three.js.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-timeline">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        <div className="timeline-container">
          <div
            className="timeline-item left"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="content">
              <h3>Crunchit - Food Ordering App</h3>
              <p>
                OTP login, food cart, Razorpay payments, and SMS confirmation.
                Built with Laravel & React.
              </p>
            </div>
          </div>

          <div
            className="timeline-item right"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="content">
              <h3>IntellyCommerce Website</h3>
              <p>
                Professional eCommerce tech site with React, SCSS, and animated
                UI sections.
              </p>
            </div>
          </div>

          <div
            className="timeline-item left"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="content">
              <h3>Calendar Event Manager</h3>
              <p>
                Laravel-based app for managing events, reminders, and scheduling
                with Blade UI.
              </p>
            </div>
          </div>

          <div
            className="timeline-item right"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="content">
              <h3>YouTube Search App</h3>
              <p>
                React app using YouTube API for dynamic video search and
                embedded playback.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title">
          Main <span>Skills</span>
        </h2>
        <div className="skills-grid">
          <div className="skill-card" data-aos="fade-up" data-aos-delay="100">
            <FaReact className="skill-icon" />
            <h3>React</h3>
            <p>Expert in building dynamic user interfaces with React</p>
          </div>
          <div className="skill-card" data-aos="fade-up" data-aos-delay="400">
            <FaLaravel className="skill-icon" />
            <h3>Laravel</h3>
            <p>Proficient in building scalable web applications with Laravel</p>
          </div>
          <div className="skill-card" data-aos="fade-up" data-aos-delay="600">
            <FaJsSquare className="skill-icon" />
            <h3>JavaScript</h3>
            <p>
              Strong in building dynamic, client-side functionality with
              JavaScript
            </p>
          </div>
          <div className="skill-card" data-aos="fade-up" data-aos-delay="800">
            <FaSass className="skill-icon" />
            <h3>Tailwind CSS</h3>
            <p>Efficient styling with modern CSS framework, Tailwind</p>
          </div>
        </div>
      </section>

      <section className="slogan-section">
        <div className="slogan-content">
          <h2 className="tamil">"{quote.tamil}"</h2>
          <h3 className="english">"{quote.english}"</h3>
          <p>
            - <span>தமிழ் செல்வன்</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
