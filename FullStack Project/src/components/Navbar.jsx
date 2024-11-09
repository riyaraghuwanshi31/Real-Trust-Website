import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className='navB'>
        <div className="left">
          <img src="/images/logo.svg" alt="" />
        </div>
        <div className="right">
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#about-product">ABOUT PRODUCT</a></li>
            <li><a href="#subs">SUBSCRIBE</a></li>
          </ul>
          <button> CONTACT </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
