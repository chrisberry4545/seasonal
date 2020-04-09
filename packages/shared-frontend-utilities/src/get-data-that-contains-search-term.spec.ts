import { getDataThatContainsSearchTerm } from './get-data-that-contains-search-term';

describe('getDataThatContainsSearchTerm', () => {
  const data = [
    {
      name: 'a'
    },
    {
      name: 'B'
    }
  ];

  test('finds that data which has the search term in the name field', () => {
    const result = getDataThatContainsSearchTerm('b', data);
    expect(result).toEqual([data[1]]);
  });

  test('handles lower case searches', () => {
    const newSearchTerm = {
      name: 'C'
    };
    const result = getDataThatContainsSearchTerm('c', [
      ...data,
      newSearchTerm
    ]);
    expect(result).toEqual([newSearchTerm]);
  });

  test('returns the whole array if there is no search term', () => {
    const result = getDataThatContainsSearchTerm(undefined, data);
    expect(result).toEqual(data);
  });
});
