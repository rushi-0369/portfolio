import React from 'react'

const Achievements = ({  darkMode,
  achievementsRef}) => {
  return (
      <section
        ref={achievementsRef}
        className={`achievements-section h-screen ${darkMode ? "dark" : "light"}`}
      >
      </section>
  )
}

export default Achievements