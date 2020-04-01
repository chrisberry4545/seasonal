import {
  GET_COUNTRIES_START,
  GET_COUNTRIES_SUCCESS,
  IGetCountriesSuccess
} from '../actions';
import { ICountryState } from '../interfaces';
import { Action } from 'redux';

const getDefaultState = (): ICountryState => ({
  data: undefined,
  isLoading: true
});

export function countryReducer(
  state = getDefaultState(),
  action: Action
): ICountryState {
  switch (action.type) {
    case GET_COUNTRIES_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        data: (action as IGetCountriesSuccess).countries,
        isLoading: false
      };
    default:
      return state;
  }
}
