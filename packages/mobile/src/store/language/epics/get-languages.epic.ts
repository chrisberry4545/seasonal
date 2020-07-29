import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppSeasonalEpic } from '../../seasonal-epic.type';
import { SET_LANGUAGES_START, setLanguagesSuccess } from '../language.actions';
import { getAllLanguages } from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { setError } from '@chrisb-dev/seasonal-shared-frontend-redux';

export const getLanguages$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_LANGUAGES_START),
    switchMap(() =>
      getAllLanguages()
        .then((response) => setLanguagesSuccess(response))
        .catch((error: IBackendError) => setError(error))
    )
  )
);
