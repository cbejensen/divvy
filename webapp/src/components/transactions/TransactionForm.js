import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';
import { button } from '../../styles/button';
import Input from '../forms/Input';
import Radio from '../forms/Radio';
import Select from '../forms/Select';
import Textarea from '../forms/Textarea';
import { MERCHANTS } from '../../constants/merchants';
import RadioGroup from '../forms/RadioGroup';
import { bool, func, number, shape, string } from 'prop-types';

const DEFAULT_TRANSACTION = {
  merchantId: '',
  amount: 0,
  description: '',
  credit: true
};

export default function TransactionForm({ transaction, handleSubmit, customError, loading }) {
  const [formValue, setFormValue] = useState(DEFAULT_TRANSACTION);
  useEffect(() => {
    setFormValue({
      ...DEFAULT_TRANSACTION,
      ...(transaction || {})
    });
  }, [transaction]);

  const [errors, setErrors] = useState(false);

  const updateFormValue = value => {
    setFormValue(t => ({ ...t, ...value }));
  };

  return (
    <form
      css={formStyle}
      onSubmit={e => {
        e.preventDefault();
        if (!formValue.merchantId || !formValue.description) {
          setErrors(true);
        } else {
          handleSubmit(formValue);
        }
      }}
    >
      <Select
        label="Merchant"
        onChange={e => updateFormValue({ merchantId: e.target.value })}
        value={formValue.merchantId}
      >
        {!formValue.merchantId && <option value="">Select</option>}
        {MERCHANTS.map(merchant => (
          <option key={merchant.id} value={merchant.id}>
            {merchant.name}
          </option>
        ))}
      </Select>
      <Input
        label="Amount"
        onChange={e => updateFormValue({ amount: +e.target.value })}
        type="number"
        value={formValue.amount}
      />
      <Textarea
        label="Description"
        onChange={e => updateFormValue({ description: e.target.value })}
        value={formValue.description}
      />
      <RadioGroup legend="Credit or Debit">
        <Radio checked={formValue.credit} label="Credit" onChange={e => updateFormValue({ credit: true })} value />
        <Radio
          checked={!formValue.credit}
          label="Debit"
          onChange={e => updateFormValue({ credit: false })}
          value={false}
        />
      </RadioGroup>
      <button css={button} disabled={loading} type="submit">
        {loading ? 'Loading...' : 'Submit'}
      </button>
      {errors && (
        <>
          {!formValue.merchantId && <p css={errorStyle}>What, no merchant?! Pick one!</p>}
          {!formValue.description && <p css={errorStyle}>You need to describe this thing!</p>}
        </>
      )}
      {customError && <p css={errorStyle}>{customError}</p>}
    </form>
  );
}

TransactionForm.propTypes = {
  handleSubmit: func,
  transaction: shape({
    merchantId: string,
    amount: number,
    description: string,
    credit: bool
  }),
  customError: string,
  loading: bool
};

const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const errorStyle = css`
  color: red;
`;
