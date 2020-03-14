import { IState as ISharedState } from '@chrisb-dev/seasonal-shared-models';
import { IFeedbackState } from './feedback-state.interface';

export interface IState extends ISharedState  {
  feedback: IFeedbackState;
}
