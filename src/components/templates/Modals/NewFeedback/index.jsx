import React, { useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';

import AppContext from '@context/appContext';

import Icon from '@components/atoms/Icon';

import { DefaultModalContent, Title } from '../style';

import {
  CloseContainer,
} from './style';

const NewFeedback = () => {
  const { state, dispatch } = useContext(AppContext);
  
  function closeModal() {
    return dispatch({ type: 'SET_MODAL_CLOSED' });
  }

  useEffect(() => {
  }, [state.modal.isOpened]);

  return (
    <DefaultModalContent size="large" isOpened={state.modal.isOpened}>
      <CloseContainer onClick={closeModal}>
        <Icon name="close" />
      </CloseContainer>
      <Title>New Feedback</Title>
        
    </DefaultModalContent>
  );
};

// NewFeedback.propTypes = {
// };

export default NewFeedback;