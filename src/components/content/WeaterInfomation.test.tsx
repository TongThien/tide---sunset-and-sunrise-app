import { render, screen } from '@testing-library/react';

import WeatherInfomation from './WeatherInfomation';

test('WeatherInfomation', () => {
  render(<WeatherInfomation />);
  const value = screen.getByText('Cloudy');
  expect(value).toBeVisible();
});
