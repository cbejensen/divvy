import React, { Fragment } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GetTransactions, AddTransaction } from '../gql/transactions.gql';
import TransactionCard from '../components/transactions/TransactionCard';
import List from '../components/List';
import { button } from '../styles/button';
import { css } from '@emotion/core';

const transaction = {
  user_id: '1',
  description: 'Something',
  merchant_id: '2',
  debit: true,
  credit: false,
  amount: 12
};

export function Home() {
  const { loading, error, data = {} } = useQuery(GetTransactions);

  const [addTransaction] = useMutation(AddTransaction);

  if (loading) {
    return <Fragment>Loading...</Fragment>;
  }

  if (error) {
    return <Fragment>¯\_(ツ)_/¯</Fragment>;
  }

  const cards = data.transactions.map(t => (
    <li key={t.id}>
      <TransactionCard transaction={t} />
    </li>
  ));

  return (
    <Fragment>
      <h1 css={h1Style}>Transactions</h1>
      <List>{cards}</List>
      <button css={addTransactionButtonStyle} onClick={() => addTransaction({ variables: transaction })}>
        Add Transaction
      </button>
    </Fragment>
  );
}

const h1Style = css`
  color: var(--primary);
  margin-bottom: 2rem;
`;

const addTransactionButtonStyle = css`
  ${button}
  display: block;
  margin-top: 2rem;
  margin-left: auto;
`;
