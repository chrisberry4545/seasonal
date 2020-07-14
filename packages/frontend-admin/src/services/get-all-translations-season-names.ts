import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';
import { TRANSLATIONS_SEASON_NAME_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getAllTranslationsSeasonNames = async (): Promise<ITranslationsSeasonName[]> =>
  makeAuthorizedRequest<ITranslationsSeasonName[]>(TRANSLATIONS_SEASON_NAME_URL);
