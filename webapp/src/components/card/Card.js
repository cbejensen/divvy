import React from 'react';
import { css } from '@emotion/core';
import { bool, node } from 'prop-types';

export default function Card({ children, arrow = true, ...other }) {
  return <div css={cardStyle} {...other}>
    {children}
    {arrow && <span className='arrow' css={arrowStyle}>&rarr;</span>}
  </div>;
}

Card.propTypes = {
  children: node,
  arrow: bool
};

const arrowStyle = css`
  position: absolute;
  right: 16px;
  bottom: 4px;
  transform: translateX(calc(100% + 16px));
  transition: .3s;
  font-size: 2rem;
  color: var(--primary);
`

const cardStyle = css`
  position: relative;
  padding: 1rem;
  border-left: 3px solid black;
  border-right: 3px solid black;
  border-radius: 24px;
  transition: .3s;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    border-color: var(--primary);
    > .arrow {
      transform: translateX(0);
    }
  }
`;


