'use client'

import { useState } from 'react';
import Container from '../Container';
import LanguageSwitcher from '../LanguageSwitcher';
import ExitButton from './ExitButton';
import Logo from './Logo';
import Link from 'next/link';
import ConfigPopup from './ConfigPopup';
import { Hamburger, SearchIcon } from "@/src/lib/icons";

const Header = ({children} : {
  children: React.ReactNode
}) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [closeButton, setShowClosebutton] = useState(false);
  
  // Handle the hamburger menu.
  const handleHamburger = () => {
    setActiveMenu(!activeMenu);
    setShowClosebutton(!closeButton)
  }

  return (
    <header className="header">
      <div className="header-container-top bg-shadow-gray border-b border-shadow-dark-gray">
        <Container className='container flex justify-between items-center header-top'>
          <ExitButton />
          <LanguageSwitcher />
        </Container>
      </div>
      <Container className='header-container container flex justify-between items-center'>
        <div className='site-info flex items-center'>
          <div className='hamburger lg:hidden p-2' onClick={handleHamburger}>
            <Hamburger />
          </div>
          <Logo />
        </div>
        <div className='menu-items flex'>
          <div className={activeMenu ? 'menu-active [&_nav]:block [&_nav]:w-1/2 [&_nav]:fixed [&_nav]:top-9 [&_nav]:p-4 [&_nav]:left-0 [&_nav]:transform [&_nav]:transition-transform [&_nav]:duration-300 [&_nav]:ease-in-out [&_nav]:bg-white [&_nav]:shadow-lg [&_nav]:z-50' : ''} >
            {children}
            { closeButton && 
                <span className='close-hamburger fixed left-4 top-9 z-50' onClick={handleHamburger}> x </span>
            }
          </div>
          <div className='global-items flex'>
            <Link className='me-10 cursor-pointer' href="/search" aria-label="Search">
              <SearchIcon />
            </Link>
            <ConfigPopup />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
