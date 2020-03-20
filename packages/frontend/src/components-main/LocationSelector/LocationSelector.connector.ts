import { connect } from 'react-redux';
import {
  LocationSelector
} from './LocationSelector';
import {
  setRegion,
  selectAllRegions,
  selectCurrentRegion
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import {
  ILocationSelectorDispatchProps,
  ILocationSelectorInputProps
} from './LocationSelector.interface';
import { Dispatch } from 'redux';
import { IState } from '../../interfaces';

const mapStateToProps = (state: IState): ILocationSelectorInputProps => ({
  regions: selectAllRegions(state),
  selectedRegion: selectCurrentRegion(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): ILocationSelectorDispatchProps => ({
  setRegion: (regionId: string) => dispatch(setRegion(regionId))
});

export const LocationSelectorConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationSelector);
