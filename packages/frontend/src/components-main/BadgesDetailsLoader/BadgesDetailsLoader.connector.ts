import { connect } from 'react-redux';
import {
  BadgesDetailsLoader
} from './BadgesDetailsLoader';
import {
  selectIsCurrentBadgeDetailsLoading
} from '@chrisb-dev/seasonal-shared-frontend-redux';

import { IState } from '../../store';
import {
  IBadgesDetailsLoaderInputProps
} from './BadgesDetailsLoader.interface';

const mapStateToProps = (
  state: IState
): IBadgesDetailsLoaderInputProps => ({
  isLoading: selectIsCurrentBadgeDetailsLoading(state)
});

export const BadgesDetailsLoaderConnecter = connect(
  mapStateToProps
)(BadgesDetailsLoader);
