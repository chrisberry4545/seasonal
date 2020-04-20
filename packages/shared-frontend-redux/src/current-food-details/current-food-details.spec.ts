import {
  selectCurrentFoodDetails,
  selectIsCurrentFoodDetailsLoading,
  selectCurrentFoodDetailsBadges,
  selectCurrentFoodDetailsId,
  selectCurrentFoodDetailsName,
  selectCurrentFoodDetailsImageUrl,
  selectCurrentFoodDetailsSeasons,
  selectCurrentFoodDetailsRecipes
} from './current-food-details.selectors';
import {
  currentFoodDetailsReducer
} from './current-food-details.reducer';
import {
  setCurrentFoodDetailsStart,
  setCurrentFoodDetailsSuccess
} from './current-food-details.actions';
import { IState } from '../state.interface';
import { Action } from 'redux';
import { IHydratedFood } from '@chrisb-dev/seasonal-shared-models';
import { ICurrentFoodDetailsState } from './current-food-details-state.interface';

const updateState = (
  action: Action,
  initialState: ICurrentFoodDetailsState | undefined = undefined
) => {
  const newSliceState = currentFoodDetailsReducer(
    initialState, action
  );
  return {
    currentFoodDetailsData: newSliceState
  } as IState;
};

describe('default state', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState({} as Action, undefined)
  );

  test('sets is loading to true', () =>
    expect(selectIsCurrentFoodDetailsLoading(newAppState)).toBe(true));

  test('sets the food details data to undefined', () =>
    expect(selectCurrentFoodDetails(newAppState)).toBeUndefined());
});

describe('set current food details start', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState(setCurrentFoodDetailsStart())
  );

  test('sets is food details loading to true', () =>
    expect(selectIsCurrentFoodDetailsLoading(newAppState)).toBe(true));
});

describe('set current food details success', () => {
  let newAppState: IState;
  const foodDetails = {
    badges: [{
      color: '#FFFFFF',
      id: '1'
    }],
    id: 'id',
    imageUrlSmall: 'https://image.com',
    name: 'n1',
    primaryFoodInRecipe: [{ name: 'p1' }],
    seasons: [{}],
    secondaryFoodInRecipe: [{ name: 's2' }, { name: 's2' }]
  } as IHydratedFood;
  beforeEach(() =>
    newAppState = updateState(setCurrentFoodDetailsSuccess(foodDetails))
  );

  test('sets is food details loading to false', () =>
    expect(selectIsCurrentFoodDetailsLoading(newAppState)).toBe(false));

  test('sets food details to the value in the action', () =>
    expect(selectCurrentFoodDetails(newAppState)).toBe(foodDetails));

  test('sets the current food details id', () =>
    expect(selectCurrentFoodDetailsId(newAppState)).toBe(foodDetails.id));

  test('sets the current food details name', () =>
    expect(selectCurrentFoodDetailsName(newAppState)).toBe(foodDetails.name));

  test('sets the current food details image url', () =>
    expect(selectCurrentFoodDetailsImageUrl(newAppState)).toBe(foodDetails.imageUrlSmall));

  test('sets the current food details seasons', () =>
    expect(selectCurrentFoodDetailsSeasons(newAppState)).toBe(foodDetails.seasons));

  test('sets the current food details recipe', () =>
    expect(selectCurrentFoodDetailsRecipes(newAppState)).toEqual([
      ...foodDetails.primaryFoodInRecipe!,
      ...foodDetails.secondaryFoodInRecipe!
    ]));

  test('sets the current food details badges', () =>
    expect(selectCurrentFoodDetailsBadges(newAppState)).toBe(foodDetails.badges));
});
