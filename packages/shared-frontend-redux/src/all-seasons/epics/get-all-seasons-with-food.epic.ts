import { ofType, ActionsObservable, StateObservable } from 'redux-observable';
import {
  getAllSeasonsWithFood
} from '@chrisb-dev/seasonal-shared-frontend-utilities';
import {
  SET_ALL_SEASONS_WITH_FOOD_START,
  setAllSeasonsWithFoodSuccess
} from '../all-seasons.actions';
import {
  setError
} from '../../error';
import {
  map,
  switchMap,
  withLatestFrom
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from '../../seasonal-epic.type';
import { IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { IState } from '../../state.interface';
import { selectSettingsRegionId, selectSettingsLanguage } from '../../settings';

export const getAllSeasonsWithFood$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> =>
  actions$.pipe(
    ofType(SET_ALL_SEASONS_WITH_FOOD_START),
    withLatestFrom(state$),
    map(([, state]) => ({
      language: selectSettingsLanguage(state),
      regionId: selectSettingsRegionId(state)
    })),
    switchMap(({ language, regionId }) =>
      getAllSeasonsWithFood(regionId, language)
        .then((seasonData) => setAllSeasonsWithFoodSuccess(seasonData))
        .catch((error: IBackendError) => setError(error))
    )
  );
