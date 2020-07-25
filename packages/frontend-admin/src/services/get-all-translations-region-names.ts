import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';
import { TRANSLATIONS_REGION_NAME_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getAllTranslationsRegionNames = async (): Promise<ITranslationsRegionName[]> =>
  makeAuthorizedRequest<ITranslationsRegionName[]>(TRANSLATIONS_REGION_NAME_URL);
