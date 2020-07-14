import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';
import { makeAuthorizedRequest } from './make-authorized-request';
import { TRANSLATIONS_REGION_NAME_URL } from '../config';

export const createTranslationsRegionName = async (
  translation: ITranslationsRegionName
): Promise<ITranslationsRegionName> =>
  makeAuthorizedRequest<ITranslationsRegionName>(TRANSLATIONS_REGION_NAME_URL, {
    body: JSON.stringify(translation),
    method: 'POST'
  });
