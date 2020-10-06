import React from 'react'; 
import PropTypes from 'prop-types';

import Icon from '@components/atoms/Icon';

import {
  Container,
  Text,
  InfoIconWrapper,
} from './style';

const Feedback = ({ text }) => {
  return (
    <Container>
      <InfoIconWrapper>
        <Icon name="message-circle" />
      </InfoIconWrapper>
      <Text>{text}</Text>
    </Container>
  );
};

Feedback.propTypes = {
  text: PropTypes.string.isRequired,
};

Feedback.defaultProps = {
};

export default Feedback;
