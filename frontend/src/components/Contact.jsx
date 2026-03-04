import React from 'react'

const Contact = ({  darkMode,
  contactRef,}) => {
  return (
      <section ref={contactRef} className={`contact-section h-screen ${darkMode ? "dark" : "light"}`}>
        
      </section>
  )
}

export default Contact