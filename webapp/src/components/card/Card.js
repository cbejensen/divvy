import React from 'react';
import { css } from '@emotion/core';
import { node } from 'prop-types';

export default function Card({ children, ...other }) {
  return <div css={cardStyle} {...other}>
    {children}
    <span className='arrow' css={arrowStyle}>&rarr;</span>
  </div>;
}

Card.propTypes = {
  children: node
};

const arrowStyle = css`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translate(calc(100% + 16px), -50%);
  transition: .3s;
  font-size: 2rem;
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
      transform: translate(0, -50%);
    }
  }
`;


