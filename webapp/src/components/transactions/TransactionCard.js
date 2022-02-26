import React from 'react';
import { shape, string, bool, number } from 'prop-types';
import Card from '../card/Card';
import { css } from '@emotion/core';
import getMerchantName from '../../utils/getMerchantName';

export default function TransactionCard({ transaction }) {
  return (
    <Card css={cardStyle}>
      <div css={headerStyle}>
        <h3>{getMerchantName(+transaction.merchant_id)}</h3>
        <p css={amountStyle}>${transaction.amount}</p>
      </div>
      <p css={descriptionStyle}>{transaction.description}</p>
    </Card>
  );
}

const cardStyle = css`
  cursor: pointer;
`

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`

const amountStyle = css`
  color: darkgray;
  /* font-size: 2rem; */
`

const descriptionStyle = css`
  /* margin-top: 2rem; */
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
