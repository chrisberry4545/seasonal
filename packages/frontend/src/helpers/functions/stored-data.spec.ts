import {
  setStoredData,
  getStoredData
} from './stored-data';

describe('setStoredData', () => {
  const key = 'key';
  const data = { id: '1' };
  let mockLocalStorage: Storage;

  beforeEach(() => {
    mockLocalStorage = {
      setItem: jest.fn()
    } as any;
    jest.spyOn(window, 'localStorage', 'get')
      .mockReturnValue(mockLocalStorage);
    setStoredData(key, data);
  });

  test('sets the item in local storage', () =>
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
      key, JSON.stringify(data)
    ));
});

describe('getStoredData', () => {
  const key = 'key';
  const data = { id: '1' };
  let mockLocalStorage: Storage;

  beforeEach(() => {
    mockLocalStorage = {
      getItem: () => JSON.stringify(data)
    } as any;
    jest.spyOn(window, 'localStorage', 'get')
      .mockReturnValue(mockLocalStorage);
  });

  test('gets the item in local storage', () =>
    expect(getStoredData(key)).toEqual(data));
});
