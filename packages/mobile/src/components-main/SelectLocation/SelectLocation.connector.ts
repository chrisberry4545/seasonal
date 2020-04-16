import { connect } from 'react-redux';
import {
  SelectLocation
} from './SelectLocation';
import {
  selectAreCountriesLoading
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import {
  ISelectLocationInputProps
} from './SelectLocation.interface';
import { IState } from '../../store';

const mapStateToProps = (state: IState): ISelectLocationInputProps => ({
  isLoading: selectAreCountriesLoading(state)
});

export const SelectLocationConnecter = connect(
  mapStateToProps
)(SelectLocation);
