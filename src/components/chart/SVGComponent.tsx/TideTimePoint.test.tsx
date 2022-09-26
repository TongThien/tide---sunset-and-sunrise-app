import React from 'react';
import { render, screen } from '@testing-library/react';
import TideTimePoint from './TideTimePoint';

test('TideTimePoint', () => {
  render(<TideTimePoint />);
  const time = screen.getAllByText('07:45 am');
  expect(time.length).toEqual(3);
});

test('TideTimePoint with background', () => {
  render(<TideTimePoint isBackground />);
  const time = screen.getAllByText('07:45 pm');
  expect(time.length).toEqual(3);
});
