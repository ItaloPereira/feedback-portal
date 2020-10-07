import React from 'react'; 
import PropTypes from 'prop-types';

import Loader from '@components/atoms/Loader'
import Icon from '@components/atoms/Icon'

import { StyledButton } from './style';

const Button = ({ children, htmlType = 'button', icon, type, shape, loading, disabled, onClick }) => {
  return (
    <StyledButton type={htmlType} icon={icon} colorSchema={type} shape={shape} loading={loading ? 1 : 0} disabled={disabled} onClick={onClick}>
      <Loader size="small" colorSchema={type} />
      {icon ? (
        <div className="icon-wrapper">
          <Icon name={icon} />
        </div>
      ) : (
        <span>{children}</span>
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.string,
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
  type: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  shape: PropTypes.oneOf(['none', 'circle']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: undefined,
  icon: undefined,
  htmlType: 'button',
  type: 'primary',
  shape: 'none',
  loading: false,
  disabled: false,
  onClick: undefined,
};

export default Button;
