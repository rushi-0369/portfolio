import React, { useEffect, useState } from "react";
const texts = ["Problem Solver", "Frontend Developer"];
const Hero = ({ darkMode }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const currentText = texts[textIndex];
    let speed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1200);
      }
      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);
  return (
    <div>
      <section className={`hero-section ${darkMode ? "dark" : "light"}`}>
        <div className="hero-container">
          <div className="hero-intro">
            <span>👋</span>
            <span>Hey! I'm</span>
          </div>

          <h1 className="hero-name">Rushi</h1>

          <h2 className="hero-role">
            {displayText}
            <span className="cursor-role">|</span>
          </h2>

          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">terminal</span>
            </div>

            <div className="terminal-body">
              <span className="prompt">$</span>
              <span>
                Let's build something amazing together!
                <span className="cursor">|</span>
              </span>
            </div>
          </div>
          <div className="down animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="lucide lucide-chevron-down w-10 h-10 mx-auto text-white/40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
