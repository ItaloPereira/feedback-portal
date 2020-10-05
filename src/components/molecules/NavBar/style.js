import styled from 'styled-components';
import { Primary } from '@assets/styles/colors';

export const Viewport = styled.div`
  background: ${Primary};
  height: 85px;
`;

export const NavWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;