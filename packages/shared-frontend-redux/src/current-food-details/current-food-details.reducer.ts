import {
  SET_CURRENT_FOOD_DETAILS_START,
  SET_CURRENT_FOOD_DETAILS_SUCCESS,
  ISetCurrentFoodDetailsSuccess
} from './current-food-details.actions';
import {
  ICurrentFoodDetailsState
} from './current-food-details-state.interface';
import { Action } from 'redux';

const getDefaultState = (): ICurrentFoodDetailsState => ({
  data: undefined,
  isLoading: true
});

export function currentFoodDetailsReducer(
  state = getDefaultState(),
  action: Action
): ICurrentFoodDetailsState {
  switch (action.type) {
    case SET_CURRENT_FOOD_DETAILS_START:
      return {
        ...state,
        isLoading: true
      };
    case SET_CURRENT_FOOD_DETAILS_SUCCESS:
      return {
        ...state,
        data: (action as ISetCurrentFoodDetailsSuccess)
          .currentFoodDetailsData,
        isLoading: false
      };
    default:
      return state;
  }
}
