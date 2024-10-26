import "./Header.scss"
import { Link } from 'react-router-dom'
import logo from "../../assets/acelogo.png"
import React, { useEffect, useState } from 'react';


function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
   <>
    <div className={`header parent ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">


    <div className="logo ">
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
