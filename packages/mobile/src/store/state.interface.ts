import { IState as ISharedState } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { IFeedbackState } from './feedback/feedback-state.interface';

export interface IState extends ISharedState  {
  feedback: IFeedbackState;
}
