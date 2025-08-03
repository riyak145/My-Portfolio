// src/components/Header.jsx
import React from "react";
import "./Header.css";
import ShinyText from "./ShinyText";
import SplitText from "./SplitText";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-area">
        <ShinyText text="RK" disabled={false} speed={3} className="logo" />
      </div>

      <nav className="nav">
        <ul>
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>
                <SplitText
                  text={item}
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  className="nav-link"
                  textAlign="center"
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
