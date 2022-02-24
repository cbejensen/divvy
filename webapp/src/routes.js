import { css } from '@emotion/core';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Home } from './home';

function AppRouter() {
  return (
    <Router>
      <div css={layoutStyle}>
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
        <div className="main-content" css={contentStyle}>
          <Route component={Home} exact path="/" />
          <Route component={() => <div>Content for /another route</div>} exact path="/another" />
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;

const layoutStyle = css`
  display: grid;
  grid-row-gap: 24px;
`;

const navStyle = css`
  grid-row: 1;
  display: flex;
  box-shadow: 4px 4px 8px black;
  /* hide the corner of the box shadow */
  padding-left: 20px;
  width: calc(100% + 20px);
  position: relative;
  left: -20px;

  & > ul {
    padding: 1rem;
    padding-top: 30px;
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    list-style-type: none;
  }

  & > ul > li:not(:first-of-type) {
    margin-left: 16px;
  }
`;

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
    background-color: black;
    color: white;
  }
`;
