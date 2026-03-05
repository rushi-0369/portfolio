import React from 'react'

const Achievements = ({  darkMode,
  achievementsRef}) => {
  return (
      <section
        ref={achievementsRef}
        className={`achievements-section ${darkMode ? "dark" : "light"}`}
      >
      </section>
  )
}

export default Achievements