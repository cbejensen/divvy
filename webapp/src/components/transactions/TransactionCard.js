import React from 'react';
import { shape, string, bool, number } from 'prop-types';
import Card from '../card/Card';
import { css } from '@emotion/core';
import { MERCHANTS } from '../../constants/merchants';

export default function TransactionCard({ transaction }) {
  return (
    <Card css={cardStyle}>
      <div css={headerStyle}>
        <h3>{MERCHANTS.get(+transaction.merchant_id)}</h3>
        <p>${transaction.amount}</p>
      </div>
      <p>{transaction.description}</p>
    </Card>
  );
}

const cardStyle = css`
  cursor: pointer;
  &:hover h3 {
    color: var(--primary);
  }
`;

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

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
