import { connect } from 'react-redux';
import {
  SelectLocation
} from './SelectLocation';
import {
  selectAreCountriesLoading
} from '@chrisb-dev/seasonal-shared';
import {
  ISelectLocationInputProps
} from './SelectLocation.interface';
import { IState } from '../../interfaces';

const mapStateToProps = (state: IState): ISelectLocationInputProps => ({
  isLoading: selectAreCountriesLoading(state)
});

export const SelectLocationConnecter = connect(
  mapStateToProps
)(SelectLocation);
