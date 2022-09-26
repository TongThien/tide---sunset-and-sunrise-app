import { mappingTime } from './mappingTime';

describe('test function mappingTime', () => {
  test('mappingTime', () => {
    expect(mappingTime([1, 2, 3])).toEqual([1, 2, 3, 25, 26, 27, 49, 50, 51]);
  });
});
