import { css } from '@emotion/core';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Home } from './home';
import AddTransaction from './components/transactions/AddTransaction';
import Layout from './layouts/layout';

function AppRouter() {
  const header = (
    <nav css={navStyle}>
      <div css={logoStyle}>
        <img alt="Dyvi logo" src="src/assets/logo.png" />
      </div>
      <ul>
        <li>
          <Link css={linkStyle} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link css={linkStyle} to="/another">
            Another route
          </Link>
        </li>
      </ul>
    </nav>
  );
  const footer = (
    <p css={footerStyle}>Made by Christian Jensen</p>
  )
  return (
    <Router>
      <Layout footer={footer} header={header} layout="default">
        <div css={contentStyle}>
          <Route component={Home} exact path="/" />
          <Route component={() => <div>Content for /another route</div>} exact path="/another" />
          <Route component={() => <AddTransaction />} exact path="/add" />
        </div>
      </Layout>
    </Router>
  );
}

export default AppRouter;

const navStyle = css`
  display: flex;
  & > ul {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    list-style-type: none;
  }

  & > ul > li:not(:first-of-type) {
    margin-left: 16px;
  }
`;

const footerStyle = css`
  padding: 3rem;
  background: black;
  color: white;
  text-align: center;
`

const logoStyle = css`
  width: 200px;
  object-fit: contain;
`;

const contentStyle = css`
  grid-row: 2;
  padding: 0 48px;
`;

const linkStyle = css`
  text-decoration: none;
  color: black;
  padding: 12px 8px;
  border-radius: 8px;
  font-weight: bold;
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`;
