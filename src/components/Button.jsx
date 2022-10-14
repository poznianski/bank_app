import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type="button" className={`font-poppins font-medium text-[18px] text-primary outline-none py-4 px-6 bg-blue-gradient rounded-[10px] ${styles}`}>
      Get Started
    </button>
  )
}

export default Button
