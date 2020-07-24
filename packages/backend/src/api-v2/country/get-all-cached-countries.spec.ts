import * as cache from '../../cache';
import { Cache } from '../../cache';
import { ICountry, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { getAllCachedCountries } from './get-all-cached-countries';
import * as getAllDbCountries from './get-all-db-countries';

describe('getAllCachedCountries', () => {
  let dataCache: Cache<unknown>;
  let cacheKey: string;
  let mockGetAllDbCountries: jest.SpyInstance;
  const allCountries = [{}] as ICountry[];
  let result: ICountry[];
  let innerFunction: (...args: any[]) => Promise<unknown>;

  beforeEach(async () => {
    const mockCacheFunctionResponse = jest.spyOn(cache, 'cacheFunctionResponse')
      .mockReturnValue(() => Promise.resolve(allCountries));
    mockCacheFunctionResponse.mockClear();
    const cachedFunction = getAllCachedCountries();
    const [
      usedCache,
      usedCacheKey,
      usedInnerFunction
    ] = mockCacheFunctionResponse.mock.calls[0];
    dataCache = usedCache;
    cacheKey = usedCacheKey;
    result = await cachedFunction();
    mockGetAllDbCountries = jest.spyOn(
      getAllDbCountries, 'getAllDbCountries'
    ).mockResolvedValue(allCountries);
    mockGetAllDbCountries.mockClear();
    innerFunction = usedInnerFunction;
  });

  test('adds a cache', () => expect(dataCache).toBeInstanceOf(Cache));

  test('uses the expected cache key', () => expect(cacheKey).toBe('all-countries'));

  test('returns the expected result', () => expect(result).toBe(allCountries));

  describe('when the inner function is called', () => {
    beforeEach(() => innerFunction());

    test('calls getAllDbCountries', () =>
      expect(mockGetAllDbCountries).toHaveBeenCalledWith(undefined));

  });

  describe('when the inner function is called with a language', () => {
    beforeEach(() => innerFunction(LANGUAGES.FR_FR));

    test('calls getAllDbCountries with that language', () =>
      expect(mockGetAllDbCountries).toHaveBeenCalledWith(LANGUAGES.FR_FR));

  });

});
