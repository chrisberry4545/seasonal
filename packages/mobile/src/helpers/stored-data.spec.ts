import {
  setStoredData,
  getStoredData
} from './stored-data';
import { AsyncStorage } from 'react-native';

describe('setStoredData', () => {
  const key = 'key';
  const data = { val: 1 };

  describe('when setting an item in the storage is successful', () => {
    let mockSetItem: jest.SpyInstance;
    beforeEach(async () => {
      mockSetItem = jest.spyOn(AsyncStorage, 'setItem')
        .mockResolvedValue();
      await setStoredData(key, data);
    });

    test('sets the item in the storage', () =>
      expect(mockSetItem).toHaveBeenCalledWith(
        key, JSON.stringify(data)
      ));

  });

  describe('when setting an item in the storage causes an error', () => {
    let error: Error;
    beforeEach(async () => {
      jest.spyOn(AsyncStorage, 'setItem')
        .mockRejectedValue(new Error());
      try {
        await setStoredData(key, data);
      } catch (e) {
        error = e;
      }
    });

    test('does not throw an error', () => expect(error).toBeUndefined());

  });
});

describe('getStoredData', () => {
  const key = 'key';
  const data = { a: 'test' };
  let result: any;

  describe('when getting an item in the storage is successful', () => {
    beforeEach(async () => {
      jest.spyOn(AsyncStorage, 'getItem')
        .mockResolvedValue(JSON.stringify(data));
      result = await getStoredData(key);
    });

    test('gets the item from storage', () => expect(result).toEqual(data));

  });

  describe('when getting an item in the storage causes an error', () => {
    beforeEach(async () => {
      jest.spyOn(AsyncStorage, 'getItem')
        .mockRejectedValue(new Error());
      result = await getStoredData(key);
    });

    test('returns null', () => expect(result).toBeNull());

  });

});
