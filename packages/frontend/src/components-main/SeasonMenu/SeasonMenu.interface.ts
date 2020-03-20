import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

export interface ISeasonMenuInputProps {
  allBasicSeasonData: IHydratedSeason[] | undefined;
  currentSeasonIndex: number;
  isCurrentRouteAllSeasons: boolean;
  isCurrentRouteSettings: boolean;
  isLoading: boolean;
  isMenuOpen: boolean;
}

export interface ISeasonMenuDispatchProps {
  onClose: () => void;
  onSeasonSelected: (seasonIndex: number) => void;
  onAllSeasonsSelected: () => void;
  onSettingsSelected: () => void;
}

export interface ISeasonMenuProps
  extends ISeasonMenuDispatchProps, ISeasonMenuInputProps {}
