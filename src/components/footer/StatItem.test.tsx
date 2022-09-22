import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StatItem, { Title } from './StatItem';

test('StatItem title', () => {
  render(<StatItem title={Title.RAIN} />);
  const value = screen.getByText('RAIN');
  expect(value).toBeVisible();
});

test('StatItem uom', () => {
  render(<StatItem title={Title.RAIN} />);
  const value = screen.getByText('mm');
  expect(value).toBeVisible();
});

test('StatItem PSI', () => {
  render(<StatItem title={Title.PSI} />);
  const value = screen.getByText('PSI');
  expect(value).toBeVisible();
});

test('StatItem DENGUE', () => {
  render(<StatItem title={Title.DENGUE} />);
  const value = screen.getByText('DENGUE');
  expect(value).toBeVisible();
});
