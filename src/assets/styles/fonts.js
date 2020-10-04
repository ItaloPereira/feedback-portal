import { createGlobalStyle } from 'styled-components';

const robotoLightWoff2 = '/static/fonts/text/roboto-light-webfont.woff2';
const robotoLightWoff = '/static/fonts/text/roboto-light-webfont.woff';

const robotoRegularWoff2 = '/static/fonts/text/roboto-regular-webfont.woff2';
const robotoRegularWoff = '/static/fonts/text/roboto-regular-webfont.woff';

const robotoMediumWoff2 = '/static/fonts/text/roboto-medium-webfont.woff2';
const robotoMediumWoff = '/static/fonts/text/roboto-medium-webfont.woff';

const robotoBoldWoff2 = '/static/fonts/text/roboto-bold-webfont.woff2';
const robotoBoldWoff = '/static/fonts/text/roboto-bold-webfont.woff';

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${robotoLightWoff2}) format('woff2'), url(${robotoLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${robotoRegularWoff2}) format('woff2'), url(${robotoRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${robotoMediumWoff2}) format('woff2'), url(${robotoMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${robotoBoldWoff2}) format('woff2'), url(${robotoBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
`;

export default Fonts;