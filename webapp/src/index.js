import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes';
import { ApolloProvider } from '@apollo/client';
import { client } from './network/apollo-client';
import { Global } from '@emotion/core';
import { globalStyles } from './styles/global';

ReactDOM.render(
  <div data-app-init="" style={{ height: '100%' }}>
    <Global styles={globalStyles} />
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  </div>,
  document.getElementById('react-app')
);
