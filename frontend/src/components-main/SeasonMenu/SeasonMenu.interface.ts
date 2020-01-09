import { IHydratedSeason } from '@chrisb-dev/seasonal-shared';

export interface ISeasonMenuInputProps {
  allBasicSeasonData: IHydratedSeason[] | undefined;
  currentSeasonIndex: number;
  isCurrentRouteAllSeasons: boolean;
  isLoading: boolean;
  isMenuOpen: boolean;
}

export interface ISeasonMenuDispatchProps {
  onClose: () => void;
  onSeasonSelected: (seasonIndex: number) => void;
  onAllSeasonsSelected: () => void;
}

export interface ISeasonMenuProps
  extends ISeasonMenuDispatchProps, ISeasonMenuInputProps {}
