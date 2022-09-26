import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TimeCounter from './TimeCounter';

test('TimeCounter < 12', () => {
  render(<TimeCounter minutes={12} />);
  const value = screen.getByText('12:00 am');
  expect(value).toBeVisible();
});

test('TimeCounter > 12', () => {
  render(<TimeCounter minutes={13} />);
  const value = screen.getByText('01:00 pm');
  expect(value).toBeVisible();
});

test('TimeCounter === undefined', () => {
  render(<TimeCounter minutes={undefined} />);
});
