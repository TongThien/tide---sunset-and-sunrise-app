import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { convertMinsToHrsMins } from './covertMinsToHrsMins';

test('convertMinsToHrsMins < 10', () => {
  const time = convertMinsToHrsMins(2.75);
  expect(time).toEqual('02:45 am');
});

test('convertMinsToHrsMins > 10', () => {
  const time = convertMinsToHrsMins(14.75);
  expect(time).toEqual('02:45 pm');
});

test('convertMinsToHrsMins === 0', () => {
  const time = convertMinsToHrsMins(0);
  expect(time).toEqual('12:00 am');
});

test('convertMinsToHrsMins === 12', () => {
  const time = convertMinsToHrsMins(12);
  expect(time).toEqual('12:00 pm');
});
