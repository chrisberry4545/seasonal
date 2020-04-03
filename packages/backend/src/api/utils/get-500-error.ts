import { ISeasonalBackendError } from '../../interfaces';
import { getError } from './get-error';

export const get500Error = (message: string): ISeasonalBackendError =>
  getError(message, 500);
