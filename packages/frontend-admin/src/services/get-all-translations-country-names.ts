import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';
import { TRANSLATIONS_COUNTRY_NAME_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getAllTranslationsCountryNames = async (): Promise<ITranslationsCountryName[]> =>
  makeAuthorizedRequest<ITranslationsCountryName[]>(TRANSLATIONS_COUNTRY_NAME_URL);
