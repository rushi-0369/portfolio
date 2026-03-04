import React from "react";

const Hero = ({ darkMode }) => {
  return (
    <div>
      <section className={`hero-section ${darkMode ? "dark" : "light"}`}>
        <div className="hero-container">
          <div className="hero-intro">
            <span>👋</span>
            <span>Hey! I'm</span>
          </div>

          <h1 className="hero-name">Rushi</h1>

          <h2 className="hero-role">A Coder</h2>

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
