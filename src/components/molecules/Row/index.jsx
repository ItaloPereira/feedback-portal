import React from 'react'; 
import PropTypes from 'prop-types';

import Avatar from '@components/atoms/Avatar';

import {
  Container,
  ContentWrapper,
  Title,
  Text,
  Strong,
} from './style';

const Row = ({ imageSrc, name, role, company }) => {
  return (
    <Container>
      <Avatar imageSrc={imageSrc} />
      <ContentWrapper>
        <Title>{name}</Title>
        <Text>
          <Strong>{role}</Strong> 
          {' at '}
          <Strong>{company}</Strong>
        </Text>
      </ContentWrapper>
    </Container>
  );
};

Row.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

Row.defaultProps = {
  imageSrc: undefined,
};

export default Row;
