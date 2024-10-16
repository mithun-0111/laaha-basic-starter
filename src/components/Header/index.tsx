'use client'

import { FC } from 'react';
import Container from '../Container';
import LanguageSwitcher from '../LanguageSwitcher';
import ExitButton from './ExitButton';
import Logo from './Logo';
import Menu from '../Menu';

const Header: FC = () => (
  <header className="header">
    <Container className="header-container-top container flex justify-between items-center">
      <ExitButton />
      <LanguageSwitcher />
    </Container>
    <Container className='header-container container flex justify-between items-center'>
      <Logo />
      <Menu />
    </Container>
  </header>
);

export default Header;
