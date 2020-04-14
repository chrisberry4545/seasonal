import {
  selectCurrentFoodDetails,
  selectIsCurrentFoodDetailsLoading
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

describe('set current food details sucess', () => {
  let newAppState: IState;
  const foodDetails = {} as IHydratedFood;
  beforeEach(() =>
    newAppState = updateState(setCurrentFoodDetailsSuccess(foodDetails))
  );

  test('sets is food details loading to false', () =>
    expect(selectIsCurrentFoodDetailsLoading(newAppState)).toBe(false));

  test('sets food details to the value in the action', () =>
    expect(selectCurrentFoodDetails(newAppState)).toBe(foodDetails));
});
