import React from "react";

const Contact = ({ darkMode, contactRef }) => {
  return (
    <section
      ref={contactRef}
      className={`contact-section ${darkMode ? "dark" : "light"}`}
    >
      <div className="section-container">
        <div className="section-header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <h1 className="section-title">Contact</h1>
        </div>
        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <form action="" className="contact-form ">
              <div className="form-group">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="form-input"
                  placeholder="your@gmail.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="" className="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  id="message"
                  className="form-textarea"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button type="submit" className="contact-submit-btn">
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
                  className="lucide lucide-send w-4 h-4"
                >
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                  <path d="m21.854 2.147-10.94 10.939"></path>
                </svg>
                Send Message
              </button>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-info-text">
              <h3 className="contact-subtitle">Let's Connect</h3>
              <p className="contact-description">
                Interested in working together? Have a project in mind? Feel
                free to reach out. I'm always open to discussing new
                opportunities and ideas.
              </p>
            </div>
            <div className="contact-links">
              <a
                href="https://github.com/rushi-0369"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-github w-5 h-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span className="contact-link-text">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rushichokkakula2005/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 
  2.24 5 5 5h14c2.76 0 5-2.24 
  5-5V5c0-2.76-2.24-5-5-5zM7.12 
  20.45H3.56V9h3.56v11.45zM5.34 
  7.47c-1.14 0-2.06-.93-2.06-2.07 
  0-1.14.92-2.06 2.06-2.06 
  1.14 0 2.07.92 2.07 2.06 
  0 1.14-.93 2.07-2.07 
  2.07zM20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 
  0-2.13 1.44-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 
  1.62-1.85 3.33-1.85 3.56 0 4.22 2.34 
  4.22 5.38v6.36z"
                  />
                </svg>
                <span className="contact-link-text">LinkedIn</span>
              </a>
              <a
                href="mailto:23211a0556@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <span className="contact-link-text">Gmail</span>
              </a>
              <a
                href="tel:+917569906218"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.37 1.77.73 2.59a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.49-1.25a2 2 0 0 1 2.11-.45c.82.36 1.69.61 2.59.73A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="contact-link-text">Phone</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
