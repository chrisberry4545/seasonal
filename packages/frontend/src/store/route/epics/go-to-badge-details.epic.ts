import {
  BADGE_ITEM_CLICKED,
  IBadgeItemClicked,
  setCurrentBadgeDetailsStart
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WebSeasonalEpic } from '../../seasonal-epic.type';

export const goToBadgeDetails$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(BADGE_ITEM_CLICKED),
    map((action) => (
      setCurrentBadgeDetailsStart((action as IBadgeItemClicked).badgeItemId)
    ))
  )
);
