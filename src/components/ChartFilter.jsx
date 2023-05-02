import React, { useContext } from 'react'
import themeContext from '../context/themeContext';

const ChartFilter = ({text,active,onClick}) => {

  const {darkMode} = useContext(themeContext);

  return (
    <button onClick={onClick} className={darkMode ? `w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer  ${active ?  "bg-orange-500 border-orange-700 text-white":"border-orange-300  hover:bg-orange-400 hover:text-white hover:scale-90 transition duration-700"}` : `w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer  ${active ?  "bg-indigo-600 border-indigo-700 text-white":"border-indigo-300 hover:bg-indigo-400 hover:text-white hover:scale-90 transition duration-700"}`}>
        {text}
    </button>
  )
}

export default ChartFilter