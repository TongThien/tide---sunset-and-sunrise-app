import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Stat from './Stat';

test('Stat', () => {
  render(<Stat />);
  const value = screen.getByText('23');
  expect(value).toBeVisible();
});
