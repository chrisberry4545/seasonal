import {
  selectSettingsDietType,
  selectIsListViewShown,
  selectSettingsRegionId,
  selectSettingsTimesAppStarted,
  selectSettingsUserId,
  selectSettingsLanguage
} from './settings.selectors';
import {
  settingsReducer
} from './settings.reducer';
import {
  initSettings
} from './settings.actions';
import { IState } from '../state.interface';
import { Action } from 'redux';
import { ISettingsState } from './settings-state.interface';
import { DIET_TYPE, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import {
  selectSettingsState
} from './settings.selectors';
import {
  setDietType,
  toggleListView
} from './settings.actions';
import {
  setUserRegionDetected,
  setRegion
} from '../country';

const mockV4UserId = 'v4userId';
jest.mock('uuid', () => ({
  v4: () => mockV4UserId
}));

const updateState = (
  action: Action,
  initialState: ISettingsState | undefined = undefined
) => {
  const newSliceState = settingsReducer(
    initialState, action
  );
  return {
    settings: newSliceState
  } as IState;
};

describe('default state', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState({} as Action, undefined)
  );

  test('sets diet type to all', () =>
    expect(selectSettingsDietType(newAppState)).toBe(DIET_TYPE.ALL));

  test('sets list view shown to true', () =>
    expect(selectIsListViewShown(newAppState)).toBe(true));

  test('sets region Id to undefined', () =>
    expect(selectSettingsRegionId(newAppState)).toBeUndefined());

  test('sets times app started to 0', () =>
    expect(selectSettingsTimesAppStarted(newAppState)).toBe(0));

  test('sets user Id to undefined', () =>
    expect(selectSettingsUserId(newAppState)).toBeUndefined());
});

describe('init settings', () => {
  let newAppState: IState;
  const newSettings = {
    language: LANGUAGES.EN_US,
    timesAppStarted: 5
  } as ISettingsState;
  const initalSettings = {
    dietType: DIET_TYPE.VEGAN,
    timesAppStarted: 2
  } as ISettingsState;

  describe('when the settings include a userId', () => {
    const userId = 'userId';
    const settingsWithUserId = {
      ...newSettings,
      userId
    };

    beforeEach(() => newAppState = updateState(
      initSettings(settingsWithUserId),
      initalSettings
    ));

    test('keeps the existing userId', () =>
      expect(selectSettingsUserId(newAppState)).toBe(userId));

    test('sets the new settings', () =>
      expect(selectSettingsState(newAppState)).toEqual({
        ...initalSettings,
        ...settingsWithUserId
      }));

    test('sets the language', () =>
      expect(selectSettingsLanguage(newAppState)).toBe(LANGUAGES.EN_US));
  });

  describe('when the existing settings do not include a userId', () => {

    beforeEach(() => newAppState = updateState(
      initSettings(newSettings),
      initalSettings
    ));

    test('sets a new userId', () =>
      expect(selectSettingsUserId(newAppState)).toBe(mockV4UserId));

    test('sets the new settings', () =>
      expect(selectSettingsState(newAppState)).toEqual({
        ...initalSettings,
        ...newSettings,
        userId: mockV4UserId
      }));
  });

});

describe('set diet type', () => {
  let newAppState: IState;
  beforeEach(() => newAppState = updateState(
    setDietType(DIET_TYPE.VEGAN)
  ));

  test('updates the diet type', () =>
    expect(selectSettingsDietType(newAppState)).toBe(DIET_TYPE.VEGAN));

});

describe('set region', () => {
  const regionId = 'regionId';

  test.each([
    setUserRegionDetected(regionId),
    setRegion(regionId)
  ])('updates the selectedRegionId', (action) => {
    const newAppState = updateState(action);
    expect(selectSettingsRegionId(newAppState))
      .toBe(regionId);
  });

});

describe('toggle list view', () => {
  let newAppState: IState;

  describe('if list view is shown', () => {
    beforeEach(() => newAppState = updateState(
      toggleListView(),
      {
        isListViewShown: true
      } as ISettingsState
    ));

    test('sets is list view shown to false', () =>
      expect(selectIsListViewShown(newAppState)).toBe(false));
  });

  describe('if list view is hidden', () => {
    beforeEach(() => newAppState = updateState(
      toggleListView(),
      {
        isListViewShown: false
      } as ISettingsState
    ));

    test('sets is list view shown to true', () =>
      expect(selectIsListViewShown(newAppState)).toBe(true));
  });
});
