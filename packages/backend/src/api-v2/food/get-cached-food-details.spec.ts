import * as cache from '../../cache';
import { Cache } from '../../cache';
import { IHydratedFood, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { getCachedFoodDetails } from './get-cached-food-details';
import * as getDbFoodDetails from './get-db-food-details';
import { DEFAULT_REGION_ID, DEFAULT_LANGUAGE_ID } from '../../config';

describe('getCachedFoodDetails', () => {
  let dataCache: Cache<unknown>;
  let cacheKey: string;
  let mockGetDbFoodDetails: jest.SpyInstance;
  const foodDetails = {} as IHydratedFood;
  let result: IHydratedFood | undefined;
  let innerFunction: (...args: any[]) => Promise<unknown>;
  const foodId = 'foodId';
  const regionId = 'regionId';
  const language = LANGUAGES.EN_US;

  beforeEach(async () => {
    const mockCacheFunctionResponse = jest.spyOn(cache, 'cacheFunctionResponse')
      .mockReturnValue(() => Promise.resolve(foodDetails));
    mockCacheFunctionResponse.mockClear();
    const cachedFunction = getCachedFoodDetails();
    const [
      usedCache,
      usedCacheKey,
      usedInnerFunction
    ] = mockCacheFunctionResponse.mock.calls[0];
    dataCache = usedCache;
    cacheKey = usedCacheKey;
    result = await cachedFunction(foodId, regionId, language);
    mockGetDbFoodDetails = jest.spyOn(
      getDbFoodDetails, 'getDbFoodDetails'
    ).mockResolvedValue(foodDetails);
    mockGetDbFoodDetails.mockClear();
    innerFunction = usedInnerFunction;
  });

  test('adds a cache', () => expect(dataCache).toBeInstanceOf(Cache));

  test('uses the expected cache key', () => expect(cacheKey).toBe('single-food'));

  test('returns the expected result', () => expect(result).toBe(foodDetails));

  describe('when the inner function is called', () => {
    beforeEach(() => innerFunction());

    test('calls getDbFoodDetails with the correct arguments', () =>
      expect(mockGetDbFoodDetails).toHaveBeenCalled());

  });

  describe('when the inner function is called with no regionId or language', () => {
    beforeEach(() => innerFunction(foodId));

    test('defaults the regionId and language', () =>
      expect(mockGetDbFoodDetails).toHaveBeenCalledWith(
        foodId, DEFAULT_REGION_ID, DEFAULT_LANGUAGE_ID
      ));

  });

});
