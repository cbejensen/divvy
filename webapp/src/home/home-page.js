import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import { GetTransactions } from '../gql/transactions.gql';
import TransactionCard from '../components/transactions/TransactionCard';
import { button } from '../styles/button';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';
import { pageHeader } from '../styles/page-header';

export function Home() {
  const { loading, error, data = {} } = useQuery(GetTransactions);

  if (loading) {
    return <Fragment>Loading...</Fragment>;
  }

  if (error) {
    return <Fragment>¯\_(ツ)_/¯</Fragment>;
  }

  const cards = data.transactions.map(t => (
    <li key={t.id} >
      <TransactionCard transaction={t}/>
    </li>
  ));

  return (
    <Fragment>
      <h1 css={pageHeader}>Transactions</h1>
      <Link css={addTransactionStyle} to="/add" >
        + Add Transaction
      </Link>
      <ul css={listStyle}>{cards}</ul>
    </Fragment>
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
`