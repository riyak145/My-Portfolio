// src/components/Main.jsx
import React from "react";
import "./Main.css";

// import { BrowserRouter } from "react-router-dom";
import TextType from "./TextType";
import Projects from "./Projects";
import Technologies from "./Technologies";
import ConnectSection from "./ConnectSection";
import Experience from "./Experience";
import ContactForm from "./ContactForm";

const Main = () => {
  return (
    <main className="main">
      <section id="home" className="hero-section">
        <h1 className="hero-intro">
          Hey! It's me <span className="highlight-name">Riya Kanani</span>,
        </h1>
        <p className="hero-subtext">
          One brain, many hats — <br />
          <span className="highlight-punch">crafting, coding</span> &{" "}
          <span className="highlight-punch">creating with intent</span>.
        </p>
      </section>

      <section id="about" className="about-section">
        <h2 className="section-heading">
          <TextType
            text={["About Me", "Who I Am", "Get to Know Me"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h2>
       <p className="about-description">
  <span className="centered-line">
    I’m <strong>Riya Kanani</strong>, a passionate <strong>full-stack developer</strong> </span>
  <span className="centered-line">
    Whether it's building front-end interfaces or solving back-end challenges,
     I thrive on </span> <span className="centered-line"> transforming ideas into elegant, functional products.</span>
</p>


<div style={{ marginTop: "4rem" }}>
  <Technologies />
</div>

  <Projects />
<Experience/>

<ConnectSection/>
<ContactForm/>
      </section>
    </main>
  );
};

export default Main;
