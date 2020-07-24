import { initLocalization } from './init-localization';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import * as setLocalization from './set-localization';

describe('initLocalization', () => {
  let mockSetLocalization: jest.SpyInstance;

  beforeEach(() => {
    initLocalization();
    mockSetLocalization = jest.spyOn(
      setLocalization, 'setLocalization'
    );
  });

  test('sets the en translations', () => expect(i18n.translations.en).toBeDefined());

  test('sets the locale', () =>
    expect(mockSetLocalization).toHaveBeenCalledWith(Localization.locale));

  test('sets fallback to true', () => expect(i18n.fallbacks).toBe(true));

});
