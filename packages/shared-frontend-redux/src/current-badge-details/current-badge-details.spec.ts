import {
  selectCurrentBadgeDetails,
  selectIsCurrentBadgeDetailsLoading,
  selectCurrentBadgeDetailsId,
  selectCurrentBadgeDetailsName,
  selectCurrentBadgeDetailsFood
} from './current-badge-details.selectors';
import {
  currentBadgeDetailsReducer
} from './current-badge-details.reducer';
import {
  setCurrentBadgeDetailsStart,
  setCurrentBadgeDetailsSuccess
} from './current-badge-details.actions';
import { IState } from '../state.interface';
import { Action } from 'redux';
import { IHydratedBadge } from '@chrisb-dev/seasonal-shared-models';
import { ICurrentBadgeDetailsState } from './current-badge-details-state.interface';

const updateState = (
  action: Action,
  initialState: ICurrentBadgeDetailsState | undefined = undefined
) => {
  const newSliceState = currentBadgeDetailsReducer(
    initialState, action
  );
  return {
    currentBadgeDetailsData: newSliceState
  } as IState;
};

describe('default state', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState({} as Action, undefined)
  );

  test('sets is loading to true', () =>
    expect(selectIsCurrentBadgeDetailsLoading(newAppState)).toBe(true));

  test('sets the badge details data to undefined', () =>
    expect(selectCurrentBadgeDetails(newAppState)).toBeUndefined());
});

describe('set current badge details start', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState(setCurrentBadgeDetailsStart())
  );

  test('sets is badge details loading to true', () =>
    expect(selectIsCurrentBadgeDetailsLoading(newAppState)).toBe(true));
});

describe('set current badge details success', () => {
  let newAppState: IState;
  const badgeDetails = {
    food: [{}],
    id: '1',
    name: 'badge 1'
  } as IHydratedBadge;
  beforeEach(() =>
    newAppState = updateState(setCurrentBadgeDetailsSuccess(badgeDetails))
  );

  test('sets is badge details loading to false', () =>
    expect(selectIsCurrentBadgeDetailsLoading(newAppState)).toBe(false));

  test('sets badge details to the value in the action', () =>
    expect(selectCurrentBadgeDetails(newAppState)).toBe(badgeDetails));

  test('sets the current badge details id', () =>
    expect(selectCurrentBadgeDetailsId(newAppState)).toBe(badgeDetails.id));

  test('sets the current badge details name', () =>
    expect(selectCurrentBadgeDetailsName(newAppState)).toBe(badgeDetails.name));

  test('sets the current food details food', () =>
    expect(selectCurrentBadgeDetailsFood(newAppState)).toBe(badgeDetails.food));
});
