import React from 'react'
import logoImg from '/favicon.jpg'
import { Link } from 'react-router-dom'
function Logo() {
  return (
    <div>
        <Link to="/">
        <img src={logoImg} alt="LogoImg" style={{width:"100px", height:"auto"}}/>
        </Link>
    </div>
  )
}

export default Logo