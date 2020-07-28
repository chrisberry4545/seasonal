import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { getTranslation } from './get-translation';
import * as getAllTranslations from './get-all-translations';

describe('getTranslation', () => {
  let result: any;
  const translations = {
    en: {
      no: 'No'
    },
    [LANGUAGES.EN_US]: {
      yes: 'YES'
    }
  };

  beforeEach(() => {
    result = undefined;
    jest.spyOn(getAllTranslations, 'getAllTranslations')
      .mockReturnValue(translations);
  });

  describe('when the base translation exists', () => {
    beforeEach(() => {
      result = getTranslation(LANGUAGES.EN_GB);
    });

    test('returns the base translations', () => expect(result).toBe(translations.en));
  });

  describe('when the exact translation exists', () => {
    beforeEach(() => {
      result = getTranslation(LANGUAGES.EN_US);
    });

    test('returns the exact translations', () =>
      expect(result).toBe(translations[LANGUAGES.EN_US]));
  });

  describe('when neither the exact or base translation exists', () => {
    beforeEach(() => {
      result = getTranslation(LANGUAGES.FR_FR);
    });

    test('returns the base english translation', () =>
      expect(result).toBe(translations.en));
  });

});
