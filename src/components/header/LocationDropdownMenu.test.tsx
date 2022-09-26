import { render, screen } from '@testing-library/react';

import LocationDropdownMenu from './LocationDropdownMenu';

test('LocationDropdownMenu', () => {
  render(<LocationDropdownMenu />);
  const value = screen.getByText('Current Location');
  expect(value).toBeVisible();
});
