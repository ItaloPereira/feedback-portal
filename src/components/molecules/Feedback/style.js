import styled from 'styled-components'; 
import { Primary } from '@assets/styles/colors';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
  padding: 16px 16px;
  margin-bottom: 16px;
  text-align: center;
  background: ${lighten(0.85, Primary)};
`;

export const Text = styled.p``;

export const InfoIconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  font-size: 50px;
  transform: translateY(-50%);
  color: ${lighten(0.8, Primary)};
`;