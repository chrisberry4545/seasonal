import { connect } from 'react-redux';
import {
  SeasonMenu
} from './SeasonMenu';
import {
  selectIsMenuOpen,
  closeMenu,
  selectAllBasicSeasons,
  selectIsBasicSeasonsLoading,
  selectSeason,
  selectCurrentSeasonIndex,
  goToAllSeasonsView,
  goToSettingsPage
} from '@chrisb-dev/seasonal-shared-frontend-redux';

import { IState } from '../../interfaces';
import {
  ISeasonMenuInputProps,
  ISeasonMenuDispatchProps
} from './SeasonMenu.interface';
import { Dispatch } from 'redux';

import { selectIsCurrentRouteAllSeasons, selectIsCurrentRouteSettings } from '../../store';

const mapStateToProps = (
  state: IState
): ISeasonMenuInputProps => ({
  allBasicSeasonData: selectAllBasicSeasons(state),
  currentSeasonIndex: selectCurrentSeasonIndex(state),
  isCurrentRouteAllSeasons: selectIsCurrentRouteAllSeasons(state),
  isCurrentRouteSettings: selectIsCurrentRouteSettings(state),
  isLoading: selectIsBasicSeasonsLoading(state),
  isMenuOpen: selectIsMenuOpen(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): ISeasonMenuDispatchProps => ({
  onAllSeasonsSelected: () => dispatch(goToAllSeasonsView()),
  onClose: () => dispatch(closeMenu()),
  onSeasonSelected: (
    seasonIndex: number
  ) => dispatch(selectSeason(seasonIndex)),
  onSettingsSelected: () => dispatch(goToSettingsPage())
});

export const SeasonMenuConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SeasonMenu);
