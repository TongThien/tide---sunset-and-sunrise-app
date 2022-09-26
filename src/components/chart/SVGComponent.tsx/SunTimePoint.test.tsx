import React from 'react';
import { render, screen } from '@testing-library/react';
import SunTimePoint from './SunTimePoint';

test('SunTimePoint', () => {
  render(<SunTimePoint />);
  const time = screen.getAllByText('07:05 am');
  expect(time.length).toEqual(3);
});
