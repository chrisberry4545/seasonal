import {
  allSeasonsReducer,
  setAllSeasonsWithFoodStart,
  IAllSeasonState,
  selectIsAllSeasonsFoodLoading,
  selectAllSeasons,
  selectIsAllSeasonsRecipesLoading,
  selectNumberOfAllSeasonsInView,
  setAllSeasonsWithFoodSuccess,
  selectHasMoreSeasonsInAllSeasonsView,
  setAllSeasonsWithRecipesStart,
  setAllSeasonsWithRecipesSuccess,
  increaseNumberOfAllFoodSeasonsInView
} from './';
import { IState } from '../state.interface';
import { Action } from 'redux';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

const updateState = (
  action: Action,
  initialState: IAllSeasonState | undefined = undefined
) => {
  const newSliceState = allSeasonsReducer(
    initialState, action
  );
  return {
    allSeasons: newSliceState
  } as IState;
};

describe('default state', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState({} as Action));

  test('all seasons is undefined', () =>
    expect(selectAllSeasons(newAppState)).toBeUndefined());

  test('is food loading is true', () =>
    expect(selectIsAllSeasonsFoodLoading(newAppState)).toBe(true));

  test('is recipes loading is true', () =>
    expect(selectIsAllSeasonsRecipesLoading(newAppState)).toBe(true));

  test('number in seasons in view is 1', () =>
    expect(selectNumberOfAllSeasonsInView(newAppState)).toBe(1));
});

describe('setAllSeasonsWithFoodStart', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState(setAllSeasonsWithFoodStart()));

  test('sets food loading to true', () =>
    expect(selectIsAllSeasonsFoodLoading(newAppState)).toBe(true));
});

describe('setAllSeasonsWithFoodSuccess', () => {
  let newAppState: IState;
  const seasonWithFood = [{}] as IHydratedSeason[];
  beforeEach(() =>
    newAppState = updateState(setAllSeasonsWithFoodSuccess(seasonWithFood))
  );

  test('sets food loading to false', () =>
    expect(selectIsAllSeasonsFoodLoading(newAppState)).toBe(false));

  test('sets season data to data in action', () =>
    expect(selectAllSeasons(newAppState)).toBe(seasonWithFood));
});

describe('setAllSeasonsWithRecipesStart', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState(setAllSeasonsWithRecipesStart())
  );

  test('sets recipes loading to true', () =>
    expect(selectIsAllSeasonsRecipesLoading(newAppState)).toBe(true));
});

describe('setAllSeasonsWithRecipesSuccess', () => {
  let newAppState: IState;
  const seasonWithRecipes = [{}] as IHydratedSeason[];
  beforeEach(() =>
    newAppState = updateState(setAllSeasonsWithRecipesSuccess(seasonWithRecipes))
  );

  test('sets recipes loading to false', () =>
    expect(selectIsAllSeasonsRecipesLoading(newAppState)).toBe(false));

  test('sets season data to data in action', () =>
    expect(selectAllSeasons(newAppState)).toBe(seasonWithRecipes));
});

describe('setAllSeasonsWithRecipesSuccess', () => {
  let newAppState: IState;
  const seasonWithRecipes = [{}] as IHydratedSeason[];
  beforeEach(() =>
    newAppState = updateState(setAllSeasonsWithRecipesSuccess(seasonWithRecipes))
  );

  test('sets recipes loading to false', () =>
    expect(selectIsAllSeasonsRecipesLoading(newAppState)).toBe(false));

  test('sets season data to data in action', () =>
    expect(selectAllSeasons(newAppState)).toBe(seasonWithRecipes));
});

describe('increaseNumberOfAllFoodSeasonsInView', () => {
  let newAppState: IState;
  beforeEach(() => newAppState = updateState(
    increaseNumberOfAllFoodSeasonsInView(),
    {
      numberOfSeasonsInView: 1
    } as IAllSeasonState
  ));

  test('adds one to the number of all food seasons in view', () =>
    expect(selectNumberOfAllSeasonsInView(newAppState)).toBe(2));

  describe('when there are more seasons not currently in view', () => {
    beforeEach(() => {
      newAppState = updateState(
        increaseNumberOfAllFoodSeasonsInView(),
        {
          data: [{}, {}, {}],
          numberOfSeasonsInView: 1
        } as IAllSeasonState
      );
    });

    test('selectHasMoreSeasonsInAllSeasonsView returns true', () =>
      expect(selectHasMoreSeasonsInAllSeasonsView(newAppState)).toBe(true));
  });

  describe('when there are not more seasons which are not currently in view', () => {
    beforeEach(() => {
      updateState(
        increaseNumberOfAllFoodSeasonsInView(),
        {
          data: [{}, {}],
          numberOfSeasonsInView: 1
        } as IAllSeasonState
      );
    });

    test('selectHasMoreSeasonsInAllSeasonsView returns false', () =>
      expect(selectHasMoreSeasonsInAllSeasonsView(newAppState)).toBe(false));
  });
});
