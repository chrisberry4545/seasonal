import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { getAllTranslations } from './get-all-translations';

export const getTranslation = (
  language: LANGUAGES
) => {
  const translations = getAllTranslations();
  const supportedLanguages = Object.keys(translations);
  const firstPartOfLanguage = language && language.split('-')[0] as LANGUAGES;
  const translationToUse = supportedLanguages.includes(language)
    ? language
    : supportedLanguages.includes(firstPartOfLanguage)
    ? firstPartOfLanguage
    : 'en';
  return (translations as any)[translationToUse];
};
