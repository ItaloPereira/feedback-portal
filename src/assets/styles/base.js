import { createGlobalStyle } from 'styled-components';
import { Paragraph } from './typography';
import { Primary } from './colors';

const Base = createGlobalStyle`
  body {
    ${Paragraph};
    color: ${Primary};
  }
`;

export default Base;