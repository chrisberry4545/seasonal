import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

export interface ISideMenuInputProps {
  allBasicSeasonData: IHydratedSeason[] | undefined;
  currentSeasonIndex: number;
  isCurrentRouteAllSeasons: boolean;
  isCurrentRouteAboutUs: boolean;
  isCurrentRouteSettings: boolean;
  isCurrentRouteSeasonDetails: boolean;
  isLoading: boolean;
}

export interface ISideMenuDispatchProps {
  onSeasonSelected: (seasonIndex: number) => void;
  onGoToAboutUsPage: () => void;
  onGoToSettingsPage: () => void;
  onAllSeasonsSelected: () => void;
  onMenuFeedbackSelected: () => void;
}

export interface ISideMenuProps
  extends ISideMenuDispatchProps, ISideMenuInputProps {}
