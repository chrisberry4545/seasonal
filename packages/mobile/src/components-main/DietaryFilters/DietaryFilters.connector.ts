import { connect } from 'react-redux';
import {
  DietaryFilters
} from './DietaryFilters';

import { IState } from '../../store';
import {
  IDietaryFiltersInputProps,
  IDietaryFiltersDispatchProps
} from './DietaryFilters.interface';
import { Dispatch } from 'redux';
import {
  setDietType, selectSettingsDietType
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';

const mapStateToProps = (
  state: IState
): IDietaryFiltersInputProps => ({
  dietType: selectSettingsDietType(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IDietaryFiltersDispatchProps => ({
  update: (dietType: DIET_TYPE) => dispatch(setDietType(dietType))
});

export const DietaryFiltersConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(DietaryFilters);
