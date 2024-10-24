import { FC } from 'react';
import Container from '../Container';
import LanguageSwitcher from '../LanguageSwitcher';
import ExitButton from './ExitButton';
import Logo from './Logo';
import Menu from '../Menu';
import Link from 'next/link';
import ConfigPopup from './ConfigPopup';
import { SearchIcon } from "@/src/lib/icons";

const Header: FC = () => (
  <header className="header">
    <Container className="header-container-top container flex justify-between items-center">
      <ExitButton />
      <LanguageSwitcher />
    </Container>
    <Container className='header-container container flex justify-between items-center'>
      <Logo />
      <div className='menu-items flex'>
        <Menu />
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

export default Header;
