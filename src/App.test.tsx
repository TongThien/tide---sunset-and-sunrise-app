import { render, screen } from '@testing-library/react';
import App from './App';
test('App', () => {
  render(<App />);
  const value = screen.getAllByRole('img');
  expect(value.length).toEqual(7);
});
