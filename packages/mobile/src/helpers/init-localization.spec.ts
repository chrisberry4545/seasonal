import { initLocalization } from './init-localization';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

describe('initLocalization', () => {

  beforeEach(() => {
    initLocalization();
  });

  test('sets the en translations', () => expect(i18n.translations.en).toBeDefined());

  test('sets the locale', () => expect(i18n.locale).toBe(Localization.locale));

  test('sets fallback to true', () => expect(i18n.fallbacks).toBe(true));

});
