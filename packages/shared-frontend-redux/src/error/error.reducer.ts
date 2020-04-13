import { IErrorState } from './error-state.interface';
import { Action } from 'redux';
import {
  HIDE_ERROR_DISPLAY,
  ISetError,
  SET_ERROR
} from './error.actions';

const getDefaultState = (): IErrorState => ({
  errorMessage: undefined
});

export function errorReducer(
  state: IErrorState = getDefaultState(),
  action: Action
) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        errorMessage: (action as ISetError).error.message
      };
    case HIDE_ERROR_DISPLAY:
      return {
        ...state,
        errorMessage: undefined
      };
    default:
      return state;
  }
}
