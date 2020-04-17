import { connect } from 'react-redux';
import {
  SelectRegion
} from './SelectRegion';
import {
  setRegion,
  selectCountryAndRegionsSelectGroup
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import {
  ISelectRegionDispatchProps,
  ISelectRegionInputProps
} from './SelectRegion.interface';
import { Dispatch } from 'redux';
import { IState } from '../../store';

const mapStateToProps = (state: IState): ISelectRegionInputProps => ({
  countrySelectGroups: selectCountryAndRegionsSelectGroup(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): ISelectRegionDispatchProps => ({
  onRegionSelected: (regionId: string) => dispatch(setRegion(regionId))
});

export const SelectRegionConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectRegion);
