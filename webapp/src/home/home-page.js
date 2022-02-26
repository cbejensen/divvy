import { css } from '@emotion/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/card/Card';

export function Home() {
  return (
    <ul css={listStyle}>
      <li css={itemStyle}>
        <Link to="/transactions">
          <Card arrow={false}>Transactions</Card>
        </Link>
      </li>
    </ul>
  )
}

const listStyle = css`
  list-style: none;
  padding: 0;
  margin: 0;
  `

const itemStyle = css`
  font-size: 2rem;
  font-family: 'Righteous';
  text-transform: uppercase;
  a {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    color: var(--primary);
  }
`