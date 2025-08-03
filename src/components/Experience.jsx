// src/components/Experience.jsx
import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-heading">Experience</h2>

      <div className="experience-card">
         <h3 className="job-title"> Backend Developer Trainee Intern </h3>
        <p className="company-name">TSS Consultancy Pvt. Ltd.</p>
        <p className="job-description">
             Built and managed backend services using Java, Spring Boot, and MySQL. 
             Parsed structured government data using JSOUP, and developed internal tools in IntelliJ IDEA to streamline workflows.
        </p>

        <h3 className="job-title">Frontend Developer Intern</h3>
        <p className="company-name">BinaryGeckos</p>
        <p className="job-description">
                   Designed and implemented 3+ responsive web pages using React.js, HTML, CSS and JavaScript 
        </p>
         <h3 className="job-title">Operation Intern</h3>
        <p className="company-name">IScribblers </p>
        <p className="job-description">
          Customized and optimized blog websites using WordPress plugins and themes.
           Focused on improving layout aesthetics and enhancing content readability across pages.
        </p>
      </div>

      {/* Add more roles if needed */}
      {/* <div className="experience-card">
        <h3 className="job-title">Position Title</h3>
        <p className="company-name">Company | Duration</p>
        <p className="job-description">Your responsibilities and tech stack used.</p>
      </div> */}
    </section>
  );
};

export default Experience;
