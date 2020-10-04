import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';

import { SET_MODAL_OPENED, SET_MODAL_CLOSED } from './consts';

const initialState = {
  modal: {
    isOpened: false,
    component: null,
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  console.log(payload);

  switch (type) {
    case SET_MODAL_OPENED:
      return {
        ...state,
        modal: {
          isOpened: true,
          options: { ...action.options },
          component: <action.component {...action.props} />,
        },
      };

    case SET_MODAL_CLOSED:
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpened: false,
        },
      };

    default:
      return state;
  }
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppProvider };
export default AppContext;
