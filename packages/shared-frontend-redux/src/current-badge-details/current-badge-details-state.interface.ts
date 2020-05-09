import {
  IHydratedBadge
} from '@chrisb-dev/seasonal-shared-models';

export interface ICurrentBadgeDetailsState {
  isLoading: boolean;
  data?: IHydratedBadge;
}
