import { ISeasonalBackendError } from '../interfaces';
import * as getError from './get-error';
import {
  get404Error
} from './get-404-error';

describe('get404Error', () => {
  const mockError = {} as ISeasonalBackendError;
  let result: ISeasonalBackendError;
  let mockGetError: jest.SpyInstance;
  beforeEach(() => {
    mockGetError = jest.spyOn(getError, 'getError').mockReturnValue(mockError);
    result = get404Error();
  });

  test('calls getError', () =>
    expect(mockGetError).toHaveBeenCalledWith('Not found', 404));

  test('returns the expected error', () => expect(result).toBe(mockError));

});
