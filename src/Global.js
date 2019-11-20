import React from 'react'
import { Global, css } from '@emotion/core'
import { theme } from './utils/theme'

export default () => (
  <Global
    styles={css`
      html {
        font-size: 16px;
      }

      * {
        box-sizing: border-box;
      }
      ::-webkit-input-placeholder {
        color: ${theme.darkGray};
      }
      ::-moz-placeholder {
        color: ${theme.darkGray};
      }
      :-ms-input-placeholder {
        color: ${theme.darkGray};
      }
      :-moz-placeholder {
        color: ${theme.darkGray};
      }
      body {
        margin: 0;
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
          'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        background-color: ${theme.bg};
        line-height: 1.45;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      a {
        text-decoration: ${theme.primary};
      }
      p {
        margin-bottom: 1.25em;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        margin: 2.75rem 0 1rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        line-height: 1.15;
      }

      h1 {
        margin-top: 0;
        font-size: 2.488em;
      }

      h2 {
        font-size: 2.074em;
      }

      h3 {
        font-size: 1.728em;
      }

      h4 {
        font-size: 1.44em;
      }

      h5 {
        font-size: 1.2em;
      }

      small,
      .text_small {
        font-size: 0.833em;
      }

      mark {
        color: ${theme.primary};
        background: none;
        font-weight: 700;
      }

      .fade {
        position: absolute;
        top: 0;
        left: 0;
      }

      .fade-enter {
        opacity: 0;
        ${'' /* transform: scale(1.1); */}
      }

      .fade-enter-active {
        opacity: 1;
        ${'' /* transform: scale(1); */}
        transition: opacity 500ms, transform 500ms;
      }

      .fade-exit {
        opacity: 1;
        ${'' /* transform: scale(1); */}
      }

      .fade-exit-active {
        opacity: 0;
        ${'' /* transform: scale(0.9); */}
        transition: opacity 300ms, transform 300ms;
      }

      @keyframes float {
        100% {
          transform: translate(-5px, -15px);
        }
      }
    `}
  />
)
