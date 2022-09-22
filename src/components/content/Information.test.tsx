import { render, screen } from '@testing-library/react';
import Information from './Information';
import '@testing-library/jest-dom/extend-expect';

test('Information', () => {
  render(<Information value={77} img='water' />);
  const value = screen.getByText('77%');
  expect(value).toBeVisible();
});
