import React from 'react'; 
import PropTypes from 'prop-types';

import { Container, Img } from './style';

const Avatar = ({ imageSrc, size }) => {
  return (
    <Container size={size}>
      {imageSrc && <Img src={imageSrc} />}
    </Container>
  );
};

Avatar.propTypes = {
  imageSrc: PropTypes.string,
  size: PropTypes.oneOf(['small', 'big'])
};

Avatar.defaultProps = {
  imageSrc: undefined,
  size: 'small',
};

export default Avatar;
