import * as consts from '../consts';
import {
  getAccessTokenHeaders
} from './get-access-token-headers';

jest.mock('../consts', () => ({
  getStorage: jest.fn()
}));

describe('getAccessTokenHeaders', () => {
  let result: {};

  describe('when there is an access token', () => {
    const accessToken = 'access';
    beforeEach(() => {
      jest.spyOn(consts, 'getStorage').mockReturnValue({
        accessToken
      } as any);
      result = getAccessTokenHeaders();
    });

    test('returns the expected result', () =>
      expect(result).toEqual({
        Authorization: `Bearer ${accessToken}`
      }));

  });

  describe('when there is no access token', () => {
    beforeEach(() => {
      jest.spyOn(consts, 'getStorage').mockReturnValue({
        accessToken: null
      } as any);
      result = getAccessTokenHeaders();
    });

    test('returns an empty object', () => expect(result).toEqual({}));

  });
});
