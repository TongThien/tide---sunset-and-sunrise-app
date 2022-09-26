import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovingSun from './MovingSun';

test('MovingSun', () => {
  render(<MovingSun sunPosition={{ x: 0, y: 0 }} isMoonTime date={5} />);
  const title = screen.getByText('5th November');
  expect(title).toBeInTheDocument();
});
