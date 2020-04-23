import { GO_TO_ALL_SEASONS_VIEW, setAllSeasonsWithFoodStart } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';
import { ROUTES } from '../../../const';
import { navigate } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';

export const goToAllSeasonsView$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(GO_TO_ALL_SEASONS_VIEW),
    tap(() => navigate(ROUTES.ALL_SEASONS)),
    mapTo(setAllSeasonsWithFoodStart())
  )
);
