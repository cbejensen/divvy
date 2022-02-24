import { css } from '@emotion/core';
import { node } from 'prop-types';
import React from 'react';

export default function CardHeader({ children }) {
  return <div css={headerStyle}>{ children }</div>;
}

const headerStyle = css`
  font-size: 3rem;
  font-weight: bold;
`

CardHeader.propTypes = {
  children: node
}