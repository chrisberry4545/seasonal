import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import i18n from 'i18n-js';

export const setLocalization = (language: LANGUAGES) =>
  i18n.locale = language;
