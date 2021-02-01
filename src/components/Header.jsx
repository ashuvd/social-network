import React from 'react';
import logo from "../assets/images/logo-social.png";

export const Header = () => {
  return (
    <header className='header'>
      <div className="header__logo">
        <img src={logo} alt="logo" className='header__img'/>
      </div>
    </header>
  )
}
