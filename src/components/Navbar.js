import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
 <nav className="navbar">
    <div className="logo">
    <img src="news app.png" alt=""/>
      <Link to="/general">News<span>Now</span></Link>
    </div>
    <ul className="nav-links">
      <li><Link to="/general">Home</Link></li>
      <li><Link to="/health">Health</Link></li>
      <li><Link to="/business">Business</Link></li>
      <li><Link to="/sports">Sports</Link></li>
      <li><Link to="/technology">Tech</Link></li>
      <li><Link to="/science">Science</Link></li>
      <li><Link to="/entertainment">Entertainment</Link></li>
    </ul>
        <button type='button' className='nav-button'>Sign In</button>
  </nav>
    </div>
  )
}
