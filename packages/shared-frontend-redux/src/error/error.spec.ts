import {
  errorReducer
} from './error.reducer';
import { IState } from '../state.interface';
import { Action } from 'redux';
import { IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { IErrorState } from './error-state.interface';
import { selectErrorMessage } from './error.selectors';
import { setError, hideErrorDisplay } from './error.actions';

const updateState = (
  action: Action,
  initialState: IErrorState | undefined = undefined
) => {
  const newSliceState = errorReducer(
    initialState, action
  );
  return {
    error: newSliceState
  } as IState;
};

describe('default state', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState({} as Action, undefined)
  );

  test('sets errorMessage to undefined', () =>
    expect(selectErrorMessage(newAppState)).toBeUndefined());
});

describe('set error', () => {
  test('sets error message to the value in the action', () => {
    const newAppState = updateState(
      setError({
        message: 'message'
      } as IBackendError)
    );
    expect(selectErrorMessage(newAppState)).toBe('message');
  });
});

describe('hides error', () => {
  test('sets error message to undefined', () => {
    const newAppState = updateState(
      hideErrorDisplay()
    );
    expect(selectErrorMessage(newAppState)).toBeUndefined();
  });
});
