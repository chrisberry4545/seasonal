import { initLocalization } from './init-localization';
import i18n from 'i18n-js';
import * as setLocalization from './set-localization';
import * as getLocale from './get-locale';
import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

describe('initLocalization', () => {
  let mockSetLocalization: jest.SpyInstance;

  beforeEach(() => {
    mockSetLocalization = jest.spyOn(
      setLocalization, 'setLocalization'
    );
    jest.spyOn(getLocale, 'getLocale')
      .mockReturnValue(LANGUAGES.EN_GB);
  });

  describe('when the locale is a base locale', () => {

    beforeEach(() => {
      jest.spyOn(getLocale, 'getLocale')
        .mockReturnValue('en' as LANGUAGES);
      initLocalization();
    });

    test('sets the en translations', () => expect(i18n.translations.en).toBeDefined());

    test('sets the locale', () =>
      expect(mockSetLocalization).toHaveBeenCalledWith('en'));

    test('sets fallback to true', () => expect(i18n.fallbacks).toBe(true));

  });

  describe('when the base locale is supported', () => {

    beforeEach(() => {
      jest.spyOn(getLocale, 'getLocale')
        .mockReturnValue(LANGUAGES.EN_GB);
      initLocalization();
    });

    test('sets the locale to the base locale', () =>
      expect(mockSetLocalization).toHaveBeenCalledWith('en'));

  });

  describe('when the locale nor base locale is supported', () => {
    const unsupportedLanguage = 'unsupported' as LANGUAGES;

    beforeEach(() => {
      jest.spyOn(getLocale, 'getLocale')
        .mockReturnValue(unsupportedLanguage);
      initLocalization();
    });

    test('sets the locale to the the local value', () =>
      expect(mockSetLocalization).toHaveBeenCalledWith(unsupportedLanguage));

  });

});
