import { css } from '@emotion/core';
import { node } from 'prop-types';
import React from 'react';

export default function DefaultLayout({ header, footer, children }) {
  return (
    <div css={layoutStyle}>
      <header css={headerStyle}>
        <div css={maxWidthStyle}>{header}</div>
      </header>
      <main css={mainStyle}>{children}</main>
      <footer css={footerStyle}>
        <div css={maxWidthStyle}>{footer}</div>
      </footer>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: node,
  header: node,
  footer: node
};

const maxWidthStyle = css`
  max-width: 1000px;
  margin: auto;
`;

const layoutStyle = css`
  display: grid;
  grid-row-gap: 24px;
`;

const headerStyle = css`
  grid-row: 1;
  box-shadow: 4px 4px 8px black;
  /* hide the corner of the box shadow */
  padding-left: 20px;
  width: calc(100% + 20px);
  position: relative;
  left: -20px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
`;

const mainStyle = css`
  grid-row: 2;
  ${maxWidthStyle};
`;

const footerStyle = css`
  grid-row: 3;
`;