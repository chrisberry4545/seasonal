import {
  getRegionIdFromQueryParams,
  getIsVeganFromQueryParams,
  getIsVegetarianFromQueryParams,
  getLanguageFromQueryParams
} from './get-query-params';
import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { logger } from '../logger/logger';

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

describe('getLanguageFromQueryParams', () => {
  const request = {
    query: {
      language: LANGUAGES.EN_GB
    }
  } as any;
  let mockLogger: jest.SpyInstance;
  let result: LANGUAGES | undefined;

  beforeEach(() => {
    jest.clearAllMocks();
    mockLogger =
      jest.spyOn(logger, 'log').mockReturnValue(null as any);
  });

  describe('when a valid language is set in the request', () => {
    beforeEach(() =>
      result = getLanguageFromQueryParams(request));

    test('does not log any errors', () =>
      expect(mockLogger).not.toHaveBeenCalled());

    test('returns the language in the request', () =>
      expect(result).toBe(request.query.language));

  });

  describe('when an invalid language is set in the request', () => {
    beforeEach(() =>
      result = getLanguageFromQueryParams({
        ...request,
        query: {
          ...request.query,
          language: 'invalid'
        }
      }));

    test('logs an error', () =>
      expect(mockLogger).toHaveBeenCalled());

    test('returns undefined', () => expect(result).toBeUndefined());

  });

  describe('when a french language that is not supported is set in the request', () => {
    beforeEach(() =>
      result = getLanguageFromQueryParams({
        ...request,
        query: {
          ...request.query,
          language: 'fr-US'
        }
      }));

    test('does not log an error', () =>
      expect(mockLogger).not.toHaveBeenCalled());

    test('returns the base french language', () => expect(result).toBe(LANGUAGES.FR_FR));

  });

  describe('when an english language that is not supported is set in the request', () => {
    beforeEach(() =>
      result = getLanguageFromQueryParams({
        ...request,
        query: {
          ...request.query,
          language: 'en-FR'
        }
      }));

    test('does not log an error', () =>
      expect(mockLogger).not.toHaveBeenCalled());

    test('returns the US english language', () => expect(result).toBe(LANGUAGES.EN_US));

  });

  describe('when no language is set', () => {
    beforeEach(() =>
      result = getLanguageFromQueryParams({
        ...request,
        query: {}
      }));

    test('does not log an error', () =>
      expect(mockLogger).not.toHaveBeenCalled());

    test('returns undefined', () => expect(result).toBeUndefined());

  });
});
