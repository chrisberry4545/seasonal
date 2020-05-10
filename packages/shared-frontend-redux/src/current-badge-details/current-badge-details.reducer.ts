import {
  SET_CURRENT_BADGE_DETAILS_START,
  SET_CURRENT_BADGE_DETAILS_SUCCESS,
  ISetCurrentBadgeDetailsSuccess
} from './current-badge-details.actions';
import {
  ICurrentBadgeDetailsState
} from './current-badge-details-state.interface';
import { Action } from 'redux';

const getDefaultState = (): ICurrentBadgeDetailsState => ({
  data: undefined,
  isLoading: true
});

export function currentBadgeDetailsReducer(
  state = getDefaultState(),
  action: Action
): ICurrentBadgeDetailsState {
  switch (action.type) {
    case SET_CURRENT_BADGE_DETAILS_START:
      return {
        ...state,
        isLoading: true
      };
    case SET_CURRENT_BADGE_DETAILS_SUCCESS:
      return {
        ...state,
        data: (action as ISetCurrentBadgeDetailsSuccess)
          .currentBadgeDetailsData,
        isLoading: false
      };
    default:
      return state;
  }
}
