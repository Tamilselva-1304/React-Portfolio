import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.scss";
import CircularProgress from "../components/CircularProgress";
import CursorEffect from "../components/CursorEffect";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const projects = [
    {
      title: "YouTube Clone",
      description:
        "A dynamic React app using YouTube Data API to display videos in real time. Includes a responsive layout, instant page loading.",
      tech: "React, YouTube API, SCSS",
      live: "https://youtube-clone-ruddy-eta.vercel.app/",
      code: "https://github.com/Tamilselva-1304?tab=repositories",
    },
    {
      title: "Website – IntellyCommerce",
      description:
        "A fully responsive and animated React site showcasing modern design principles. Features animated sections, 3D effects, and SCSS custom styling for a high-end UI/UX experience. The project code has been completed and is currently awaiting hosting deployment.",
      tech: "React, SCSS, AOS, Responsive Design",
      live: "#",
      code: "#",
    },
    {
      title: "Crunchit – Online Food Ordering App",
      description:
        "A sleek, responsive food ordering platform that allows users to browse, select, and order food with OTP-based login. Integrated Razorpay for seamless payments and real-time SMS confirmations for a professional touch.",
      tech: "Laravel, Razorpay, MySQL",
      live: "https://crunchit-app.vercel.app",
      code: "https://github.com/yourusername/crunchit",
    },
    {
      title: "Text to QR code generator using API",
      description:
        " A user-friendly website that generates QR codes from text input. Includes a responsive layout, instant QR code generation, and optimized performance with lazy loading.",
      tech: "HTML, CSS, JavaScript",
      live: "https://tamilselva-1304.github.io/QR-Code-generator-using-js/",
      code: "https://github.com/Tamilselva-1304?tab=repositories",
    },
    {
      title: "Image search app using API",
      description:
        "A simple image search app that allows users to search for images using search queries. Includes responsive layout, instant image loading, and optimized performance with lazy loading.",
      tech: "HTML, CSS, JavaScript",
      live: "https://tamilselva-1304.github.io/ImageSearchWebsite_JS/",
      code: " https://github.com/Tamilselva-1304?tab=repositories",
    },
  ];

  return (
    <div className="projects-page">
      <CursorEffect />
      <h1 className="page-title" data-aos="fade-down">
        My <span>Projects</span>
      </h1>
      <p className="intro-text" data-aos="fade-up">
        Every project I create is a combination of clean design,
        performance-focused coding, & real-world functionality. Here's a glimpse
        of what I've built so far as a passionate Full Stack Developer:
      </p>

      <div className="projects-grid">
        <div className="project-card" data-aos="fade-up">
          <h2>{projects[0].title}</h2>
          <p>{projects[0].description}</p>
          <CircularProgress percentage={100} label="Completed" />
          <p className="tech">Tech Stack: {projects[0].tech}</p>
          <div className="project-links">
            <a href={projects[0].live} target="_blank">
              Live Demo
            </a>
            <a href={projects[0].code}>GitHub</a>
          </div>
        </div>

        <div className="project-card" data-aos="fade-up">
          <h2>{projects[1].title}</h2>
          <p>{projects[1].description}</p>
          <CircularProgress percentage={100} label="Completed" />
          <p className="tech">Tech Stack: {projects[1].tech}</p>
          <div className="project-links">
            <a
              href={projects[1].live}
              style={{ pointerEvents: "none", cursor: "not-allowed" }}
            >
              Live Demo
            </a>
            <a
              href={projects[1].code}
              style={{ pointerEvents: "none", cursor: "not-allowed" }}
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="project-card" data-aos="fade-up">
          <h2>{projects[2].title}</h2>
          <p>{projects[2].description}</p>
          <CircularProgress percentage={10} label="Completed" />
          <p className="tech">Tech Stack: {projects[2].tech}</p>
          <div className="project-links">
            <a
              href={projects[2].live}
              style={{ pointerEvents: "none", cursor: "not-allowed" }}
            >
              Live Demo
            </a>
            <a
              href={projects[2].code}
              style={{ pointerEvents: "none", cursor: "not-allowed" }}
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="project-card" data-aos="fade-up">
          <h2>{projects[3].title}</h2>
          <p>{projects[3].description}</p>
          <CircularProgress percentage={100} label="Completed" />
          <p className="tech">Tech Stack: {projects[3].tech}</p>
          <div className="project-links">
            <a href={projects[3].live}>Live Demo</a>
            <a href={projects[3].code}>GitHub</a>
          </div>
        </div>

        <div className="project-card" data-aos="fade-up">
          <h2>{projects[4].title}</h2>
          <p>{projects[4].description}</p>
          <CircularProgress percentage={100} label="Completed" />
          <p className="tech">Tech Stack: {projects[4].tech}</p>
          <div className="project-links">
            <a href={projects[4].live}>Live Demo</a>
            <a href={projects[4].code}>GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
