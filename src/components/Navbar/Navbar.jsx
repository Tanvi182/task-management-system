import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='container d-flex justify-content-center gap-3 '>
        <Link to="/home" className='text-dark text-decoration-none'>
            Home
        </Link>
        <Link to="/about" className='text-dark text-decoration-none'>
            About
        </Link>
        <Link to="/service" className='text-dark text-decoration-none'>
            Service
        </Link>
        <Link to="/testimonials" className='text-dark text-decoration-none'>
            Testimonials
        </Link>
    </div>
  )
}

export default Navbar