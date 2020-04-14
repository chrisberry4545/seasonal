import {
  getCountriesStart,
  getCountriesSuccess
} from './country.actions';
import {
  ICountryState
} from './country-state.interface';
import {
  countryReducer
} from './country.reducer';
import {
  selectAreCountriesLoading,
  selectCountries,
  selectAllRegions
} from './country.selectors';
import { IState } from '../state.interface';
import { Action } from 'redux';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';

const updateState = (
  action: Action,
  initialState: ICountryState | undefined = undefined
) => {
  const newSliceState = countryReducer(
    initialState, action
  );
  return {
    countryData: newSliceState
  } as IState;
};

describe('default state', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState({} as Action, undefined)
  );

  test('sets is loading to true', () =>
    expect(selectAreCountriesLoading(newAppState)).toBe(true));

  test('sets the country data to undefined', () =>
    expect(selectCountries(newAppState)).toBeUndefined());
});

describe('getCountriesStart', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState(getCountriesStart())
  );

  test('sets is loading to true', () =>
    expect(selectAreCountriesLoading(newAppState)).toBe(true));
});

describe('getCountriesSuccess', () => {
  let newAppState: IState;
  const countries = [{
    regions: [{
      name: 'r1'
    }]
  }, {
    regions: [{
      name: 'r2'
    }]
  }] as ICountry[];
  beforeEach(() =>
    newAppState = updateState(getCountriesSuccess(countries))
  );

  test('sets countries to the value in the action', () =>
    expect(selectCountries(newAppState)).toBe(countries));

  test('selectAllRegions returns all regions', () =>
    expect(selectAllRegions(newAppState)).toEqual([
      ...countries[0].regions,
      ...countries[1].regions
    ]));
});
