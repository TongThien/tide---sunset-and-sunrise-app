import { render, screen } from '@testing-library/react';

import MenuTop from './MenuTop';

test('MenuTop', () => {
  render(<MenuTop />);
  const value = screen.getAllByRole('img');
  expect(value.length).toEqual(3);
});
