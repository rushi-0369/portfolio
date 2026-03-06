import React from "react";

const Projects = ({ darkMode, projectsRef }) => {
  return (
    <section
      ref={projectsRef}
      className={`projects-section ${darkMode ? "dark" : "light"}`}
    >
      <div className="section-container">
        <div className="section-header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
            />
          </svg>
          <h1 className="section-title">Projects</h1>
        </div>
        <div className="project-grid">
          <div className="project-card">
            <div className="project-card-header">
              <div className="project-title-row">
                <h3 className="project-title">
                  SmartPrep AI – AI-Powered Adaptive Learning Platform
                </h3>
                <svg className="star"></svg>
              </div>
              <span className="featured">Academic Project</span>
            </div>
            <p className="description">
              Developed a full-stack AI-powered Learning Management System (LMS)
              enabling students to enroll in courses, take tests, and track
              learning progress. Implemented adaptive testing and AI-generated
              feedback to identify weak areas and provide personalized learning
              suggestions. Built responsive frontend using React and Tailwind
              CSS with secure authentication and course management features.
              Developed scalable backend APIs using Node.js, Express, and
              MongoDB for course data, user management, and performance
              analytics. Integrated AI modules to generate explanations,
              summaries, and personalized revision content based on test
              results.
            </p>
            <div className="project-link">
              <div className="keywords">
                <span className="keyword">React.js</span>
                <span className="keyword">Node.js</span>
                <span className="keyword">Express.js</span>
                <span className="keyword">MongoDB</span>
                <span className="keyword">Tailwind CSS</span>
                <span className="keyword">API Int.</span>
              </div>
              <a
                href="https://github.com/rushi-0369/smartprep-ai"
                target="_blank"
                className="link"
              >
                <span className="view-code">View Code</span>
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
          <div className="project-card">
            <div className="project-card-header">
              <div className="project-title-row">
                <h3 className="project-title">
                  StreamFlix - Netflixstyle Movie Streaming Web App
                </h3>
                <svg className="star"></svg>
              </div>
              <span className="featured">Personal Project</span>
            </div>
            <p className="description">
              Built a responsive Netflix-like movie browsing application using
              React and Vite. Integrated TMDB API to dynamically fetch and
              display Popular, Now Playing, Top Rated, and Upcoming movies.
              Implemented movie trailer playback, category-based browsing, and
              smooth UI navigation. Designed a modern responsive UI using CSS
              for seamless viewing across devices. Deployed the application on
              Vercel with environment variable management.
            </p>
            <div className="project-link">
              <div className="keywords">
                <span className="keyword">React</span>
                <span className="keyword">Vite</span>
                <span className="keyword">JavaScript</span>
                <span className="keyword">CSS</span>
                <span className="keyword">TMDB API</span>
                <span className="keyword">Vercel</span>
              </div>
              <a
                href="https://github.com/rushi-0369/streamflix/"
                target="_blank"
                className="link"
              >
                <span className="view-code">View Code</span>
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
      </div>
    </section>
  );
};

export default Projects;
