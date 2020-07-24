import { getQueryString } from './get-query-string';
import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

describe('getQueryString', () => {
  test('returns the correct value when only isVegetarian is set', () =>
    expect(getQueryString(true)).toBe('?is-vegetarian=true'));

  test('returns the correct value when only isVegan is set', () =>
    expect(getQueryString(undefined, true)).toBe('?is-vegan=true'));

  test('returns the correct value when only regionId is set', () =>
    expect(getQueryString(undefined, undefined, 'region')).toBe('?region-id=region'));

  test('returns the correct value when only language is set', () =>
    expect(getQueryString(undefined, undefined, undefined, LANGUAGES.EN_US))
      .toBe(`?language=${LANGUAGES.EN_US}`));

  test('returns the correct value when all values are set', () =>
    expect(getQueryString(true, true, 'region', LANGUAGES.EN_US)).toBe(
      `?is-vegetarian=true&is-vegan=true&region-id=region&language=${LANGUAGES.EN_US}`
    ));
});
