import { Global, Theme, ThemeProvider, css } from '@emotion/react';

import { basicTheme } from './theme';

const StyleProvider = ({ children }: { children: React.ReactElement }) => {
  return (
    <ThemeProvider theme={basicTheme}>
      <Global styles={globalStyle({ theme: basicTheme })} />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;

const globalStyle = ({ theme }: { theme: Theme }) => css`
  @font-face {
    font-family: 'NeoDunggeunmoPro';
    font-weight: 400;
    src: url('/fonts/NeoDunggeunmoPro-Regular.woff') format('woff');
    font-display: fallback;
  }

  /* reset.css */
  * {
    box-sizing: border-box;
    font-family: NeoDunggeunmoPro;
  }

  html,
  body,
  #__next {
    height: 100%;
    scroll-behavior: smooth;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  button,
  hr {
    background: none;
    border: 0;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
    &:visited {
      color: inherit;
    }
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  textarea {
    background-color: transparent;
  }
  /* reset.css end */

  svg[fill='none'] > path[fill='current'] {
    fill: ${theme.colors.black};
  }

  /** react-tooltip custom style */

  :root {
    /* --rt-color-white: #fff; */
    /* --rt-color-dark: ${theme.colors.mono[400]}; */
    /* --rt-color-success: #8dc572; */
    /* --rt-color-error: #be6464; */
    /* --rt-color-warning: #f0ad4e; */
    /* --rt-color-info: #337ab7; */
    /* --rt-opacity: 0.9; */

    /** react-tooltip custom style end */
  }
`;
