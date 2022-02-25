import React, { useState } from 'react';
import { css } from '@emotion/core';
import { button } from '../../styles/button';
import Input from '../forms/Input';
import Radio from '../forms/Radio';
import Select from '../forms/Select';
import Textarea from '../forms/Textarea';

// TODO: get from database
const MERCHANTS = [
  {
    id: 1,
    label: 'Apple'
  },
  {
    id: 2,
    label: 'Target'
  }
];

export default function AddTransactionForm() {
  const [transaction, setTransaction] = useState({
    merchantId: '',
    amount: 0,
    description: '',
    credit: true
  });
  const handleSubmit = e => {
    e.preventDefault();
  };
  const updateTransaction = value => {
    setTransaction(t => ({ ...t, ...value }));
  };
  return (
    <form css={formStyle} onSubmit={handleSubmit}>
      <Select
        label="Merchant"
        onChange={e => updateTransaction({ merchantId: +e.target.value })}
        value={transaction.merchantId}
      >
        {!transaction.merchantId && <option value="">Select</option>}
        {MERCHANTS.map(merchant => (
          <option key={merchant.id} value={merchant.id}>
            {merchant.label}
          </option>
        ))}
      </Select>
      <Input
        label="Amount"
        onChange={e => updateTransaction({ amount: e.target.value })}
        type="number"
        value={transaction.amount}
      />
      <Textarea
        label="Description"
        onChange={e => updateTransaction({ description: e.target.value })}
        value={transaction.description}
      />
      <fieldset>
        <legend>Credit or Debit</legend>
        <Radio checked={transaction.credit} label="Credit" onChange={e => updateTransaction({ credit: true })} value />
        <Radio
          checked={!transaction.credit}
          label="Debit"
          onChange={e => updateTransaction({ credit: false })}
          value={false}
        />
      </fieldset>
      <button css={button} type="submit">
        Submit
      </button>
    </form>
  );
}

const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;