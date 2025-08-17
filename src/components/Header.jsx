import React, { useState } from "react";
import "./Header.css";
import ShinyText from "./ShinyText";
import SplitText from "./SplitText";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo-area">
        <ShinyText text="RK" disabled={false} speed={3} className="logo" />
      </div>

      {/* Hamburger Button */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={menuOpen ? "bar rotate1" : "bar"}></div>
        <div className={menuOpen ? "bar fade" : "bar"}></div>
        <div className={menuOpen ? "bar rotate2" : "bar"}></div>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item} onClick={() => setMenuOpen(false)}>
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
