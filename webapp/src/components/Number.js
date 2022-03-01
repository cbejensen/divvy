import React from 'react';
import { number } from 'prop-types';
import useSettings from '../hooks/useSettings';

function Number({ value }) {
  const [settings] = useSettings();
  const { numberType } = settings;
  return <>{numberType === 'rn' ? getRomanNumeral(value) : value}</>;
}

function getRomanNumeral(num) {
  if (typeof num === 'number') {
    num = num.toString();
  }
  if (num === '0') {
    return '0';
  }
  if (+num > 3_999) {
    return num.toString();
  }
  const romanNumeral = Array.from(num.toString()).reverse().reduce((result, digit, i) => {
    let num = getRomanDigit(+digit, i);
    return num + result;
  }, '');
  return romanNumeral;
}

/**
 * Converts a single-digit number to a roman numeral.
 * @param {number} num The number to convert.
 * @param {number} digitPositionFromEnd How many digits from the end this number is. For example, in 354 the 5 would be in digits place 1.
 */
function getRomanDigit(num, digitPositionFromEnd = 0) {
  if (typeof num !== 'number') {
    throw Error(`Expected type number, got value ${num} of type ${typeof num}`);
  }
  if (num.toString().length > 1) {
    throw Error(`Expected one-digit number, got ${num}, which is ${num.toString().length} digits`);
  }
  if (digitPositionFromEnd > 4) {
    throw Error('Numbers greater than 4 decimal places not supported ')
  }
  const chars = romanNumeralDigitPositionToCharsMap[digitPositionFromEnd];
  return romanNumeralMap[num](...chars);
}

const romanNumeralMap = {
  0: (_, __, ___) => ``,
  1: (one, __, ___) => `${one}`,
  2: (one, __, ___) => `${one}${one}`,
  3: (one, __, ___) => `${one}${one}${one}`,
  4: (one, five, ___) => `${one}${five}`,
  5: (_, five, ___) => `${five}`,
  6: (one, five, ___) => `${five}${one}`,
  7: (one, five, ___) => `${five}${one}${one}`,
  8: (one, five, ___) => `${five}${one}${one}${one}`,
  9: (one, __, ten) => `${one}${ten}`
};

const romanNumeralDigitPositionToCharsMap = {
  0: ['I', 'V', 'X'],
  1: ['X', 'L', 'C'],
  2: ['C', 'D', 'M'],
  3: ['M', '|V', '|X'], // should actually be a line over the number to represent x1000
};

Number.propTypes = {
  value: number
};

export default Number;
