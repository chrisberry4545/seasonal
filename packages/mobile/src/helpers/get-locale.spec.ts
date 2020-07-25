import { getLocale } from './get-locale';
import { locale } from 'expo-localization';

describe('getLocale', () => {

  test('returns the locale', () => expect(getLocale()).toBe(locale));

});
