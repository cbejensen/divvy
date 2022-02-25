import React, { forwardRef } from 'react';
import { string } from 'prop-types';
import { css } from '@emotion/core';
import { labelStyle } from '../../styles/label';

const Input = forwardRef(({ label, ...other }, ref) => {
  return (
    <label css={wrapperStyle}>
      <span css={labelStyle}>{label}</span>
      <input css={inputStyle} ref={ref} type="text" {...other} />
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
  padding: .5rem 1rem;
`

Input.propTypes = {
  label: string
};

Input.displayName = 'Input';

export default Input;
