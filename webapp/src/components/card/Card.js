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
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  padding: 8px 16px;
  border-radius: 24px 0 24px 0;
  transition: .3s;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    box-shadow: 2px 2px 8px black;
    .arrow {
      transform: translate(0, -50%);
    }
  }
`;


