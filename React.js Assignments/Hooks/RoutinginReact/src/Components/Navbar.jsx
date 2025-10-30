import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <Link to={"/"}><li style={{listStyle:"none"}}>Home</li></Link>
                <Link to={"/about"}><li style={{listStyle:"none"}}>About</li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar