import React from 'react';
import { useQuery } from '@apollo/client';
import { GetTransactions } from '../../gql/transactions.gql';
import TransactionCard from './TransactionCard';
import { button } from '../../styles/button';
import { css } from '@emotion/core';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { pageHeader } from '../../styles/page-header';
import AddTransaction from './AddTransaction';
import TransactionDetails from './TransactionDetails';

export default function Transactions() {
  const { loading, error, data = {} } = useQuery(GetTransactions);

  let rendered;
  let { path, url } = useRouteMatch();

  if (loading) {
    rendered = <p>Loading...</p>;
  } else if (error) {
    rendered = <p>¯\_(ツ)_/¯ not sure what happened there</p>;
  } else {
    const cards = [...data.transactions].reverse().map(transaction => (
      <li css={listItemStyle} key={transaction.id}>
        <Link to={`${url}/${transaction.id}`}>
          <TransactionCard transaction={transaction} />
        </Link>
      </li>
    ));
    rendered = (
      <>
        <h1 css={pageHeader}>Transactions</h1>
        <Link css={addTransactionStyle} to={`${url}/add`}>
          + Add Transaction
        </Link>
        <ul css={listStyle}>{cards}</ul>
      </>
    );
  }

  return (
    <>
      <Switch>
        <Route exact path={path}>
          {rendered}
        </Route>
        <Route exact path={`${path}/add`}>
          <AddTransaction />
        </Route>
        <Route path={`${path}/:transactionId`}>
          <TransactionDetails />
        </Route>
      </Switch>
    </>
  );
}

const addTransactionStyle = css`
  ${button}
  display: block;
  margin: 1rem auto;
  width: fit-content;
  text-decoration: none;
`;

const listStyle = css`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const listItemStyle = css`
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  > a {
    text-decoration: none;
    color: inherit;
  }
`;
