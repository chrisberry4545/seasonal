import { INIT_APP } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { getStoredData } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';
import { IFeedbackState } from '../feedback-state.interface';
import { initFeedbackState } from '../feedback.actions';
import { feedbackStorageKey } from './feedback-storage-key';

export const getStoredFeedbackSettings$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_APP),
    switchMap(() => getStoredData<IFeedbackState>(feedbackStorageKey)),
    map((feedbackState) => initFeedbackState(feedbackState))
  )
);
