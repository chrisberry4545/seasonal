import { createSelector } from 'reselect';
import {
  selectAllRegions, selectCountries
} from '../country.selectors';
import {
  selectSettingsRegionCode
} from '../settings.selectors';
import { IRegion, IGroupedSelectOptions } from '@chrisb-dev/seasonal-shared-models';

export const selectCurrentRegion = createSelector(
  selectAllRegions,
  selectSettingsRegionCode,
  (allRegions, regionCode): IRegion | undefined => (
    allRegions &&
    allRegions.find((region) => region.code === regionCode)
  )
);

export const selectCountryAndRegionsSelectGroup = createSelector(
  selectCountries,
  selectSettingsRegionCode,
  (countries, regionCode): IGroupedSelectOptions[] | undefined => (
    countries && countries.map((country) => ({
      groupName: country.name,
      selectOptions: country.regions.map((region) => ({
        isSelected: region.code === regionCode,
        name: region.name,
        value: region.code
      }))
    }))
  )
);
