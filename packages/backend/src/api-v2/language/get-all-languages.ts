import { ILanguagesResponse, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

export const getAllLanguages = (): ILanguagesResponse => ({
  languages: Object.values(LANGUAGES)
});
