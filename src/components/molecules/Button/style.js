import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { Primary, White } from '@assets/styles/colors';
import { LabelMedium } from '@assets/styles/typography';

const colorSchemas = {
  primary: {
    background: Primary,
    hoverBackground: lighten(0.1, Primary),
    borderColor: Primary,
    color: White,
  },
  secondary: {
    background: White,
    hoverBackground: darken(0.05, White),
    borderColor: Primary,
    color: Primary,
  },
  ghost: {
    background: 'transparent',
    hoverBackground: lighten(0.8, Primary),
    borderColor: 'transparent',
    color: Primary,
  }
};

const shapes = {
  none: '0',
  circle: '50%',
}

export const StyledButton = styled.button`
  width: ${props => props.shape === 'none' ? '100%' : '42px'};%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => colorSchemas[props.colorSchema].background};
  padding: 8px;
  border: 1px solid ${props => colorSchemas[props.colorSchema].borderColor};
  border-radius: ${props => shapes[props.shape]};
  outline: none;
  cursor: pointer;
  transition: .3s;
  opacity: ${props => props.disabled ? '.7' : '1'};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};

  &:hover {
    background: ${props => colorSchemas[props.colorSchema].hoverBackground}
  }

  &:active {
    background: ${props => colorSchemas[props.colorSchema].background};
    transition: none;
  }

  .loader {
    position: ${props => props.icon ? 'absolute' : 'static'};
    opacity: ${props => props.loading ? '1' : '0'};
    visibility: ${props => props.loading ? 'visible' : 'hidden'};
    ${props => !props.icon && `margin-right: ${props.loading ? '10px' : '-16px'};`}
    display: inline-block;
    ${props => !props.icon && `transition: all .3s cubic-bezier(.645,.045,.355,1);`}
  }

  .icon-wrapper {
    transform: translateY(-2px);
  }

  .icon-wrapper span {
    font-size: 22px;
    color: ${props => props.loading ? 'transparent' : Primary};
  }

  span {
    ${LabelMedium};
    color: ${props => colorSchemas[props.colorSchema].color};
  }
`;

export default StyledButton;