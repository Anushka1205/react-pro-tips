import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='head-tag'>
        <Link style={{color:"white", textDecoration:"none"}} to="/"><h1>Kalvium❤️</h1></Link>
        <div className='elements'>
          <Link style={{color:"white", textDecoration:"none"}} to="/contact"><p>Contacts</p></Link>
          <Link style={{color:"white", textDecoration:"none"}} to="/registration"><p>Regirtration Form</p></Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar