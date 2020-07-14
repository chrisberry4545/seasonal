import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';
import { makeAuthorizedRequest } from './make-authorized-request';
import { TRANSLATIONS_COUNTRY_NAME_URL } from '../config';

export const updateTranslationsCountryName = async (
  translation: ITranslationsCountryName
): Promise<ITranslationsCountryName> =>
  makeAuthorizedRequest<ITranslationsCountryName>(TRANSLATIONS_COUNTRY_NAME_URL, {
    body: JSON.stringify(translation),
    method: 'PATCH'
  });
