import { createSelector } from 'reselect';
import { IState } from '../state.interface';
import { ILanguageState } from './language-state.interface';
import { LANGUAGES, ILanguagesResponse } from '@chrisb-dev/seasonal-shared-models';

const selectLanguageState = (
  state: IState
): ILanguageState => state.language;

export const selectAreLanguagesLoading = createSelector(
  selectLanguageState,
  (state): boolean => state.isLoading
);

export const selectResponse = createSelector(
  selectLanguageState,
  (state): ILanguagesResponse => state.response
);

export const selectLanguages = createSelector(
  selectResponse,
  (response): LANGUAGES[] => response.languages
);
