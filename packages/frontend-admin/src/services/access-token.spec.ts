import {
  setAccessToken,
  getAccessTokenHeaders
} from './access-token';

describe('setAccessToken', () => {
  let mockSetItem: jest.SpyInstance;
  beforeEach(() => {
    mockSetItem = jest.spyOn(Storage.prototype, 'setItem');
  });

  test('sets the access token in the session storage', () => {
    setAccessToken('abc');
    expect(mockSetItem).toHaveBeenCalledWith('abc');
  });
});

describe('getAccessTokenHeaders', () => {
  let result: HeadersInit;
  describe('when there is an access token in the session storage', () => {
    beforeEach(() => {
      jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('token');
      result = getAccessTokenHeaders();
    });

    test('returns the expected object', () => expect(result).toMatchSnapshot());
  });

  describe('when there is no access token in the session storage', () => {
    beforeEach(() => {
      jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
      result = getAccessTokenHeaders();
    });

    test('returns null', () => expect(result).toBeNull());
  });
});
