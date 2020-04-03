import { IBackendError } from '@chrisb-dev/seasonal-shared-models';

export interface ISeasonalBackendError extends IBackendError {
  status: 400 | 404 | 500;
}
