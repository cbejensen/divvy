import { node, oneOf } from 'prop-types';
import React from 'react';
import DefaultLayout from './DefaultLayout';

export default function Layout({ layout, header, footer, children }) {
  switch (layout) {
    case 'default':
      return (
        <DefaultLayout footer={footer} header={header}>
          {children}
        </DefaultLayout>
      );
    default:
      return null;
  }
}

Layout.propTypes = {
  layout: oneOf(['default']),
  header: node,
  footer: node,
  children: node
};
