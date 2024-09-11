import React from 'react'

export default function Navbar() {
  return (
    <div>
 <nav className="navbar">
    <div className="logo">
    <img src="news app.png" alt=""/>
      <a href="#">News<span>Now</span></a>
    </div>
    <ul className="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">World</a></li>
      <li><a href="#">Politics</a></li>
      <li><a href="#">Business</a></li>
      <li><a href="#">Sports</a></li>
      <li><a href="#">Tech</a></li>
      <li><a href="#">Entertainment</a></li>
    </ul>
        <button type='button' className='nav-button'>Sign In</button>
  </nav>
    </div>
  )
}
