import {
  SET_ALL_BASIC_SEASONS_START,
  SET_ALL_BASIC_SEASONS_SUCCESS,
  ISetAllBasicSeasonDataSuccess
} from '../actions';
import { IAllBasicSeasonDataState } from '@chrisb-dev/seasonal-shared-models';
import { Action } from 'redux';

const getDefaultState = (): IAllBasicSeasonDataState => ({
  data: undefined,
  isLoading: true
});

export function allBasicSeasonReducer(
  state = getDefaultState(),
  action: Action
): IAllBasicSeasonDataState {
  switch (action.type) {
    case SET_ALL_BASIC_SEASONS_START:
      return {
        ...state,
        isLoading: true
      };
    case SET_ALL_BASIC_SEASONS_SUCCESS:
      return {
        ...state,
        data: (action as ISetAllBasicSeasonDataSuccess).seasonData,
        isLoading: false
      };
    default:
      return state;
  }
}
