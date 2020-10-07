import React, { useContext } from 'react';

import AppContext from '@context/appContext';
import { SET_MODAL_CLOSED } from '@context/consts';

import { Container, RemoveBodyScroll, Background } from './style';

const Modal = () => {
  const { state, dispatch } = useContext(AppContext);
  const { component, isOpened, options } = state.modal;

  const handleBackgroundClick = () => {
    if (options.disableBackgroundClose) {
      return false;
    }

    return dispatch({ type: SET_MODAL_CLOSED });
  };

  return (
    <>
      <Container isOpened={isOpened}>
        <Background onClick={() => handleBackgroundClick()} isOpened={isOpened} />
        {component}
      </Container>

      {isOpened && <RemoveBodyScroll />}
    </>
  );
};
export default Modal;