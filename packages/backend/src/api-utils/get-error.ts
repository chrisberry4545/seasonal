import { ISeasonalBackendError } from '../interfaces';

export const getError = (
  message: string,
  status: 400 | 404 | 500
): ISeasonalBackendError => ({
  message,
  status
});
