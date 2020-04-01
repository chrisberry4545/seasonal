import { createSelector } from 'reselect';
import { IState } from '@chrisb-dev/seasonal-shared-models';

const selectErrorState = (state: IState) => state.error;

export const selectErrorMessage = createSelector(
  selectErrorState,
  (error) => error.errorMessage
);

export const selectIsErrorDisplayVisible = createSelector(
  selectErrorMessage,
  (errorMessage) => errorMessage !== undefined
);
