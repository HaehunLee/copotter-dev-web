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
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
    flex-shrink: 0;
  }
  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    -moz-tab-size: 4;
    tab-size: 4;
  }
  html,
  body {
    height: 100%;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  button {
    background: none;
    border: 0;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ul {
    list-style: none;
  }

  * {
    font-family: NeoDunggeunmoPro;
  }

  html,
  body,
  #__next {
    height: 100%;
    scroll-behavior: smooth;
    background-color: ${theme.colors.bg};
  }
  /* reset.css end */

  svg[fill='none'] > path[fill='current'] {
    fill: ${theme.colors.black};
  }

  /** react-tooltip custom style */

  :root {
    /* --rt-color-white: #fff; */
    /* --rt-color-dark: ${theme.colors.black}; */
    /* --rt-color-success: #8dc572; */
    /* --rt-color-error: #be6464; */
    /* --rt-color-warning: #f0ad4e; */
    /* --rt-color-info: #337ab7; */
    /* --rt-opacity: 0.9; */

    /** react-tooltip custom style end */
  }

  h3 {
    font-size: 32px;
  }
  h4 {
    font-size: 28px;
  }
  h5 {
    font-size: 24px;
  }
  h6 {
    font-size: 20px;
  }
`;
