import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddItem from './AddItem';

test('AddItem', () => {
  render(<AddItem />);
  const value = screen.getByText('Add');
  expect(value).toBeVisible();
});
