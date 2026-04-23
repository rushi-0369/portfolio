import React, { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import "./components/Navbar.css";
import Hero from "./components/Hero.jsx";
import "./components/Hero.css";

import "./components/About.css";
import "./components/Skills.css";
import "./components/Projects.css";
import "./components/Achievements.css";
import "./components/Certifications.css";
import "./components/Contact.css";

import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import Certifications from "./components/Certifications.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const achievementsRef = useRef(null);
  const certificationsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToAchievements={() => scrollToSection(achievementsRef)}
        scrollToCertifications={() => scrollToSection(certificationsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />

      <Hero darkMode={darkMode} contactRef={contactRef} />

      <About darkMode={darkMode} aboutRef={aboutRef} />

      <Skills darkMode={darkMode} skillsRef={skillsRef} />

      <Projects darkMode={darkMode} projectsRef={projectsRef} />

      <Achievements darkMode={darkMode} achievementsRef={achievementsRef} />

      <Certifications
        darkMode={darkMode}
        certificationsRef={certificationsRef}
      />

      <Contact darkMode={darkMode} contactRef={contactRef} />
    </div>
  );
};

export default App;
