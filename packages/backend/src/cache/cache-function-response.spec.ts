import { Cache } from './cache';
import { cacheFunctionResponse } from './cache-function-response';

describe('cacheFunctionResponse', () => {
  const mockCacheResult = 'test';
  const cacheKey = 'cache-key';
  let mockCache: Cache<string>;
  let functionToCall: jest.Mock;
  const functionVal = 'function-val';
  const testArg1 = 'arg1';
  const testArg2 = 'arg2';
  let result: string | undefined;

  beforeEach(() => {
    result = undefined;
    functionToCall = jest.fn().mockReturnValue(functionVal);
    mockCache = {
      get: (key: string) => mockCacheResult,
      set: jest.fn() as any
    } as Cache<string>;
  });

  describe('when there is cached data', () => {
    beforeEach(async () => result = await cacheFunctionResponse(
      mockCache, cacheKey, functionToCall
    )(testArg1, testArg2));

    test('returns the cached data', () =>
      expect(result).toBe(mockCacheResult));

  });

  describe('when there is no cached data', () => {
    beforeEach(async () => {
      mockCache.get = (key: string) => undefined;
      result = await cacheFunctionResponse(
        mockCache, cacheKey, functionToCall
      )(testArg1, testArg2);
    });

    test('calls the function to get data', () =>
      expect(functionToCall).toHaveBeenCalledWith(testArg1, testArg2));

    test('saves the result in the cache', () =>
      expect(mockCache.set).toHaveBeenCalledWith(
        `${cacheKey}:${testArg1}:${testArg2}`,
        functionVal
      ));

    test('returns the result of calling the function', () =>
      expect(result).toBe(functionVal));

  });

});
