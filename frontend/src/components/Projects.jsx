import React from 'react'

const Projects = ({darkMode, projectsRef}) => {
  return (
      <section ref={projectsRef} className={`projects-section h-screen ${darkMode ? "dark" : "light"}`}>
      </section>
  )
}

export default Projects