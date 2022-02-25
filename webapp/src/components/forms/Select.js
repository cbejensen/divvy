import React, { forwardRef } from 'react';
import { node, string } from 'prop-types';
import { css } from '@emotion/core';
import { labelStyle } from '../../styles/label';

const Select = forwardRef(({ label, children, ...other }, ref) => {
  return (
    <label css={wrapperStyle}>
      <span css={labelStyle}>{label}</span>
      <select css={inputStyle} ref={ref} {...other}>
        {children}
      </select>
    </label>
  );
});

export const wrapperStyle = css`
  &:focus-within {
    color: var(--primary);
  }
`;

const inputStyle = css`
  width: 100%;
  display: block;
  padding: 0.5rem 1rem;
`;

Select.propTypes = {
  children: node,
  label: string
};

Select.displayName = 'Select';

export default Select;
