import { createSelector } from 'reselect';
import {
  selectAllRegions, selectCountries
} from '../country.selectors';
import {
  selectSettingsRegionId
} from '../settings.selectors';
import { IRegion, IGroupedSelectOptions } from '@chrisb-dev/seasonal-shared-models';

export const selectCurrentRegion = createSelector(
  selectAllRegions,
  selectSettingsRegionId,
  (allRegions, regionId): IRegion | undefined => (
    allRegions &&
    allRegions.find((region) => region.id === regionId)
  )
);

export const selectCountryAndRegionsSelectGroup = createSelector(
  selectCountries,
  selectSettingsRegionId,
  (countries, regionId): IGroupedSelectOptions[] | undefined => (
    countries && countries.map((country) => ({
      groupName: country.name,
      selectOptions: country.regions.map((region) => ({
        isSelected: region.id === regionId,
        name: region.name,
        value: region.id
      }))
    }))
  )
);
