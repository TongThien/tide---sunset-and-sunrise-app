import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TitleComponent from './TitleComponent';

test('TitleComponent', () => {
  render(<TitleComponent />);
  const title = screen.getByText('Sunrise & Sunset');
  expect(title).toBeInTheDocument();
});
