import { css } from "@emotion/core";

export const globalStyles = css`
  // Variables
  body {
    --primary: #b7550f;
    --error: #c03030;
    --heading-font: 'Righteous';
    &.konami {
      --primary: #f17e92;
      --heading-font: 'cursive';
    }
  }


  #react-app {
    height: 100%;
  }

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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--heading-font);
    letter-spacing: .2em;
    font-weight: normal;
    text-transform: uppercase;
  }

  // Create a root stacking context
  #root,
  #__next {
    isolation: isolate;
  }
`;