import { css } from '@emotion/core';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Home } from './home';
import Layout from './layouts/layout';
import Transactions from './components/transactions/Transactions';
import Settings from './components/Settings';

function AppRouter() {
  const header = (
    <nav css={navStyle}>
      <div css={logoStyle}>
        <Link to="/">
          <img alt="Dyvi logo" src="src/assets/logo.png" />
        </Link>
      </div>
      <ul>
        <li>
          <Link css={linkStyle} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link css={linkStyle} to="/transactions">
            Transactions
          </Link>
        </li>
        <li>
          <Link css={linkStyle} to="/settings">
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
  const footer = <p>Made by Christian Jensen</p>;
  return (
    <Router>
      <Layout footer={footer} header={header} layout="default">
        <div css={contentStyle}>
          <Route component={Home} exact path="/" />
          <Route path="/transactions">
            <Transactions />
          </Route>
          <Route component={Settings} exact path="/settings" />
        </div>
      </Layout>
    </Router>
  );
}

export default AppRouter;

const navStyle = css`
  display: flex;
  gap: 1rem;
  > ul {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    list-style-type: none;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    overflow: hidden;
    width: 100vw;
    > div {
      margin: auto;
    }
    > ul {
      justify-content: space-between;
      gap: 0.25rem;
      padding: 1rem;
      padding-bottom: 2rem;
      overflow-x: scroll;
    }
  }
`;

const logoStyle = css`
  width: 200px;
  object-fit: contain;
  transition: transform 1s;
  .konami & {
    transform: rotate3d(7, 1, 4, 310deg);
  }
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
