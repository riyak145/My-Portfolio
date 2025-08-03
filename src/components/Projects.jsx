import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading">Projects</h2>

      <div className="project-card">
        <h3 className="project-title">Nike Website</h3>
        <p className="project-description">
          A dynamic and responsive React-based website inspired by Nike's design. Features product sections, smooth UI, and modern interactions.
        </p>
        <div className="project-links">
          <a href="https://github.com/RiyaKanani124/Nike-website-clone" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <div className="project-card">
        <h3 className="project-title">LaunchUI</h3>
        <p className="project-description">
          A clean and modern landing page built using React JSX and Tailwind CSS. Perfect for product launches, portfolios, and marketing pages.
        </p>
        <div className="project-links">
          <a href="https://github.com/RiyaKanani124/tailwind-css-project.git" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <div className="project-card">
        <h3 className="project-title">Rock Paper Scissors</h3>
        <p className="project-description">
          A simple and fun Rock Paper Scissors game made using HTML, CSS, and JavaScript. Includes score tracking and clean UI animations.
        </p>
        <div className="project-links">
          <a href="https://github.com/riyak145/Rock-Paper-Scissor.git" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <div className="see-more-container">
        <a
          href="https://github.com/riyak145"
          className="see-more-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          See More Projects on GitHub →
        </a>
      </div>
    </section>
  );
};

export default Projects;
