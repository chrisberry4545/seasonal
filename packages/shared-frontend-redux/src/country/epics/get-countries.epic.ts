import { getCountries } from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { setError } from '../../error';
import { SharedSeasonalEpic } from '../../seasonal-epic.type';
import { getCountriesSuccess, GET_COUNTRIES_START } from '../country.actions';

export const getCountries$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(GET_COUNTRIES_START),
    switchMap(() =>
      getCountries()
        .then((countries) => getCountriesSuccess(countries))
        .catch((error: IBackendError) => setError(error))
    )
  )
);
