import { createSelector } from 'reselect';
import {
  ICountry, IRegion
} from '@chrisb-dev/seasonal-shared-models';
import { IState, ICountryState } from '../interfaces';

const selectCountryState = (
  state: IState
): ICountryState => state.countryData;

export const selectAreCountriesLoading = createSelector(
  selectCountryState,
  (countryState): boolean => countryState.isLoading
);

export const selectCountries = createSelector(
  selectCountryState,
  (countryState): ICountry[] | undefined => countryState.data
);

export const selectAllRegions = createSelector(
  selectCountries,
  (countries): IRegion[] | undefined => countries &&
    countries.reduce((allRegions, nextCountry) => [
      ...allRegions,
      ...nextCountry.regions
    ], [] as IRegion[])
);
