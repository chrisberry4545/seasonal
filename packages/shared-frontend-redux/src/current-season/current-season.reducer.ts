import {
  SET_SELECTED_SEASON_NAME,
  ISetSelectedSeasonName
} from './current-season-name.actions';
import {
  ICurrentSeasonState
} from './current-season-state.interface';
import { Action } from 'redux';
import { getCurrentSeasonIndex } from '@chrisb-dev/seasonal-shared-frontend-utilities';
import {
  ISelectSeason,
  SELECT_SEASON,
  FOOD_DETAILS_SELECT_SEASON
} from '../ui';
import {
  SET_CURRENT_SEASON_WITH_FOOD_START,
  SET_CURRENT_SEASON_WITH_FOOD_SUCCESS,
  SET_CURRENT_SEASON_WITH_RECIPES_START,
  SET_CURRENT_SEASON_WITH_RECIPES_SUCCESS,
  ISetCurrentSeasonSuccess
} from './current-season.actions';

const getDefaultState = (): ICurrentSeasonState => ({
  currentSeasonIndex: getCurrentSeasonIndex(),
  data: undefined,
  isFoodLoading: true,
  isRecipesLoading: true
});

export function currentSeasonWithFoodReducer(
  state = getDefaultState(),
  action: Action
): ICurrentSeasonState {
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
