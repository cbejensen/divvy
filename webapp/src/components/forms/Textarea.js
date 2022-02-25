import React, { forwardRef } from 'react';
import { string } from 'prop-types';
import { css } from '@emotion/core';
import { labelStyle } from '../../styles/label';

const Textarea = forwardRef(({ label, ...other }, ref) => {
  return (
    <label css={wrapperStyle}>
      <span css={labelStyle}>{label}</span>
      <textarea css={textareaStyle} ref={ref} {...other} />
    </label>
  );
});

const wrapperStyle = css`
  &:focus-within {
    color: var(--primary);
  }
`;

const textareaStyle = css`
  width: 100%;
  display: block;
  padding: 1rem;
  resize: vertical;
`;

Textarea.propTypes = {
  label: string
};

Textarea.displayName = 'Textarea';

export default Textarea;
