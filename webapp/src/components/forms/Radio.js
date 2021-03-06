import React, { forwardRef } from 'react';
import { string } from 'prop-types';
import { css } from '@emotion/core';

const Radio = forwardRef(({ label, ...other }, ref) => {
  return (
    <label css={wrapperStyle}>
      <input ref={ref} type="radio" {...other} />
      <span>{label}</span>
    </label>
  );
});

const wrapperStyle = css`
  display: block;
  > input {
    margin-right: 1rem;
  }
`;

Radio.propTypes = {
  label: string
};

Radio.displayName = 'Radio';

export default Radio;
