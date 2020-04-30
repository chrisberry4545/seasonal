import { ISeasonalBackendError } from '../interfaces';
import { getError } from './get-error';

export const get404Error = (): ISeasonalBackendError =>
  getError('Not found', 404);
