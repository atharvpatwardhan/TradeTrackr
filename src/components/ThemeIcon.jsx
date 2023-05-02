import React, { useContext } from 'react'
import themeContext from '../context/themeContext'
import { Icon } from '@iconify/react';


const ThemeIcon = () => {
  const {darkMode,setDarkMode} = useContext(themeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }


  return (
    <button className={`rounded-lg border-1 border-neutral-400 absolute p-2 right-8 top-32 sm:top-36 lg:right-11 shadow-sm hover:scale-110 transition duration-500 ${darkMode ? "shadow-gray-100" : null}`} onClick={toggleDarkMode}>
        {darkMode ? <Icon icon="ph:sun-bold" height={30} /> : <Icon icon="ph:moon-bold" height={30} />}
    </button>
  )
}

export default ThemeIcon