import { ILanguagesResponse } from '@chrisb-dev/seasonal-shared-models';

export interface ILanguageState {
  isLoading: boolean;
  response: ILanguagesResponse;
}
