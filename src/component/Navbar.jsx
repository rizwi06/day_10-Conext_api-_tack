import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' nav'>
        <NavLink to='/'
      style={({ isActive }) => ({
          color: isActive ? "red" : "white",
            borderBottom: isActive ? "2px solid red" : ''
        })}
        >Home</NavLink>
        <NavLink to='/about'
        style={({isActive})=>({
            color:isActive ? "red" : "white",
             borderBottom: isActive ? "2px solid red" : ''
        })}
        >About</NavLink>
        <NavLink to='/contact'
        style={({isActive})=>({
            color:isActive ? "red" : "white",
             borderBottom: isActive ? "2px solid red" : ''
        })}
        >Contact</NavLink>
    </div>
  )
}

export default Navbar