import { render, screen } from '@testing-library/react';

import { setTimePoint } from './setTime';

describe('test function set time', () => {
  test('set time', () => {
    expect(setTimePoint([1, 2, 3], 1, 3)).toEqual([
      { tideHeight: 3, time: '01:00 am', x: 55.55555555555556, y: 1 },
      { tideHeight: 3, time: '02:00 am', x: 111.11111111111111, y: 1 },
      { tideHeight: 3, time: '03:00 am', x: 166.66666666666669, y: 1 }
    ]);
  });
});
