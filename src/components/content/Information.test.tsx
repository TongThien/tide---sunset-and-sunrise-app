import { render, screen } from '@testing-library/react';
import Information from './Information';

test('Information', () => {
  render(<Information value={77} img="water" />);
  const value = screen.getByText('77%');
  expect(value).toBeVisible();
});
