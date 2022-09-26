import { roundNumber } from './roundNumber';

describe('test function roundNumber', () => {
  test('roundNumber', () => {
    expect(roundNumber(1.234567)).toEqual(1.2);
  });
});
