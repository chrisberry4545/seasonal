import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getAllSeasons
} from '@chrisb-dev/seasonal-shared-frontend-utilities';
import {
  SET_ALL_BASIC_SEASONS_START,
  setAllBasicSeasonsSuccess
} from '../all-basic-seasons.actions';
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
import { IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { SharedSeasonalEpic } from '../../seasonal-epic.type';
import { IState } from '../../state.interface';
import {
  selectSettingsRegionId, selectSettingsLanguage
} from '../../settings';

export const getAllBasicSeasons$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> =>
  actions$.pipe(
    ofType(SET_ALL_BASIC_SEASONS_START),
    withLatestFrom(state$),
    map(([, state]) => ({
      language: selectSettingsLanguage(state),
      regionId: selectSettingsRegionId(state)
    })),
    switchMap(({ language, regionId }) =>
      getAllSeasons(regionId, language)
        .then((seasonData) => setAllBasicSeasonsSuccess(seasonData))
        .catch((error: IBackendError) => setError(error))
    )
  );
