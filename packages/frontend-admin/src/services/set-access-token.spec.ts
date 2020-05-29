import * as consts from '../consts';
import { setAccessToken } from './set-access-token';

jest.mock('../consts', () => ({
  getStorage: jest.fn()
}));

describe('setAccessToken', () => {
  let storage: Storage;
  const token = 'token';
  beforeEach(() => {
    storage = {} as Storage;
    jest.spyOn(consts, 'getStorage').mockReturnValue(storage);
    setAccessToken(token);
  });

  test('sets the access token', () => expect(storage.accessToken).toBe(token));

});
