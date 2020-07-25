import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';
import { makeAuthorizedRequest } from './make-authorized-request';
import { TRANSLATIONS_BADGE_NAME_URL } from '../config';

export const updateTranslationsBadgeName = async (
  translation: ITranslationsBadgeName
): Promise<ITranslationsBadgeName> =>
  makeAuthorizedRequest<ITranslationsBadgeName>(TRANSLATIONS_BADGE_NAME_URL, {
    body: JSON.stringify(translation),
    method: 'PATCH'
  });
