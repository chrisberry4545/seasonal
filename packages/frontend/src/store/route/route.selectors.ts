import { createMatchSelector, RouterRootState, getLocation } from 'connected-react-router';
import {
  BADGE_DETAILS_URL,
  FOOD_DETAILS_URL,
  ALL_SEASONS_URL,
  SETTINGS_URL
} from '../../const';
import { createSelector } from 'reselect';
import { IState } from '../../store';

export const selectCurrentFoodDetailsParams = createMatchSelector<
  RouterRootState,
  {
    id: string
  }
>(
  `${FOOD_DETAILS_URL}/:id`
);

export const selectCurrentFoodDetailsId = createSelector(
  selectCurrentFoodDetailsParams,
  (routeParams) => routeParams && routeParams.params.id
);

export const selectCurrentLocation = (state: IState) => getLocation(state);

export const selectCurrentPath = createSelector(
  selectCurrentLocation,
  (location) => location.pathname
);

export const selectIsCurrentRouteAllSeasons = createSelector(
  selectCurrentPath,
  (path) => path === ALL_SEASONS_URL
);

export const selectIsCurrentRouteSettings = createSelector(
  selectCurrentPath,
  (path) => path === SETTINGS_URL
);

export const selectCurrentBadgeDetailsParams = createMatchSelector<
  RouterRootState,
  {
    id: string
  }
>(
  `${BADGE_DETAILS_URL}/:id`
);

export const selectCurrentBadgeDetailsId = createSelector(
  selectCurrentBadgeDetailsParams,
  (routeParams) => routeParams && routeParams.params.id
);
