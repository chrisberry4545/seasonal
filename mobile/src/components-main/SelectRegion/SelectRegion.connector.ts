import { connect } from 'react-redux';
import {
  SelectRegion
} from './SelectRegion';
import {
  setRegion,
  selectCountryAndRegionsSelectGroup
} from '@chrisb-dev/seasonal-shared';
import {
  ISelectRegionDispatchProps,
  ISelectRegionInputProps
} from './SelectRegion.interface';
import { Dispatch } from 'redux';
import { IState } from '../../interfaces';

const mapStateToProps = (state: IState): ISelectRegionInputProps => ({
  countrySelectGroups: selectCountryAndRegionsSelectGroup(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): ISelectRegionDispatchProps => ({
  onRegionSelected: (regionCode: string) => dispatch(setRegion(regionCode))
});

export const SelectRegionConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectRegion);
