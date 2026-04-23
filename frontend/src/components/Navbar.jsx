import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Navbar({
  darkMode,
  setDarkMode,
  scrollToAbout,
  scrollToSkills,
  scrollToAchievements,
  scrollToProjects,
  scrollToContact,
  scrollToCertifications,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="brand">&lt;/&gt; Rushi</div>

      <ul className="nav-items">
        <li onClick={scrollToAbout}>About</li>
        <li onClick={scrollToSkills}>Skills</li>
        <li onClick={scrollToProjects}>Projects</li>
        <li onClick={scrollToAchievements}>Achievements</li>
        <li onClick={scrollToCertifications}>Certifications</li>
        <li onClick={scrollToContact}>Contact</li>
      </ul>

      <div className="right-section">
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-500" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-700" />
          )}
        </button>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <p onClick={scrollToAbout}>About</p>
          <p onClick={scrollToSkills}>Skills</p>
          <p onClick={scrollToProjects}>Projects</p>
          <p onClick={scrollToAchievements}>Achievements</p>
          <p onClick={scrollToCertifications}>Certifications</p>
          <p onClick={scrollToContact}>Contact</p>
        </div>
      )}
    </nav>
  );
}
