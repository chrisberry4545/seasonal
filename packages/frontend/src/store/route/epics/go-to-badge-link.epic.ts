import {
  BADGE_ITEM_CLICKED,
  IBadgeItemClicked
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { push } from 'connected-react-router';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BADGE_DETAILS_URL } from '../../../const';
import { WebSeasonalEpic } from '../../seasonal-epic.type';

export const goToBadgeLink$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(BADGE_ITEM_CLICKED),
    map((action) => (
      push(`${BADGE_DETAILS_URL}/${(action as IBadgeItemClicked).badgeItemId}`)
    ))
  )
);
