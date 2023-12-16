import React from 'react'
import "./Navbar.css"
import logo from '../../assets/images/logo.png'

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <img src={logo} alt="" className="logo" />
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
