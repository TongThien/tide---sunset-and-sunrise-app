import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DateCounter from './DateCounter';

test('DateCounter 1st', () => {
  render(<DateCounter times={12} isChangeColor={false} />);
  const value = screen.getByText('st');
  expect(value).toBeInTheDocument();
});

test('DateCounter 2nd', () => {
  render(<DateCounter times={25} isChangeColor={false} />);
  const value = screen.getByText('nd');
  expect(value).toBeInTheDocument();
});

test('DateCounter 3rd', () => {
  render(<DateCounter times={49} isChangeColor={false} />);
  const value = screen.getByText('rd');
  expect(value).toBeInTheDocument();
});

test('DateCounter change color', () => {
  render(<DateCounter times={49} isChangeColor={true} />);
  const value = screen.getByText('rd');
});
