import React from "react";
import { FaDownload } from "react-icons/fa"; 
import "./ResumeDownloadButton.scss";


const ResumeDownloadButton = () => {
  return (
    <a href="../assets/resume.pdf" download className="resume-button" id="resume">
      <FaDownload className="download-icon" />
      <span>Download Resume</span>
    </a>
  );
};

export default ResumeDownloadButton;
