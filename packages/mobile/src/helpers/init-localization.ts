import i18n from 'i18n-js';
import { setLocalization } from './set-localization';
import { getLocale } from './get-locale';
import { getTranslation } from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

export const initLocalization = async (
  locale?: LANGUAGES
) => {
  let language: LANGUAGES | undefined = locale;
  if (!language) {
    try {
      language = getLocale();
    } catch (e) {
      language = undefined;
    }
  }
  const languageToUse = language || LANGUAGES.EN_GB;
  const translation = await getTranslation(languageToUse);
  i18n.translations = {
    ...i18n.translations,
    [languageToUse]: translation
  };
  setLocalization(languageToUse);
  i18n.fallbacks = true;
};
