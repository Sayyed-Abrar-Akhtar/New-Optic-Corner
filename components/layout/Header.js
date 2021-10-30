import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <section className='logo'>
        <a href='#' className='logo__link'>
          <img src='#' alt='New Optic Corner' className='logo__image' />
        </a>
      </section>
      <nav className='nav'>
        <ul className='nav__lists'>
          <a href='#' className='nav__link'>
            <li className='nav__list'>Home</li>
          </a>
          <a href='#' className='nav__link'>
            <li className='nav__list'>Account</li>
          </a>
          <a href='#' className='nav__link'>
            <li className='nav__list'>Cart</li>
          </a>
          <a href='#' className='nav__link'>
            <li className='nav__list'>Contact us</li>
          </a>
          <a href='#' className='nav__link'>
            <li className='nav__list'>About us</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
