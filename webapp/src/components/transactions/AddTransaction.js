import React from 'react';
import { pageHeader } from '../../styles/page-header';
import TransactionForm from './TransactionForm';
import { AddTransaction as CreateTransaction } from '../../gql/transactions.gql';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';

export default function AddTransaction() {
  const [addTransaction, { loading, error }] = useMutation(CreateTransaction, {
    onCompleted: () => {
      history.push(`/transactions`);
    },
    refetchQueries: ['GetTransactions']
  });

  const history = useHistory();

  const handleSubmit = transaction => {
    const { merchantId, amount, description, credit } = transaction;
    addTransaction({
      variables: {
        id: uuidv4(),
        merchant_id: merchantId,
        amount,
        description,
        credit: credit,
        debit: !credit,
        user_id: '1'
      }
    });
  };
  return (
    <>
      <h1 css={pageHeader}>Add Transaction</h1>
      <TransactionForm customError={error ? error.message : ''} handleSubmit={handleSubmit} loading={loading} />
    </>
  );
}
