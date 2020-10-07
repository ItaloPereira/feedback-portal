import React from 'react';
import PropTypes from 'prop-types';
import { White } from '@assets/styles/colors';

import Viewport from './style';

const colors = {
  primary: {
    bg: 'rgba(0, 0, 0)',
    fg: White,
  },
  secondary: {
    bg: 'rgba(255, 255, 255)',
    fg: White,
  },
  ghost: {
    bg: 'rgba(0, 0, 0)',
    fg: White,
  },
};

const Loader = ({ size, colorSchema }) => (
  <Viewport className="loader" size={size}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      stroke={colors[colorSchema].fg}
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(2 2)" strokeWidth="3">
          <circle stroke={colors[colorSchema].bg} cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18" strokeLinecap="round">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  </Viewport>
);

Loader.propTypes = {
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  colorSchema: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
};

Loader.defaultProps = {
  size: 'medium',
  colorSchema: 'primary',
};

export default Loader;