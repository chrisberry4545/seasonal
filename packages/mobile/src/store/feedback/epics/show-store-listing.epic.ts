import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { ignoreElements, tap } from 'rxjs/operators';
import { STORE_URL } from '../../../config';
import { goToLinkUrl } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';
import { SEND_FEEDBACK_WANT_TO_RATE } from '../feedback.actions';

export const showStoreListing$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(SEND_FEEDBACK_WANT_TO_RATE),
    tap(() => goToLinkUrl(STORE_URL)),
    ignoreElements()
  )
);
