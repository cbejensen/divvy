import { css } from '@emotion/core';
import { bool, node, string } from 'prop-types';
import React from 'react';

export default function List({ children, vertical = true, gap = '1rem' }) {
  return (
    <ul
      css={css`
        list-style: none;
        display: flex;
        flex-direction: ${vertical ? 'column' : 'row'};
        gap: ${gap};
      `}
    >
      {children}
    </ul>
  );
}

List.propTypes = {
  children: node,
  vertical: bool,
  gap: string
};
