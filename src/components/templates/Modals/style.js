import styled from 'styled-components';
import { HeadingMedium } from '@assets/styles/typography'
import { White, Primary } from '@assets/styles/colors';

const sizes = {
  large: '1006px',
  medium: '624px'
}

export const DefaultModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ${props => (props.isOpened ? 'scale(1)' : 'scale(0.95)')};
  max-width: ${props => sizes[props.size]};
  width: 100%;
  ${props => !props.noPadding && 'padding: 32px'};
  background: ${White};
  transition: 0.1s ease-in;
  box-sizing: border-box;
`;

export const Title = styled.h3`
  ${HeadingMedium};
  color: ${Primary};
`;