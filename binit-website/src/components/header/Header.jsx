import React, { useState } from 'react';
import './header.css';

export const Header = () => {
  /*=============== Header Background ===============*/

  window.addEventListener('scroll', function () {
    const header = this.document.querySelector('.header');

    if (this.scrollY >= 80) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  });

  /*=============== Toggle Menu ===============*/

  const [showMenu, setShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <div className='header'>
      <nav className='nav container'>
        <a
          href='index.html'
          className='nav__logo'>
          Binit
        </a>

        <div className={showMenu ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a
                href='#how_it_works'
                onClick={() => setActiveNav('#how_it_works')}
                className={
                  activeNav === '#how_it_works'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }>
                <i className='uil uil-estate nav__icon'></i> How it works
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#about'
                onClick={() => setActiveNav('#about')}
                className={
                  activeNav === '#about' ? 'nav__link active-link' : 'nav__link'
                }>
                <i className='uil uil-user nav__icon'></i> About Us
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#faq'
                onClick={() => setActiveNav('#faq')}
                className={
                  activeNav === '#faq' ? 'nav__link active-link' : 'nav__link'
                }>
                <i className='uil uil-file-alt nav__icon'></i> FAQ
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#contact_us'
                onClick={() => setActiveNav('#contact_us')}
                className={
                  activeNav === '#contact_us'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }>
                <i className='uil uil-briefcase-alt nav__icon'></i> Contact us
              </a>
            </li>
          </ul>

          <i
            className='uil uil-times nav__close'
            onClick={() => setShowMenu(!showMenu)}></i>
        </div>

        <div
          className='nav__toggle'
          onClick={() => setShowMenu(!showMenu)}>
          <i className='uil uil-apps'></i>
        </div>
      </nav>
    </div>
  );
};
