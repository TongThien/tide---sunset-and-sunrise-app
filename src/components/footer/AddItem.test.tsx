import { render, screen } from '@testing-library/react';

import AddItem from './AddItem';

test('AddItem', () => {
  render(<AddItem />);
  const value = screen.getByText('Add');
  expect(value).toBeVisible();
});
