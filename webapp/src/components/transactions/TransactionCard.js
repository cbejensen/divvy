import React from 'react';
import { shape, string, bool, number } from 'prop-types';
import Card from '../card/Card';
import CardHeader from '../card/CardHeader';
import { css } from '@emotion/core';

export default function TransactionCard({ transaction }) {
  return (
    <Card css={cardStyle}>
      <CardHeader>{transaction.merchant_id}</CardHeader>
      <p>{transaction.amount}</p>
    </Card>
  );
}

const cardStyle = css`
  cursor: pointer;
`

TransactionCard.propTypes = {
  transaction: shape({
    id: string,
    user_id: string,
    description: string,
    merchant_id: string,
    debit: bool,
    credit: bool,
    amount: number
  })
};
