import React from 'react'

const Hero = ({ title }) => {
  return (
    <div
      className="relative w-full h-90 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/Contact.png')",
      }}
    >
      <h2 className="text-4xl font-bold text-white">{title}</h2>
    </div>
  )
}

export default Hero
