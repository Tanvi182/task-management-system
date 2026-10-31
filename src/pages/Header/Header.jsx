import React from 'react'
import Logo from '../../components/Logo/Logo'
import NavManu from '../../components/NavMenu/NavMenu'
import Navbar from '../../components/Navbar/Navbar'

function Header() {
  return (
    <div className='container d-flex justify-content-around align-items-center border border-2 rounded-pill px-4 my-3'>
        <Logo/>
        <Navbar/>
        <NavManu/>
    </div>
  )
}

export default Header