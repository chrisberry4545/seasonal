import { IBadge } from '@chrisb-dev/seasonal-shared-models';

export interface IFoodBadgesInputProps {
  badges: IBadge[] | undefined;
  isLoading: boolean;
}

export interface  IFoodBadgesDispatchProps {
  onBadgeClicked: (badgeId: string) => void;
}

export interface IFoodBadgesProps
  extends IFoodBadgesInputProps, IFoodBadgesDispatchProps {}
