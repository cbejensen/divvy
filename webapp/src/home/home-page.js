import React, { Fragment } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GetTransactions, AddTransaction } from '../gql/transactions.gql';
import { TxTable } from '../components/transactions/TxTable';

const transaction = {
  user_id: '1',
  description: 'Something',
  merchant_id: '2',
  debit: true,
  credit: false,
  // amount: 12
};

export function Home() {
  const { loading, error, data = {} } = useQuery(GetTransactions);
  console.log(data)

  const [addTransaction, { data: d, loading: l, error: e }] = useMutation(AddTransaction);
  console.log(d, l, e);

  if (loading) {
    return <Fragment>Loading...</Fragment>;
  }

  if (error) {
    return <Fragment>¯\_(ツ)_/¯</Fragment>;
  }

  return (
    <Fragment>
      <TxTable data={data.transactions} />
      <button onClick={() => addTransaction({ variables: transaction })}>add</button>
    </Fragment>
  );
}
