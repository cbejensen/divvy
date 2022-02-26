import React from 'react';
import { css } from '@emotion/core';
import { node } from 'prop-types';

export default function Card({ children, ...other }) {
  return <div css={cardStyle} {...other}>
    {children}
  </div>;
}

Card.propTypes = {
  children: node,
};

const cardStyle = css`
  position: relative;
  padding: 1rem;
  border-left: 3px solid black;
  border-right: 3px solid black;
  border-radius: 24px;
  transition: .3s;
  cursor: pointer;
  &:hover {
    border-color: var(--primary);
  }
`;


