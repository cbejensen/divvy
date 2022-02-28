import React from 'react';
import { pageHeader } from '../../styles/page-header';
import { button } from '../../styles/button';
import { GetTransaction } from '../../gql/transactions.gql';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { css } from '@emotion/core';
import { MERCHANTS } from '../../constants/merchants';

function Transaction() {
  const { transactionId } = useParams();

  const { loading, error, data = {} } = useQuery(GetTransaction, {
    variables: {
      id: transactionId
    }
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <>
        <p>Sorry, couldn't find that one! 👀</p>
        <Link to="/transactions">View All Transactions</Link>
      </>
    );
  }

  const { merchant_id: merchantId, description, amount, credit } = data.transaction;

  return (
    <>
      <h1 css={pageHeader}>{MERCHANTS.get(+merchantId)}</h1>
      <div css={subtitleStyle}>
        <p>${amount}</p>
        <div>{credit ? 'credit' : 'debit'}</div>
      </div>
      <p css={descriptionStyle}>{description}</p>
      <button css={buttonStyle}>Edit</button>
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
    padding: .25rem .5rem;
    color: white;
    background: darkgrey;
    text-transform: uppercase;
  }
  `;

const descriptionStyle = css`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`

const buttonStyle = css`
  ${button}
  display: block;
  margin: auto;
`

export default Transaction;
