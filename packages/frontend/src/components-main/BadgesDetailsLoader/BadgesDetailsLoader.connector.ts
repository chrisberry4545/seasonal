import { connect } from 'react-redux';
import {
  BadgesDetailsLoader
} from './BadgesDetailsLoader';
import {
  selectIsFoodDataOrBasicSeasonsLoading
} from '@chrisb-dev/seasonal-shared-frontend-redux';

import { IState } from '../../store';
import {
  IBadgesDetailsLoaderInputProps
} from './BadgesDetailsLoader.interface';

const mapStateToProps = (
  state: IState
): IBadgesDetailsLoaderInputProps => ({
  isLoading: selectIsFoodDataOrBasicSeasonsLoading(state)
});

export const BadgesDetailsLoaderConnecter = connect(
  mapStateToProps
)(BadgesDetailsLoader);
