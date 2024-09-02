import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <>
    <div>
        <nav className="container-nev">
          <div className="log">
            <img src="./image/brand_logo.png" alt="logo" />
          </div>
          <ul className="list">
            <li> <a href="">Menu</a> </li>
            <li><a href="">Location</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <div>
            <button className="btm">Login</button>
          </div>
        </nav>
      </div>
      </>
  )
}

export default Navbar