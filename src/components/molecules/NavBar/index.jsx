import React from 'react'; 
import Logo from '@components/atoms/Logo';
import { Viewport, LogoWrapper } from './style';

const NavBar = () => {
  return (
    <Viewport>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </Viewport>
  );
};

export default NavBar;
