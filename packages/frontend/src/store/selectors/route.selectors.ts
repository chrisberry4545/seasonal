import { createMatchSelector, RouterRootState, getLocation } from 'connected-react-router';
import { FOOD_DETAILS_URL, ALL_SEASONS_URL } from '../../const';
import { createSelector } from 'reselect';
import { IState } from '../../interfaces';

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
