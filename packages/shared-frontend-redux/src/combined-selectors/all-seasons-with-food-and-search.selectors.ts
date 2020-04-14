import { createSelector } from 'reselect';
import { IHydratedSeason, IAllSeasonsGraphData } from '@chrisb-dev/seasonal-shared-models';
import {
  selectAllSeasons,
  selectNumberOfAllSeasonsInView
} from '../all-seasons';
import { getDataThatContainsSearchTerm } from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { selectCurrentSearchTerm } from '../ui';

export const selectAllSeasonsWithFoodAndSearchAppliedData = createSelector(
  selectAllSeasons,
  selectCurrentSearchTerm,
  (seasons, searchTerm): IHydratedSeason[] | undefined => (
    seasons && seasons.map((season) => ({
      ...season,
      food: getDataThatContainsSearchTerm(searchTerm, season.food)
    }))
  )
);

export const selectAllSeasonsVisibleFoodData = createSelector(
  selectAllSeasonsWithFoodAndSearchAppliedData,
  selectCurrentSearchTerm,
  selectNumberOfAllSeasonsInView,
  (
    seasonsWithSearchApplied,
    searchTerm,
    numberOfSeasonsInView
  ): IHydratedSeason[] | undefined => (
    seasonsWithSearchApplied &&
      (
        searchTerm
          ? seasonsWithSearchApplied
          : seasonsWithSearchApplied.slice(0, numberOfSeasonsInView)
      ).filter(({ food }) => food && food.length > 0)
    )
);

export const selectFoodInSeasonGraphData = createSelector(
  selectAllSeasonsWithFoodAndSearchAppliedData,
  (allSeasonData): IAllSeasonsGraphData[] | undefined => (
    allSeasonData && allSeasonData.map(({ name, food }) => ({
      'Number of food items in season': food
        ? food.length
        : 0,
      'name': name
    }))
  )
);
