import React, { useContext } from 'react'
import themeContext from '../context/themeContext';

const Footer = () => {
    const {darkMode} = useContext(themeContext);

  return (
    <div  className={`text-lg w-full text-center font-quicksand ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        <h1>Made by <span className={darkMode ? "text-orange-500" : "text-indigo-500"}><a href='https://www.linkedin.com/in/atharv-patwardhan/' target='_blank' rel="noreferrer">Atharv Patwardhan</a></span></h1>
    </div>
  )
}

export default Footer