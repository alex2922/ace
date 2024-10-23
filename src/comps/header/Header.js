import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import logo from "../../assets/acelogo.png"

function Header() {
  return (
   <>
    <div className='header parent'>
      <div className="container">


    <div className="logo">
      <img src={logo} alt="" />

    </div>

    <div className="links glass">

      <Link> Home </Link>
      <Link> About </Link>

      <Link> Pricing </Link>

      <Link> Contact </Link>

      <Link className='btn'> Sign In  </Link>



    </div>

      </div>
    </div>
   
   </>
  )
}

export default Header
