import {
  LANGUAGE_URL,
  ILanguagesResponse
} from '@chrisb-dev/seasonal-shared-models';
import { handleErrors } from './handle-errors';

export const getAllLanguages = (): Promise<ILanguagesResponse> =>
  fetch(LANGUAGE_URL).then(handleErrors);
