import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes';
import { ApolloProvider } from '@apollo/client';
import { client } from './network/apollo-client';
import { Global, css } from '@emotion/core';

const globalStyles = css`
  // https://www.joshwcomeau.com/css/custom-css-reset/

  // Use a more-intuitive box-sizing model.
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  // Remove default margin
  * {
    margin: 0;
  }

  // Allow percentage-based heights in the application
  html,
  body {
    height: 100%;
  }

  // Typographic tweaks!
  // Add accessible line-height
  // Improve text rendering
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  // Improve media defaults
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  // Remove built-in form typography styles
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  // Avoid text overflows
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  // Create a root stacking context
  #root,
  #__next {
    isolation: isolate;
  }
`;


ReactDOM.render(
  <div data-app-init="">
    <Global styles={globalStyles} />
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  </div>,
  document.getElementById('react-app')
);