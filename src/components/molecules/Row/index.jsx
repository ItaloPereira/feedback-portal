import React from 'react'; 
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Avatar from '@components/atoms/Avatar';

import {
  Container,
  ContentWrapper,
  Title,
  Text,
  Strong,
} from './style';

const Row = ({ imageSrc, name, role, company, id }) => {
  return (
    <Link to={`/detail/${id}`}>
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
    </Link>
  );
};

Row.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

Row.defaultProps = {
  imageSrc: undefined,
};

export default Row;
