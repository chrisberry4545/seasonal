import { connect } from 'react-redux';
import {
  BadgesTopSection
} from './BadgesTopSection';
import {
  goBackFromBadgeDetails
} from '../../store';
import {
  selectCurrentBadgeDetailsName,
  selectIsCurrentBadgeDetailsLoading
} from '@chrisb-dev/seasonal-shared-frontend-redux';

import { IState } from '../../store';
import {
  IBadgesTopSectionInputProps,
  IBadgesTopSectionDispatchProps
} from './BadgesTopSection.interface';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): IBadgesTopSectionInputProps => ({
  badgeName: selectCurrentBadgeDetailsName(state),
  isLoading: selectIsCurrentBadgeDetailsLoading(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IBadgesTopSectionDispatchProps => ({
  onGoBack: () => dispatch(goBackFromBadgeDetails())
});

export const BadgesTopSectionConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(BadgesTopSection);
