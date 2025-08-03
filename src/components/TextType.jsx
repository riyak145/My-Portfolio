// src/components/TextType.jsx
import React, { useEffect, useState } from "react";
import "./TextType.css";

const TextType = ({
  text = [],
  typingSpeed = 100,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (charIndex < text[textIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % text.length);
        setIsTyping(true);
      }, pauseDuration);
    }

    return () => clearTimeout(timeout);
  }, [text, textIndex, charIndex, isTyping, typingSpeed, pauseDuration]);

  return (
    <span className="text-type">
      {displayedText}
      {showCursor && <span className="text-type__cursor">{cursorCharacter}</span>}
    </span>
  );
};

export default TextType;
