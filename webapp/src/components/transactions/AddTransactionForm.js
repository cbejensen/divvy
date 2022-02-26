import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { css } from '@emotion/core';
import { button } from '../../styles/button';
import Input from '../forms/Input';
import Radio from '../forms/Radio';
import Select from '../forms/Select';
import Textarea from '../forms/Textarea';
import { AddTransaction } from '../../gql/transactions.gql';
import { useHistory } from 'react-router-dom';
import { MERCHANTS } from '../../constants/merchants';
import RadioGroup from '../forms/RadioGroup';

export default function AddTransactionForm() {
  const history = useHistory();

  const [addTransaction, { loading, error: mutationError }] = useMutation(AddTransaction, {
    onCompleted: () => {
      history.push('/');
    }
  });

  const [transaction, setTransaction] = useState({
    merchantId: '',
    amount: 0,
    description: '',
    credit: true
  });
  const [errors, setErrors] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    const { merchantId, amount, description, credit } = transaction;
    if (!merchantId || !description) {
      setErrors(true);
    } else {
      addTransaction({
        variables: {
          merchant_id: merchantId,
          amount,
          description,
          credit: credit,
          debit: !credit,
          user_id: '1'
        }
      });
    }
  };
  const updateTransaction = value => {
    setTransaction(t => ({ ...t, ...value }));
  };
  return (
    <form css={formStyle} onSubmit={handleSubmit}>
      <Select
        label="Merchant"
        onChange={e => updateTransaction({ merchantId: e.target.value })}
        value={transaction.merchantId}
      >
        {!transaction.merchantId && <option value="">Select</option>}
        {MERCHANTS.map(merchant => (
          <option key={merchant.id} value={merchant.id}>
            {merchant.name}
          </option>
        ))}
      </Select>
      <Input
        label="Amount"
        onChange={e => updateTransaction({ amount: +e.target.value })}
        type="number"
        value={transaction.amount}
      />
      <Textarea
        label="Description"
        onChange={e => updateTransaction({ description: e.target.value })}
        value={transaction.description}
      />
      <RadioGroup legend="Credit or Debit">
        <Radio checked={transaction.credit} label="Credit" onChange={e => updateTransaction({ credit: true })} value />
        <Radio
          checked={!transaction.credit}
          label="Debit"
          onChange={e => updateTransaction({ credit: false })}
          value={false}
        />
      </RadioGroup>
      <button css={button} disabled={loading} type="submit">
        {loading ? 'Loading...' : 'Submit'}
      </button>
      {errors && (
        <>
          {!transaction.merchantId && <p css={errorStyle}>What, no merchant?! Pick one!</p>}
          {!transaction.description && <p css={errorStyle}>You need to describe this thing!</p>}
        </>
      )}
      {mutationError && <p css={errorStyle}>{mutationError}</p>}
    </form>
  );
}

const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const errorStyle = css`
  color: red;
`;
