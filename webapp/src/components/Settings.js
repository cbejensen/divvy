import { css } from '@emotion/core';
import React from 'react';
import useSettings from '../hooks/useSettings';
import { pageHeader } from '../styles/page-header';
import Radio from './forms/Radio';
import RadioGroup from './forms/RadioGroup';

function Settings() {
  const [settings, saveSettings] = useSettings();

  function save(field, value) {
    saveSettings(old => ({
      ...old,
      [field]: value
    }));
  }

  return (
    <>
      <h1 css={pageHeader}>Settings</h1>
      <form css={formStyle} onChange={save} onSubmit={e => e.preventDefault()}>
        <RadioGroup legend="Number Type">
          <Radio
            checked={settings.numberType === 'no'}
            data-field="numberType"
            label="Numbers (123)"
            onChange={e => save('numberType', e.target.value)}
            value="no"
          />
          <Radio
            checked={settings.numberType === 'rn'}
            data-field="numberType"
            label="Roman Numerals (CXXIII)"
            onChange={e => save('numberType', e.target.value)}
            value="rn"
          />
        </RadioGroup>
      </form>
    </>
  );
}

const formStyle = css`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default Settings;
