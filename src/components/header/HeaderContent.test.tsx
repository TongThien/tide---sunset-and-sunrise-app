import { render, screen } from '@testing-library/react';

import HeaderContent from './HeaderContent';

test('HeaderContent', () => {
  render(<HeaderContent />);
  const value = screen.getAllByRole('img');
  expect(value.length).toEqual(7);
});
