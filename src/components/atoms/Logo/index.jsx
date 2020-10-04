import React from 'react';
import { Link } from 'react-router-dom';

// import { Image } from './style';

// const logoSrc = '/static/img/logo/logo.svg';

const Logo = () => {
  return (
    <Link to="/">
      {/* <Image width="100%" src={logoSrc} alt="Logo" /> */}
      Feedback Portal
    </Link>
  );
};

export default Logo;
