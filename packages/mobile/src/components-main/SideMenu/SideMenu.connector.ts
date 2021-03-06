import { connect } from 'react-redux';
import {
  SideMenu
} from './SideMenu';
import {
  selectAllBasicSeasons,
  selectIsBasicSeasonsLoading,
  selectSeason,
  selectCurrentSeasonIndex,
  goToAllSeasonsView,
  goToSettingsPage
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import {
  goToAboutUsPage,
  onMenuFeedbackSelected
} from '../../store';

import { IState } from '../../store';
import {
  ISideMenuInputProps,
  ISideMenuDispatchProps
} from './SideMenu.interface';
import { Dispatch } from 'redux';
import {
  getIsCurrentRouteAllSeasons,
  getIsCurrentRouteAboutUs,
  getIsCurrentRouteSeasonDetails,
  getIsCurrentRouteSettings
} from '../../helpers';

const mapStateToProps = (
  state: IState
): ISideMenuInputProps => ({
  allBasicSeasonData: selectAllBasicSeasons(state),
  currentSeasonIndex: selectCurrentSeasonIndex(state),
  isCurrentRouteAboutUs: getIsCurrentRouteAboutUs(),
  isCurrentRouteAllSeasons: getIsCurrentRouteAllSeasons(),
  isCurrentRouteSeasonDetails: getIsCurrentRouteSeasonDetails(),
  isCurrentRouteSettings: getIsCurrentRouteSettings(),
  isLoading: selectIsBasicSeasonsLoading(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): ISideMenuDispatchProps => ({
  onAllSeasonsSelected: () => dispatch(goToAllSeasonsView()),
  onGoToAboutUsPage: () => dispatch(goToAboutUsPage()),
  onGoToSettingsPage: () => dispatch(goToSettingsPage()),
  onMenuFeedbackSelected: () => dispatch(onMenuFeedbackSelected()),
  onSeasonSelected: (
    seasonIndex: number
  ) => dispatch(selectSeason(seasonIndex))
});

export const SideMenuConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
