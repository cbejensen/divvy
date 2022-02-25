import React, { forwardRef } from 'react';
import { string } from 'prop-types';
import { css } from '@emotion/core';

const Textarea = forwardRef(({ label, ...other }, ref) => {
  return (
    <label css={labelStyle}>
      {label}
      <textarea></textarea>
    </label>
  );
});

const labelStyle = css`
  > textarea {
    display: block;
    resize: vertical;
  }
  &:focus-within {
    color: var(--primary);
  }
`;

Textarea.propTypes = {
  label: string
};

Textarea.displayName = 'Input';

export default Textarea;
