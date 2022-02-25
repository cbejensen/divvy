import React, { forwardRef } from 'react';
import PropTypes, { string } from 'prop-types';
import { css } from '@emotion/core';

const Radio = forwardRef(({ label, ...other }, ref) => {
  return (
    <label css={labelStyle}>
      <input ref={ref} type="radio" {...other} />
      {label}
    </label>
  );
});

const labelStyle = css`
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
