import React, { useState } from 'react';
import { pageHeader } from '../../styles/page-header';
import { button } from '../../styles/button';
import { GetTransaction, UpdateTransaction, RemoveTransaction } from '../../gql/transactions.gql';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { css } from '@emotion/core';
import { MERCHANTS } from '../../constants/merchants';
import TransactionForm from './TransactionForm';
import Number from '../Number';

function TransactionDetails() {
  const { transactionId } = useParams();

  const { loading, error, data = {} } = useQuery(GetTransaction, {
    variables: {
      id: transactionId
    }
  });

  const [updateTransaction] = useMutation(UpdateTransaction, {
    onCompleted: () => {
      setEditing(false);
    }
  });

  const history = useHistory();
  const [removeTransaction] = useMutation(RemoveTransaction, {
    variables: {
      id: transactionId
    },
    refetchQueries: ['GetTransactions'],
    onCompleted: () => {
      history.push('/transactions');
    }
  });

  const [editing, setEditing] = useState(false);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <>
        <p>
          Sorry, unable to find that one!
          <span aria-label="eyes emoji" role="img">
            👀
          </span>
        </p>
        <Link to="/transactions">View All Transactions</Link>
      </>
    );
  }

  const { merchant_id: merchantId, description, amount, credit } = data.transaction;

  function handleSubmit(transaction) {
    const { id, merchantId, amount, description, credit } = transaction;
    updateTransaction({
      variables: {
        id,
        merchant_id: merchantId,
        amount,
        description,
        credit: credit,
        debit: !credit,
        user_id: '1'
      },
      refetchQueries: ['GetTransaction']
    });
  }
  function handleCancel() {
    setEditing(false);
  }
  if (editing) {
    return (
      <TransactionForm
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
        transaction={{ ...data.transaction, merchantId }}
      />
    );
  }

  return (
    <>
      <h1 css={pageHeader}>{MERCHANTS.get(+merchantId)}</h1>
      <div css={subtitleStyle}>
        <p>
          $<Number value={amount} />
        </p>
        <div>{credit ? 'credit' : 'debit'}</div>
      </div>
      <p css={descriptionStyle}>{description}</p>
      <div css={actionsStyle}>
        <button css={removeButtonStyle} onClick={() => removeTransaction()}>
          Delete
        </button>
        <button css={buttonStyle} onClick={() => setEditing(true)}>
          Edit
        </button>
      </div>
    </>
  );
}

const subtitleStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
  > div {
    padding: 0.25rem 0.5rem;
    color: white;
    background: darkgrey;
    text-transform: uppercase;
  }
`;

const actionsStyle = css`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const descriptionStyle = css`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const buttonStyle = css`
  ${button}
  display: block;
`;

const removeButtonStyle = css`
  ${button}
  background-color: var(--error);
`;

export default TransactionDetails;
