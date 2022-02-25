import React from 'react';
import { pageHeader } from '../../styles/page-header';
import AddTransactionForm from './AddTransactionForm';

export default function AddTransaction() {
  return (
    <>
      <h1 css={pageHeader}>Add Transaction</h1>
      <AddTransactionForm />    
    </>
  );
}