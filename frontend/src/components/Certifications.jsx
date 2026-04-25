import React from "react";

const Certifications = ({ darkMode, certificationsRef }) => {
  return (
    <section
      ref={certificationsRef}
      className={`certifications-section ${darkMode ? "dark" : "light"}`}
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
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M9 13h6" />
            <path d="M9 17h6" />
          </svg>
          <h1 className="section-title">Certifications</h1>
        </div>
        <div className="certifications-grid">
          <div className="certification-card">
            <h3 className="certification-title">Python (Basic)</h3>
            <p className="certification-provider">HackerRank</p>
            <a
              href="https://drive.google.com/file/d/1jrVoYJ0NFWbsxl0kAcp5kw18OUCfxuSI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="certification-link"
            >
              <span className="view-code">View Certificate</span>
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
          <div className="certification-card">
            <h3 className="certification-title">
              Programming Essentials in C++
            </h3>
            <p className="certification-provider">Cisco Networking Academy</p>
            <a
              href="https://drive.google.com/file/d/1-2su8eU0BFxlgtZQ792GIlW-FKktqQm_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="certification-link"
            >
              <span className="view-code">View Certificate</span>
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
          <div className="certification-card">
            <h3 className="certification-title">HTML, CSS, JavaScript</h3>
            <p className="certification-provider">Infosys Springboard</p>
            <a
              href="https://drive.google.com/file/d/1cdhvo4to86LY8sdNMNqrPi09eIgDy1Uv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="certification-link"
            >
              <span className="view-code">View Certificate</span>
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
          <div className="certification-card">
            <h3 className="certification-title">Soft Skills</h3>
            <p className="certification-provider">NPTEL</p>
            <a
              href="https://drive.google.com/file/d/1nqabH9m7BbBjYhYr9-HEHrSxjfHLsRM8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="certification-link"
            >
              <span className="view-code">View Certificate</span>
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
          <div className="certification-card">
            <h3 className="certification-title">Badges</h3>
            <p className="certification-provider">Leetcode</p>
            <a
              href="https://drive.google.com/file/d/1MhBk4T5NTRoX9xEmLuUz88zZc6APBiFV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="certification-link"
            >
              <span className="view-code">View Badges</span>
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
        </div>
      </div>
    </section>
  );
};

export default Certifications;
