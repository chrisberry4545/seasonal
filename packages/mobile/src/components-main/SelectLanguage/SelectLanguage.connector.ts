import { connect } from 'react-redux';
import {
  SelectLanguage
} from './SelectLanguage';
import {
  setLanguage, selectSettingsLanguage
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import {
  ISelectLanguageDispatchProps,
  ISelectLanguageInputProps
} from './SelectLanguage.interface';
import { Dispatch } from 'redux';
import { IState } from '../../store';
import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import i18n from 'i18n-js';
import { selectLanguages } from '../../store/language/language.selectors';

const mapStateToProps = (state: IState): ISelectLanguageInputProps => ({
  languages: selectLanguages(state).map((language) => ({
    isSelected: selectSettingsLanguage(state) === language,
    name: i18n.t(language),
    value: language
  }))
});

const mapDispatchToProps = (
  dispatch: Dispatch
): ISelectLanguageDispatchProps => ({
  onLanguageSelected: (language: LANGUAGES) => dispatch(setLanguage(language))
});

export const SelectLanguageConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectLanguage);
