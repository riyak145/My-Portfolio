import React from 'react';
import './Technologies.css';

const technologies = [
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Tailwind CSS', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
];

// Repeat the list 3 or 4 times to prevent any gap
const repeatedList = [...technologies, ...technologies, ...technologies];

const Technology = () => {
  return (
    <div className="tech-marquee-container">
      <div className="tech-marquee-track">
        {repeatedList.map((tech, index) => (
          <div key={index} className="tech-item">
            <img src={tech.logo} alt={tech.name} className="tech-logo" />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
