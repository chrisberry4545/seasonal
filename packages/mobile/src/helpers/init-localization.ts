import i18n from 'i18n-js';
import { setLocalization } from './set-localization';
import { getLocale } from './get-locale';
import { getTranslation } from '@chrisb-dev/seasonal-shared-frontend-utilities';

export const initLocalization = async (
  locale = getLocale()
) => {
  const translation = await getTranslation(locale);
  i18n.translations = {
    ...i18n.translations,
    [locale]: translation
  };
  setLocalization(locale);
  i18n.fallbacks = true;
};
