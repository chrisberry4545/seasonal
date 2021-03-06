import { createSelector } from 'reselect';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import {
  selectAllSeasons,
  selectNumberOfAllSeasonsInView
} from '../all-seasons';
import { getDataThatContainsSearchTerm } from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { selectCurrentSearchTerm } from '../ui';

export const selectAllSeasonsWithRecipesAndSearchAppliedData = createSelector(
  selectAllSeasons,
  selectCurrentSearchTerm,
  (seasons, searchTerm): IHydratedSeason[] | undefined => (
    seasons && seasons.map((season) => ({
      ...season,
      recipes: getDataThatContainsSearchTerm(searchTerm, season.recipes)
    }))
  )
);

export const selectAllSeasonsVisibleRecipesData = createSelector(
  selectAllSeasonsWithRecipesAndSearchAppliedData,
  selectCurrentSearchTerm,
  selectNumberOfAllSeasonsInView,
  (
    seasonsWithSearchApplied,
    searchTerm,
    numberOfSeasonsInView
  ): IHydratedSeason[] | undefined => {
    const filtered = seasonsWithSearchApplied &&
      seasonsWithSearchApplied.filter(({ recipes }) => recipes && recipes.length > 0);
    return filtered && (
      searchTerm
        ? filtered
        : filtered.slice(0, numberOfSeasonsInView)
    );
  }
);
