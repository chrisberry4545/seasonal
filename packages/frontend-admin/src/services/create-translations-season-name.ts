import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';
import { makeAuthorizedRequest } from './make-authorized-request';
import { TRANSLATIONS_SEASON_NAME_URL } from '../config';

export const createTranslationsSeasonName = async (
  translation: ITranslationsSeasonName
): Promise<ITranslationsSeasonName> =>
  makeAuthorizedRequest<ITranslationsSeasonName>(TRANSLATIONS_SEASON_NAME_URL, {
    body: JSON.stringify(translation),
    method: 'POST'
  });
