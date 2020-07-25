import { setLocalization } from './set-localization';
import i18n from 'i18n-js';
import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import * as Localization from 'expo-localization';

describe('setLocalization', () => {
  test('sets the localization', () => {
    setLocalization(Localization.locale as LANGUAGES);
    expect(i18n.locale).toBe(Localization.locale);
  });
});
