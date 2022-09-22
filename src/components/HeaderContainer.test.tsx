import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderContainer from './HeaderContainer';

test('HeaderContainer', () => {
  render(<HeaderContainer />);
  const value = screen.getAllByRole('img');
  expect(value.length).toEqual(7);
});
