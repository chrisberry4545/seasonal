import {
  SET_ALL_BASIC_SEASON_DATA_START,
  SET_ALL_BASIC_SEASON_DATA_SUCCESS,
  ISetAllBasicSeasonDataSuccess
} from '../actions';
import { IAllBasicSeasonDataState } from '../../interfaces';
import { Action } from 'redux';

const getDefaultState = (): IAllBasicSeasonDataState => ({
  data: undefined,
  isLoading: true
});

export function allBasicSeasonDataReducer(
  state = getDefaultState(),
  action: Action
): IAllBasicSeasonDataState {
  switch (action.type) {
    case SET_ALL_BASIC_SEASON_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case SET_ALL_BASIC_SEASON_DATA_SUCCESS:
      return {
        ...state,
        data: (action as ISetAllBasicSeasonDataSuccess).seasonData,
        isLoading: false
      };
    default:
      return state;
  }
}
