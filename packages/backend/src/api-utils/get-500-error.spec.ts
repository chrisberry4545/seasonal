import { ISeasonalBackendError } from '../interfaces';
import * as getError from './get-error';
import {
  get500Error
} from './get-500-error';

describe('get500Error', () => {
  const mockError = {} as ISeasonalBackendError;
  let result: ISeasonalBackendError;
  let mockGetError: jest.SpyInstance;
  beforeEach(() => {
    mockGetError = jest.spyOn(getError, 'getError').mockReturnValue(mockError);
    result = get500Error('message');
  });

  test('calls getError', () =>
    expect(mockGetError).toHaveBeenCalledWith('message', 500));

  test('returns the expected error', () => expect(result).toBe(mockError));

});
