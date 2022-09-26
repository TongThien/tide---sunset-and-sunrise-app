import { render, screen } from '@testing-library/react';

import TitleComponent from './TitleComponent';

test('TitleComponent', () => {
  render(<TitleComponent />);
  const title = screen.getByText('Sunrise & Sunset');
  expect(title).toBeInTheDocument();
});
