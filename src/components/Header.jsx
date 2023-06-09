import React from 'react'
import Search from './Search'
import ThemeIcon from './ThemeIcon'

const Header = ({name}) => {
  return (
    <>
    <div className=''>
    <h1 className='text-5xl p-3 font-extralight'>{name}</h1>
    <Search />
    </div>
    <ThemeIcon />
    </>
  )
}

export default Header