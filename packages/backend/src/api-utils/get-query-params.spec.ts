import {
  getRegionIdFromQueryParams,
  getIsVeganFromQueryParams,
  getIsVegetarianFromQueryParams
} from './get-query-params';

describe('getRegionIdFromQueryParams', () => {
  const request = {
    query: {
      'country-code': 'countryCode',
      'region-id': 'regionId'
    }
  } as any;

  test('gets the region-id from the request', () =>
    expect(getRegionIdFromQueryParams(request)).toBe('regionId'));

  test('gets the country-code from the request if no region-id is set', () =>
    expect(getRegionIdFromQueryParams({
      ...request,
      query: {
        ...request.query,
        'region-id': null
      }
    })).toBe('countryCode'));

});

describe('getIsVeganFromQueryParams', () => {
  const request = {
    query: {
      'is-vegan': 'true'
    }
  } as any;

  test('returns true if is-vegan is set to true', () =>
    expect(getIsVeganFromQueryParams(request)).toBe(true));

  test('returns false if is-vegan is set to false', () =>
    expect(getIsVeganFromQueryParams({
      ...request,
      query: {
        ...request.query,
        'is-vegan': 'false'
      }
    })).toBe(false));

  test('returns false if is-vegan is not set', () =>
    expect(getIsVeganFromQueryParams({
      ...request,
      query: {}
    })).toBe(false));

});

describe('getIsVegetarianFromQueryParams', () => {
  const request = {
    query: {
      'is-vegetarian': 'true'
    }
  } as any;

  test('returns true if is-vegetarian is set to true', () =>
    expect(getIsVegetarianFromQueryParams(request)).toBe(true));

  test('returns false if is-vegetarian is set to false', () =>
    expect(getIsVegetarianFromQueryParams({
      ...request,
      query: {
        ...request.query,
        'is-vegetarian': 'false'
      }
    })).toBe(false));

  test('returns false if is-vegetarian is not set', () =>
    expect(getIsVegetarianFromQueryParams({
      ...request,
      query: {}
    })).toBe(false));
});
