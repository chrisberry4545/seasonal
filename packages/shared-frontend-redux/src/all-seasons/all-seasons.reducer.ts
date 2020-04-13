import {
  SET_ALL_SEASONS_WITH_FOOD_START,
  SET_ALL_SEASONS_WITH_FOOD_SUCCESS,
  ISetAllSeasonsSuccess,
  INCREASE_NUMBER_OF_ALL_FOOD_SEASONS_IN_VIEW,
  SET_ALL_SEASONS_WITH_RECIPES_START,
  SET_ALL_SEASONS_WITH_RECIPES_SUCCESS
} from './all-seasons.actions';
import { IAllSeasonState } from './all-seasons.state.interface';
import { Action } from 'redux';

const populateApiData = (
  state: IAllSeasonState,
  action: Action
) => !state.data
  ? (action as ISetAllSeasonsSuccess).seasonData
  : state.data.map((season) => ({
    ...season,
    ...(action as ISetAllSeasonsSuccess)
      .seasonData.find((seasonData) => seasonData.id === season.id)
  }));

const getDefaultState = (): IAllSeasonState => ({
  data: undefined,
  isFoodLoading: true,
  isRecipesLoading: true,
  numberOfSeasonsInView: 1
});

export function allSeasonsReducer(
  state = getDefaultState(),
  action: Action
): IAllSeasonState {
  switch (action.type) {
    case SET_ALL_SEASONS_WITH_FOOD_START:
      return {
        ...state,
        isFoodLoading: true
      };
    case SET_ALL_SEASONS_WITH_FOOD_SUCCESS:
      return {
        ...state,
        data: populateApiData(state, action),
        isFoodLoading: false
      };
    case SET_ALL_SEASONS_WITH_RECIPES_START:
      return {
        ...state,
        isRecipesLoading: true
      };
    case SET_ALL_SEASONS_WITH_RECIPES_SUCCESS:
      return {
        ...state,
        data: populateApiData(state, action),
        isRecipesLoading: false
      };
    case INCREASE_NUMBER_OF_ALL_FOOD_SEASONS_IN_VIEW:
      return {
        ...state,
        numberOfSeasonsInView: state.numberOfSeasonsInView + 1
      };
    default:
      return state;
  }
}
