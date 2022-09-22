import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LocationDropdownMenu from './LocationDropdownMenu';

test('LocationDropdownMenu', () => {
  render(<LocationDropdownMenu />);
  const value = screen.getByText('Current Location');
  expect(value).toBeVisible();
});
