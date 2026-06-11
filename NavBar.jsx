import React from 'react'
import './Cardf.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <div id="box">
        <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="/About">
        <li>About</li>
        </Link>
        <Link to="/Task">
        <li>Task</li>
        </Link>
        
        </div>



    </div>
  )
}

export default NavBar