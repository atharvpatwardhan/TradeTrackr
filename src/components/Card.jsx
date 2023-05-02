import React, { useContext } from 'react'
import themeContext from '../context/themeContext'

const Card = ({children}) => {

  const {darkMode} = useContext(themeContext);


  return (
    <div className={`w-full h-full rounded-md relative p-8 border-2  ${darkMode ? "bg-gray-900 text-white border-gray-700": "bg-white border-gray-300"}`}>
        {children}
    </div>
  )
}

export default Card