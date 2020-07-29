import {
  TRANSLATION_URL,
  LANGUAGES
} from '@chrisb-dev/seasonal-shared-models';
import { handleErrors } from './handle-errors';

export const getTranslation = (
  language: LANGUAGES
): Promise<any> =>
  fetch(`${TRANSLATION_URL}/${language}`).then(handleErrors);
