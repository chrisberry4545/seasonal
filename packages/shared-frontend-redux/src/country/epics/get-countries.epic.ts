import { getCountries } from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { switchMap, withLatestFrom, map } from 'rxjs/operators';
import { setError } from '../../error';
import { SharedSeasonalEpic } from '../../seasonal-epic.type';
import { getCountriesSuccess, GET_COUNTRIES_START } from '../country.actions';
import { IState } from '../../state.interface';
import { selectSettingsLanguage } from '../../settings';

export const getCountries$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(GET_COUNTRIES_START),
    withLatestFrom(state$),
    map(([, state]) => selectSettingsLanguage(state)),
    switchMap((language) =>
      getCountries(language)
        .then((countries) => getCountriesSuccess(countries))
        .catch((error: IBackendError) => setError(error))
    )
  )
);
