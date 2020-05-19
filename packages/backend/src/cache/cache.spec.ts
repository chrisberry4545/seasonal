import * as config from '../config';
import * as now from '../utils/now';
import { Cache } from './cache';

describe('Cache', () => {
  let cache: Cache<string | null>;
  const cacheKey = 'cache-key';
  const cacheValue = 'cache-value';
  const defaultTtl = 1000 * 60 * 30;
  const mockNow = new Date('2020-06-01').getTime();
  beforeEach(() => {
    cache = new Cache();
    (config as any).SKIP_CACHE = false;
    jest.spyOn(now, 'now').mockReturnValue(mockNow);
  });

  describe('constructor', () => {

    test('sets ttl to 30 mins if no value specified', () =>
      expect(cache.ttl).toBe(defaultTtl));

    test('sets ttl to value in constructor', () =>
      expect(new Cache(10).ttl).toBe(10));

  });

  describe('set', () => {

    describe('when a ttl is not set', () => {
      beforeEach(() => cache.set(cacheKey, cacheValue));

      test('sets a value in the map', () =>
        expect(cache.map.get(cacheKey)).toBe(cacheValue));

      test('sets a value in the expires map', () =>
        expect(cache.expiries.get(cacheKey)).toBe(mockNow + defaultTtl));

    });

    describe('when a ttl set', () => {
      beforeEach(() => cache.set(cacheKey, cacheValue, { ttl: 10 }));

      test('sets a value in the map', () =>
        expect(cache.map.get(cacheKey)).toBe(cacheValue));

      test('sets a value in the expires map', () =>
        expect(cache.expiries.get(cacheKey)).toBe(mockNow + 10));

    });

  });

  describe('get', () => {

    describe('when the value has not expired', () => {

      beforeEach(() => cache.set(cacheKey, cacheValue));

      test('returns the value from the map', () =>
        expect(cache.get(cacheKey)).toBe(cacheValue));

    });

    describe('when the value has expired', () => {

      beforeEach(() => {
        cache.set(cacheKey, cacheValue);
        jest.spyOn(now, 'now').mockReturnValue(mockNow + defaultTtl);
      });

      test('returns undefined', () =>
        expect(cache.get(cacheKey)).toBeUndefined());

    });

    describe('when skip cache is set to true', () => {

      beforeEach(() => {
        (config as any).SKIP_CACHE = true;
        cache.set(cacheKey, cacheValue);
      });

      test('returns undefined', () =>
        expect(cache.get(cacheKey)).toBeUndefined());

    });

  });

});
