import React from 'react';
import { Link } from 'react-router-dom';

import { Text } from './style';

const Logo = () => {
  return (
    <Link to="/">
      <Text>
        Feedback Portal
      </Text>
    </Link>
  );
};

export default Logo;
