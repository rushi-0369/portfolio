import React from "react";

const Achievements = ({ darkMode, achievementsRef }) => {
  return (
    <section
      ref={achievementsRef}
      className={`achievements-section ${darkMode ? "dark" : "light"}`}
    >
      <div className="section-container">
        <div className="section-header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-6"
          >
            <path d="M8 21h8" />
            <path d="M12 17v4" />
            <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
            <path d="M5 6H3a2 2 0 0 0 2 2" />
            <path d="M19 6h2a2 2 0 0 1-2 2" />
          </svg>
          <h1 className="section-title">Achievements</h1>
        </div>

        <div className="achievement-grid">
          <div className="achievement-card">
            <span className="achievement-tag">📄 Publication</span>
            <h3 className="achievement-title">
              Enhance Your Productivity Through AI - Sahayak
            </h3>
            <p className="achievement-meta">IEEE ICCPCT 2025</p>
            <ul className="achievement-points">
              <li>
                Developed an AI-driven system for personalized productivity
                recommendations
              </li>
              <li>Analyzed user behavior using intelligence models</li>
            </ul>
            <a
              href="https://xplorestaging.ieee.org/document/11176553"
              target="_blank"
              className="achievement-link"
            >
              <span className="view-code">View Publications</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link w-4 h-4"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </a>
          </div>
          <div className="achievement-card">
            <span className="achievement-tag">💻 Coding</span>
            <h3 className="achievement-title">Data Structures & Algorithms</h3>
            <ul className="achievement-points">
              <li>Solved 150+ problems on LeetCode</li>
              <li>Practiced using Striver A2Z Sheet</li>
              <li>Learned from Apna College & CodeStoryWithMIK</li>
            </ul>
            <a
              href="https://leetcode.com/u/rushi_369/"
              target="_blank"
              className="achievement-link"
            >
              <span className="view-code">View LeetCode</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link w-4 h-4"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </a>
          </div>
          <div className="achievement-card">
            <span className="achievement-tag">🚀 Hackathons</span>
            <h3 className="achievement-title">Hackathon Participation</h3>
            <ul className="achievement-points">
              <li>Participated in multiple hackathons</li>
              <li>Built full-stack applications under time constraints</li>
              <li>Collaborated in team environments</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
