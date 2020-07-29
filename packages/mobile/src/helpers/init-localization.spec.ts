import { initLocalization } from './init-localization';
import i18n from 'i18n-js';
import * as setLocalization from './set-localization';
import * as getLocale from './get-locale';
import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import * as getTranslation from '@chrisb-dev/seasonal-shared-frontend-utilities';

describe('initLocalization', () => {
  let mockSetLocalization: jest.SpyInstance;
  let mockGetTranslation: jest.SpyInstance;
  const translations = { en: { no: 'No' } };

  beforeEach(() => {
    jest.clearAllMocks();
    mockSetLocalization = jest.spyOn(
      setLocalization, 'setLocalization'
    );
    mockGetTranslation = jest.spyOn(getTranslation, 'getTranslation')
      .mockResolvedValue(translations);
    jest.spyOn(getLocale, 'getLocale')
      .mockReturnValue(LANGUAGES.EN_GB);
  });

  describe('when the locale is not set', () => {

    beforeEach(async () => {
      await initLocalization();
    });

    test('calls getTranslation', () =>
      expect(mockGetTranslation).toHaveBeenCalledWith(LANGUAGES.EN_GB));

    test('sets the translations', () =>
      expect(i18n.translations[LANGUAGES.EN_GB]).toBe(translations));

    test('sets the locale', () =>
      expect(mockSetLocalization).toHaveBeenCalledWith(LANGUAGES.EN_GB));

    test('sets fallback to true', () => expect(i18n.fallbacks).toBe(true));

  });

  describe('when the locale is set', () => {

    beforeEach(async () => {
      await initLocalization(LANGUAGES.EN_US);
    });

    test('calls getTranslation', () =>
      expect(mockGetTranslation).toHaveBeenCalledWith(LANGUAGES.EN_US));

    test('sets the locale', () =>
      expect(mockSetLocalization).toHaveBeenCalledWith(LANGUAGES.EN_US));

  });

});
