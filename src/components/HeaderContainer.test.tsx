import { render, screen } from '@testing-library/react';
import HeaderContainer from '.';

test('HeaderContainer', () => {
  render(<HeaderContainer />);
  const value = screen.getAllByRole('img');
  expect(value.length).toEqual(7);
});
