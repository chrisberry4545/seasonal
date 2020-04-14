import {
  selectCurrentSeason,
  selectCurrentSeasonFood,
  selectCurrentSeasonRecipes,
  selectIsCurrentSeasonFoodLoading,
  selectIsCurrentSeasonRecipesLoading,
  selectCurrentSeasonIndex,
  selectCurrentSeasonName
} from './current-season.selectors';
import {
  currentSeasonWithFoodReducer
} from './current-season.reducer';
import {
  setCurrentSeasonWithFoodStart,
  setCurrentSeasonWithFoodSuccess,
  setCurrentSeasonWithRecipesStart,
  setCurrentSeasonWithRecipesSuccess
} from './current-season.actions';
import { IState } from '../state.interface';
import { Action } from 'redux';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { ICurrentSeasonState } from './current-season-state.interface';
import {
  selectCurrentSeasonRecipesById
} from './current-season.selectors';
import { setSelectedSeasonName } from './current-season-name.actions';
import {
  foodDetailsSelectSeason,
  selectSeason
} from '../ui';

jest.mock('@chrisb-dev/seasonal-shared-frontend-utilities', () => ({
  getCurrentSeasonIndex: () => 1
}));

const updateState = (
  action: Action,
  initialState: ICurrentSeasonState | undefined = undefined
) => {
  const newSliceState = currentSeasonWithFoodReducer(
    initialState, action
  );
  return {
    currentSeasonData: newSliceState
  } as IState;
};

describe('default state', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState({} as Action, undefined)
  );

  test('sets is food loading to true', () =>
    expect(selectIsCurrentSeasonFoodLoading(newAppState)).toBe(true));

  test('sets is recipes loading to true', () =>
    expect(selectIsCurrentSeasonRecipesLoading(newAppState)).toBe(true));

  test('sets the current seaason to undefined', () =>
    expect(selectCurrentSeason(newAppState)).toBeUndefined());

  test('sets current season index to the result of getCurrentSeaosnIndex', () =>
    expect(selectCurrentSeasonIndex(newAppState)).toBe(1));
});

describe('set current season with food start', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState(setCurrentSeasonWithFoodStart())
  );

  test('sets is current season with food is loading to true', () =>
    expect(selectIsCurrentSeasonFoodLoading(newAppState)).toBe(true));
});

describe('set current season with food success', () => {
  let newAppState: IState;
  const season = {
    food: [{}, {}]
  } as IHydratedSeason;
  beforeEach(() =>
    newAppState = updateState(setCurrentSeasonWithFoodSuccess(season))
  );

  test('sets is current season with food is loading to false', () =>
    expect(selectIsCurrentSeasonFoodLoading(newAppState)).toBe(false));

  test('sets the current season food data', () =>
    expect(selectCurrentSeasonFood(newAppState)).toBe(season.food));

  test('sets the current season', () =>
    expect(selectCurrentSeason(newAppState)).toEqual(season));

  describe('when a current season already exists', () => {
    const currentState = {
      data: {
        recipes: [{}]
      }
    } as ICurrentSeasonState;
    beforeEach(() => newAppState = updateState(
      setCurrentSeasonWithFoodSuccess(season),
      currentState
    ));

    test('sets the current season food data', () =>
      expect(selectCurrentSeasonFood(newAppState)).toBe(season.food));

    test('does not loose existing recipe data', () =>
      expect(selectCurrentSeasonRecipes(newAppState))
        .toBe(currentState.data?.recipes));
  });
});

describe('set current season with recipes start', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState(setCurrentSeasonWithRecipesStart())
  );

  test('sets is current season with recipes is loading to true', () =>
    expect(selectIsCurrentSeasonRecipesLoading(newAppState)).toBe(true));
});

describe('set current season with recipes success', () => {
  let newAppState: IState;
  const season = {
    recipes: [{
      id: 'id1'
    }, {}]
  } as IHydratedSeason;
  beforeEach(() =>
    newAppState = updateState(setCurrentSeasonWithRecipesSuccess(season))
  );

  test('sets is current season with recipes is loading to false', () =>
    expect(selectIsCurrentSeasonRecipesLoading(newAppState)).toBe(false));

  test('sets the current season recipes data', () =>
    expect(selectCurrentSeasonRecipes(newAppState)).toBe(season.recipes));

  test('sets the current season recipe ids', () =>
    expect(selectCurrentSeasonRecipesById('id1')(newAppState))
      .toBe(season.recipes && season.recipes[0]));

  test('sets the current season', () =>
    expect(selectCurrentSeason(newAppState)).toEqual(season));

  describe('when a current season already exists', () => {
    const currentState = {
      data: {
        recipes: [{}]
      }
    } as ICurrentSeasonState;
    beforeEach(() => newAppState = updateState(
      setCurrentSeasonWithFoodSuccess(season),
      currentState
    ));

    test('sets the current season recipes data', () =>
      expect(selectCurrentSeasonRecipes(newAppState)).toBe(season.recipes));

    test('does not loose existing food data', () =>
      expect(selectCurrentSeasonFood(newAppState))
        .toBe(currentState.data?.food));
  });
});

describe('on season selected', () => {
  const seasonIndex = 1;

  test.each([
    selectSeason(seasonIndex),
    foodDetailsSelectSeason(seasonIndex)
  ])('sets currentSeasonIndex to the value supplied', (action) => {
    const newAppState = updateState(action, undefined);
    expect(selectCurrentSeasonIndex(newAppState)).toBe(seasonIndex);
  });

});

describe('set selected season name', () => {
  let newAppState: IState;
  const seasonName = 'seasonName';

  describe('when no state exists', () => {

    beforeEach(() =>
      newAppState = updateState(
        setSelectedSeasonName(seasonName)
      )
    );

    test('does not set a name', () =>
      expect(selectCurrentSeasonName(newAppState)).toBeUndefined());
  });

  describe('when state with data already exists', () => {

    beforeEach(() =>
      newAppState = updateState(
        setSelectedSeasonName(seasonName),
        {
          data: {}
        } as ICurrentSeasonState
      )
    );

    test('sets select season name to value', () =>
      expect(selectCurrentSeasonName(newAppState)).toBe(seasonName));

  });

});
