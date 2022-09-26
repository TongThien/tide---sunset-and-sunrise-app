import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NightBackground from './NightBackground';
import { NIGHT_TIME_POINT } from '../../../utils/common';

test('NightBackground', () => {
  expect(NIGHT_TIME_POINT.length).toEqual(4);
});
