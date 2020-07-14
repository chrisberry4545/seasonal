import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';
import { TRANSLATIONS_BADGE_NAME_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getAllTranslationsBadgeNames = async (): Promise<ITranslationsBadgeName[]> =>
  makeAuthorizedRequest<ITranslationsBadgeName[]>(TRANSLATIONS_BADGE_NAME_URL);
