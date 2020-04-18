import { IState as SharedState } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { IWebUiState } from './web-ui/web-ui-state.interface';

export interface IState extends SharedState {
  router: any;
  webUi: IWebUiState;
}
