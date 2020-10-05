import React from 'react'; 
import Logo from '@components/atoms/Logo';
import { Viewport, NavWrapper } from './style';

const NavBar = () => {
  return (
    <Viewport>
      <NavWrapper>
        <Logo />
      </NavWrapper>
    </Viewport>
  );
};

export default NavBar;
