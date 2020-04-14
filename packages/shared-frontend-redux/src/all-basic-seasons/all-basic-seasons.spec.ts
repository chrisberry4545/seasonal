import {
  setAllSeasonsStart,
  setAllBasicSeasonsSuccess
} from './all-basic-seasons.actions';
import {
  allBasicSeasonsReducer
} from './all-basic-seasons.reducer';
import {
  IAllBasicSeasonsState
} from './all-basic-seasons-state.interface';
import {
  selectIsBasicSeasonsLoading,
  selectAllBasicSeasons
} from './all-basic-seasons.selectors';
import { IState } from '../state.interface';
import { IBaseSeason } from '@chrisb-dev/seasonal-shared-models';
import { Action } from 'redux';

const updateState = (
  action: Action,
  initialState: IAllBasicSeasonsState | undefined = undefined
) => {
  const newSliceState = allBasicSeasonsReducer(
    initialState, action
  );
  return {
    allBasicSeasonData: newSliceState
  } as IState;
};

describe('default state', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState({} as Action));

  test('basic seasons is undefined', () =>
    expect(selectAllBasicSeasons(newAppState)).toBeUndefined());

  test('is loading is undefined', () =>
    expect(selectIsBasicSeasonsLoading(newAppState)).toBe(true));
});

describe('setAllSeasonsStart', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState(setAllSeasonsStart()));

  test('sets isLoading to true', () =>
    expect(selectIsBasicSeasonsLoading(newAppState)).toBe(true));
});

describe('setAllBasicSeasonsSuccess', () => {
  let newAppState: IState;
  const seasonData = [{}] as IBaseSeason[];

  beforeEach(() =>
  newAppState = updateState(setAllBasicSeasonsSuccess(seasonData)));

  test('sets all basic seasons', () =>
    expect(selectAllBasicSeasons(newAppState)).toBe(seasonData));
});
