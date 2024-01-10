import React from 'react'
import './style.css'
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Portfolio</h1>
      <div className="menulist">
         <Link className="listMenu">Home</Link>
         <Link className="listMenu">About</Link>
         <Link className="listMenu">Portfolio</Link>
         <Link className="listMenu">Clients</Link>
      </div>
    </div>
  )
}

export default Navbar;
