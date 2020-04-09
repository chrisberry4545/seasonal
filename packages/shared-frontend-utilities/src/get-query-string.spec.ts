import { getQueryString } from './get-query-string';

describe('getQueryString', () => {
  test('returns the correct value when only isVegetarian is set', () =>
    expect(getQueryString(true)).toBe('?is-vegetarian=true'));

  test('returns the correct value when only isVegan is set', () =>
    expect(getQueryString(undefined, true)).toBe('?is-vegan=true'));

  test('returns the correct value when only regionId is set', () =>
    expect(getQueryString(undefined, undefined, 'region')).toBe('?region-id=region'));

  test('returns the correct value when all values are set', () =>
    expect(getQueryString(true, true, 'region')).toBe(
      '?is-vegetarian=true&is-vegan=true&region-id=region'
    ));
});
