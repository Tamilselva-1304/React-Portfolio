import React, { useEffect } from "react";
import {
  FaReact,
  FaLaravel,
  FaPhp,
  FaNodeJs,
  FaSass,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJquery, SiVite, SiMysql } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiGodaddy } from "react-icons/si";
import jon from "../assets/images/jou.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Aboutme.scss";
import CursorEffect from "../components/CursorEffect";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="about">
      <CursorEffect />

      {/* Intro Section */}
      <section className="intro" data-aos="fade-down">
        <h1 className="about-head">
          About <span>Me</span>
        </h1>
        <h1>Hi, I'm a Full Stack Developer</h1>
        <p>
          Passionate about building modern, user-friendly websites and
          applications.
        </p>
        <div className="tech-logos">
          <FaHtml5 size={80} color="#e34f26" />
          <FaCss3Alt size={80} color="#264de4" />
          <FaSass size={80} color="#c69" />
          <RiTailwindCssFill size={80} color="#38bdf8" />
          <FaBootstrap size={80} color="#563d7c" />
          <FaJs size={80} color="#f7df1e" />
          <SiJquery size={80} color="#0769ad" />
          <FaReact size={80} color="#61DBFB" />
          <SiVite size={80} color="#646cff" />
          <FaPhp size={80} color="#777bb4" />
          <FaLaravel size={80} color="#FF2D20" />
          <SiMysql size={80} color="#4479A1" />
          <FaNodeJs size={80} color="#68a063" />
          <FaGithub size={80} color="#25a123" />
          <IoLogoVercel size={80} color="#fff" />
          <SiGodaddy size={80} color="#a1425a" />
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey" data-aos="fade-up">
        <h2>
          My <span>Journey</span>{" "}
        </h2>
        <div className="journey-container">
          <div className="journey-content">
            <p>
              I began my career as an intern at GoWebeZ , Guindy, where I was
              soon selected as a Full Stack Developer. During my 8-month tenure,
              I gained hands-on experience in a range of technologies including
              Laravel, MySQL, jQuery, and more. This opportunity gave me a
              strong foundation in both frontend and backend development,
              project collaboration, and real-world application building. Since
              then, I've been actively working as a freelancer, crafting
              solutions for clients and continuing to refine my skills across
              the full stack. <br />
              <br /> My key strengths include: Adapting quickly to new
              technologies and tools. Delivering responsive, user-friendly
              interfaces. Writing clean, scalable backend code. Integrating
              third-party services and APIs efficiently. Collaborating on
              projects with both startups and solo clients. Currently, I’m
              looking for my next exciting opportunity where I can grow,
              contribute, and help bring digital ideas to life with high-quality
              code and creative problem-solving.
            </p>
            <p>
              My passion for coding keeps me pushing boundaries to create
              better, more innovative solutions every day. I thrive in
              environments where I can continuously learn and contribute to
              building something impactful.
            </p>
          </div>
          <div>
            <img src={jon} alt="Coding Journey" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" data-aos="fade-up">
        <h2>My Skills</h2>
        <div className="skills-content">
          <p>My skill set includes:</p>
          <ul>
            <li>
              Frontend Development - (React, Tailwind CSS, SCSS , Bootstrap)
            </li>
            <li>Backend Development - (Node.js, Laravel, MySQL)</li>
            <li>API Development & Integration</li>
            <li>Version Control - (Git, GitHub)</li>
            <li>UI/UX Design with a focus on responsive design</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" data-aos="fade-up">
        <h2>Contact Me</h2>
        <p>If you'd like to collaborate, please feel free to reach out!</p>
        <a href="mailto:tamiltd1304@gmail.com" className="contact-btn">
          Email Me
        </a>
      </section>
    </div>
  );
};

export default About;
