import {
  IUiState
} from './ui';
import {
  IAllBasicSeasonsState
} from './all-basic-seasons';
import {
  ICurrentSeasonState
} from './current-season';

import {
  ICurrentFoodDetailsState
} from './current-food-details';
import {
  IAllSeasonState
} from './all-seasons';
import {
  ISettingsState
} from './settings';
import {
  ICountryState
} from './country';
import {
  IErrorState
} from './error';

export interface IState {
  allBasicSeasonData: IAllBasicSeasonsState;
  allSeasons: IAllSeasonState;
  countryData: ICountryState;
  currentFoodDetailsData: ICurrentFoodDetailsState;
  currentSeasonData: ICurrentSeasonState;
  error: IErrorState;
  settings: ISettingsState;
  ui: IUiState;
}
