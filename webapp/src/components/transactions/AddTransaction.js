import { css } from '@emotion/core';
import React from 'react';
import { button } from '../../styles/button';
import { pageHeader } from '../../styles/page-header';
import Input from '../forms/Input';
import Radio from '../forms/Radio';
import Textarea from '../forms/Textarea';

export default function AddTransaction() {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <h1 css={pageHeader}>Add Transaction</h1>
      <form css={formStyle} onSubmit={handleSubmit}>
        <Input label="Merchant" />
        <Input label="Amount" type="number" />
        <Textarea label="Description" />
        <fieldset>
          <legend>Credit or Debit</legend>
          <Radio label="Credit" />
          <Radio label="Debit" />
        </fieldset>
        <button css={button} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`