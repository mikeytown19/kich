import React from 'react';
import { Global, css } from '@emotion/react';
import { colors } from './colors';
import changeColors from '../utils/themeColors';

changeColors(colors);

export const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        padding: 0;
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

      }
      * {
        box-sizing: inherit;
        &::before,
        &::after {
          box-sizing: inherit;
        }
        &::-moz-focus-inner {
          border: 0;
        }
      }


      pre {
        border-radius: var(--radius);
        position: relative;
        white-space: pre;
        font-size: 1.7rem;
      }

      /* h3,
      h4,
      p,
      ul,
      li,
      input,
      select,
      textarea,
      button {
        line-height: 32px;
      } */

      :root {
      ${colors}
    }
  `}
  />
);
