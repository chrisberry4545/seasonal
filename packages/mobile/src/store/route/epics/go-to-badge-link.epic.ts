import {
  BADGE_ITEM_CLICKED,
  IBadgeItemClicked,
  setCurrentBadgeDetailsStart
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ROUTES } from '../../../const';
import { navigate } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';

export const goToBadgeLink$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(BADGE_ITEM_CLICKED),
    map((action) => (action as IBadgeItemClicked).badgeItemId),
    tap((badgeItemId) => navigate(ROUTES.BADGE_DETAILS, {
      id: badgeItemId
    })),
    map((badgeItemId) => setCurrentBadgeDetailsStart(badgeItemId))
  )
);
