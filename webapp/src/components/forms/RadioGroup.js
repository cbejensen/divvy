import React from 'react';
import { node, string } from 'prop-types';
import { css } from '@emotion/core';
import { labelStyle as baseLabelStyle } from '../../styles/label';

function RadioGroup({ legend, children }) {
  return (
    <fieldset css={fieldsetStyle}>
      <legend css={labelStyle}>{legend}</legend>
      {children}
    </fieldset>
  );
}

RadioGroup.propTypes = {
  legend: string,
  children: node
};

const fieldsetStyle = css`
  border: none;
  padding: 0;
`;

const labelStyle = css`
  ${baseLabelStyle}
  padding: 0;
`;

export default RadioGroup;
