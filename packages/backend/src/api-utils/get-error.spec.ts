import { getError } from './get-error';
import { ISeasonalBackendError } from '../interfaces';

describe('getError', () => {
  let result: ISeasonalBackendError;
  beforeEach(() => result = getError('message', 500));

  test('sets the message', () => expect(result.message).toBe('message'));

  test('sets the error code', () => expect(result.status).toBe(500));
});
