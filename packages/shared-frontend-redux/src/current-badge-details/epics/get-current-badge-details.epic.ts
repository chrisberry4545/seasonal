import { getBadgeDetailsData } from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { setError } from '../../error';
import { SharedSeasonalEpic } from '../../seasonal-epic.type';
import { selectSettingsRegionId, selectSettingsLanguage } from '../../settings';
import { IState } from '../../state.interface';
import { IBadgeItemClicked } from '../../ui';
import {
  setCurrentBadgeDetailsSuccess,
  SET_CURRENT_BADGE_DETAILS_START,
  SET_CURRENT_BADGE_DETAILS_ON_CHANGE
} from '../current-badge-details.actions';

export const getCurrentBadgeDetails$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SET_CURRENT_BADGE_DETAILS_START,
      SET_CURRENT_BADGE_DETAILS_ON_CHANGE
    ),
    withLatestFrom(state$),
    map(([action, state]: [Action, IState]) => ({
      badgeItemId: (action as IBadgeItemClicked).badgeItemId,
      language: selectSettingsLanguage(state),
      regionId: selectSettingsRegionId(state)
    })),
    switchMap(({ badgeItemId, language, regionId }) => (
      getBadgeDetailsData(
        badgeItemId,
        regionId,
        language
      )
      .then((currentBadgeData) => setCurrentBadgeDetailsSuccess(currentBadgeData))
      .catch((error: IBackendError) => setError(error))
    ))
  )
);
