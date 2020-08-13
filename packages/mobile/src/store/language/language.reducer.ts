import {
  SET_LANGUAGES_START,
  SET_LANGUAGES_SUCCESS,
  ISetLanguagesSuccess
} from './language.actions';
import { Action } from 'redux';
import { ILanguageState } from './language-state.interface';

const getDefaultState = (): ILanguageState => ({
  isLoading: true,
  response: {
    languages: []
  }
});

export function languageReducer(
  state = getDefaultState(),
  action: Action
): ILanguageState {
  switch (action.type) {
    case SET_LANGUAGES_START:
      return {
        ...state,
        isLoading: true
      };
    case SET_LANGUAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: (action as ISetLanguagesSuccess).response
      };
    default:
      return state;
  }
}
