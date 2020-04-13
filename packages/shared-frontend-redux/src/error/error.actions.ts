import { IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { Action } from 'redux';

export interface ISetError extends Action {
  error: IBackendError;
}
export const SET_ERROR = 'SET_ERROR';
export const setError = (error: IBackendError): ISetError => ({
  error,
  type: SET_ERROR
});

export const HIDE_ERROR_DISPLAY = 'HIDE_ERROR_DISPLAY';
export const hideErrorDisplay = (): Action => ({
  type: HIDE_ERROR_DISPLAY
});
