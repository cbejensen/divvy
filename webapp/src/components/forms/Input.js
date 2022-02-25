import React, { forwardRef } from 'react';
import { string } from 'prop-types';
import { css } from '@emotion/core';

const Input = forwardRef(({ label, ...other }, ref) => {
  return (
    <label css={labelStyle}>
      {label}
      <input ref={ref} type="text" {...other} />
    </label>
  );
});

const labelStyle = css`
  > input {
    display: block;
  }
  &:focus-within {
    color: var(--primary);
  }
`;

Input.propTypes = {
  label: string
};

Input.displayName = 'Input';

export default Input;
