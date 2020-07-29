import {
  selectLanguages,
  selectAreLanguagesLoading
} from './language.selectors';
import {
  setLanguagesStart,
  setLanguagesSuccess
} from './language.actions';
import { IState } from '../state.interface';
import { Action } from 'redux';
import { ILanguagesResponse, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { ILanguageState } from './language-state.interface';
import { languageReducer } from './language.reducer';

const updateState = (
  action: Action,
  initialState: ILanguageState | undefined = undefined
) => {
  const newSliceState = languageReducer(
    initialState, action
  );
  return {
    language: newSliceState
  } as IState;
};

describe('default state', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState({} as Action, undefined)
  );

  test('sets is loading to true', () =>
    expect(selectAreLanguagesLoading(newAppState)).toBe(true));

  test('sets languages to an empty array', () =>
    expect(selectLanguages(newAppState)).toHaveLength(0));
});

describe('set languages start', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState(setLanguagesStart())
  );

  test('sets is loading to true', () =>
    expect(selectAreLanguagesLoading(newAppState)).toBe(true));
});

describe('set languages success', () => {
  let newAppState: IState;
  const response = {
    languages: [LANGUAGES.EN_US]
  } as ILanguagesResponse;
  beforeEach(() =>
    newAppState = updateState(setLanguagesSuccess(response))
  );

  test('sets is loading to false', () =>
    expect(selectAreLanguagesLoading(newAppState)).toBe(false));

  test('sets the languages', () =>
    expect(selectLanguages(newAppState)).toBe(response.languages));

});
