import { IState as SharedState } from '@chrisb-dev/seasonal-shared';
import { IWebUiState } from './web-ui-state.interface';

export interface IState extends SharedState {
  router: any;
  webUi: IWebUiState;
}
