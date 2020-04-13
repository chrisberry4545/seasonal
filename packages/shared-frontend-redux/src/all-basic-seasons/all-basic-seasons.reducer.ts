import {
  SET_ALL_BASIC_SEASONS_START,
  SET_ALL_BASIC_SEASONS_SUCCESS,
  ISetAllBasicSeasonDataSuccess
} from '../all-basic-seasons';
import { IAllBasicSeasonsState } from './all-basic-seasons-state.interface';
import { Action } from 'redux';

const getDefaultState = (): IAllBasicSeasonsState => ({
  data: undefined,
  isLoading: true
});

export function allBasicSeasonsReducer(
  state = getDefaultState(),
  action: Action
): IAllBasicSeasonsState {
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
