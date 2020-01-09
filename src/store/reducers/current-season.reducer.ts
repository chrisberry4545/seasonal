import {
  SET_CURRENT_SEASON_WITH_FOOD_START,
  SET_CURRENT_SEASON_WITH_FOOD_SUCCESS,
  SET_CURRENT_SEASON_WITH_RECIPES_START,
  SET_CURRENT_SEASON_WITH_RECIPES_SUCCESS,
  ISetCurrentSeasonSuccess,
  FOOD_DETAILS_SELECT_SEASON,
  ISelectSeason,
  SELECT_SEASON,
  SET_SELECTED_SEASON_NAME,
  ISetSelectedSeasonName
} from '../actions';
import { ICurrentSeasonDataState } from '../../interfaces';
import { Action } from 'redux';
import { getCurrentSeasonIndex } from '../../services';

const getDefaultState = (): ICurrentSeasonDataState => ({
  currentSeasonIndex: getCurrentSeasonIndex(),
  data: undefined,
  isFoodLoading: true,
  isRecipesLoading: true
});

export function currentSeasonWithFoodReducer(
  state = getDefaultState(),
  action: Action
): ICurrentSeasonDataState {
  switch (action.type) {
    case SET_CURRENT_SEASON_WITH_FOOD_START:
      return {
        ...state,
        isFoodLoading: true
      };
    case SET_CURRENT_SEASON_WITH_FOOD_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          ...(action as ISetCurrentSeasonSuccess).currentSeasonData
        },
        isFoodLoading: false
      };
    case SET_CURRENT_SEASON_WITH_RECIPES_START:
      return {
        ...state,
        isRecipesLoading: true
      };
    case SET_CURRENT_SEASON_WITH_RECIPES_SUCCESS:
        return {
          ...state,
          data: {
            ...state.data,
            ...(action as ISetCurrentSeasonSuccess).currentSeasonData
          },
          isRecipesLoading: false
        };
    case SELECT_SEASON:
    case FOOD_DETAILS_SELECT_SEASON:
      return {
        ...state,
        currentSeasonIndex: (action as ISelectSeason).seasonIndex
      };
    case SET_SELECTED_SEASON_NAME:
      return {
        ...state,
        data: state.data && {
          ...state.data,
          name: (action as ISetSelectedSeasonName).seasonName
        }
      };
    default:
      return state;
  }
}
