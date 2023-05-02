import React, { useContext } from 'react'
import themeContext from '../context/themeContext';

const MainHeader = () => {
    const {darkMode} = useContext(themeContext);

  return (
    <div className={`text-5xl w-full text-center font-quicksand ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <br />
        <span className={darkMode ? "text-orange-500" : "text-indigo-500"}>T  rade Trackr</span>
    </div>
  )
}

export default MainHeader