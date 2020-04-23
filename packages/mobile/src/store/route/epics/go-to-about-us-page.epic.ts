import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { ignoreElements, tap } from 'rxjs/operators';
import { GO_TO_ABOUT_US_PAGE } from '..';
import { ROUTES } from '../../../const';
import { navigate } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';

export const goToAboutUsPage$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(GO_TO_ABOUT_US_PAGE),
    tap(() => navigate(ROUTES.ABOUT_US)),
    ignoreElements()
  )
);
