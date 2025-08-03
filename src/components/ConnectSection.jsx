
import "./ConnectSection.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail, FiDownload } from "react-icons/fi";

const ConnectSection = () => {
  return (
    <div className="connect-section" id="contact">
      <h2 className="connect-heading">Let's Connect</h2>
      <p className="connect-text">
        I'd love to hear from you! Reach out through any of the platforms below.
      </p>

      <div className="connect-card-container">
   <a 
  href="mailto:riyakanani148@gmail.com" 
  className="connect-card" 
  draggable="false"
  title="Send me an email"
>
  <FiMail size={24} />
  <span>Email Me</span>
</a>


        <a href="https://linkedin.com/in/riyakanani" className="connect-card" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
          <span>LinkedIn</span>
        </a>

        <a href="https://github.com/riyak145" className="connect-card" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
          <span>GitHub</span>
        </a>

        <a href="/Riya_Resume_.pdf" className="connect-card" target="_blank" rel="noopener noreferrer">
          <FiDownload size={24} />
          <span>View Resume</span>
        </a>
      </div>
    </div>
  );
};

export default ConnectSection;
