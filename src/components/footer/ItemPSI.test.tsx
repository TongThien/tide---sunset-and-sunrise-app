import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemPSI from './ItemPSI';

test('ItemPSI', () => {
  render(<ItemPSI value={88} color='red' />);
  const value = screen.getByText('88');
  expect(value).toBeVisible();
});
