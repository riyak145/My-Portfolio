// src/components/ShinyText.jsx
import React from "react";
import "./ShinyText.css";

const ShinyText = ({ text, disabled, speed, className }) => {
  return (
    <span
      className={`shiny-text ${className}`}
      data-speed={speed}
      data-disabled={disabled}
    >
      {text}
    </span>
  );
};

export default ShinyText;
