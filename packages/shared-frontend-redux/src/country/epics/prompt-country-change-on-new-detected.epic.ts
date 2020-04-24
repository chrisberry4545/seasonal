import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { SharedSeasonalEpic } from '../../seasonal-epic.type';
import { selectSettingsRegionId } from '../../settings';
import { IState } from '../../state.interface';
import { ISetRegionAction, setUserRegionDetected, USER_REGION_DETECTED } from '../country.actions';

export const promptCountryChangeOnNewDetected$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(USER_REGION_DETECTED),
    withLatestFrom(state$),
    map(([action, state]) => ({
      detectedRegion: (action as ISetRegionAction).regionId,
      settingsRegionId: selectSettingsRegionId(state)
    })),
    filter(({ detectedRegion, settingsRegionId }) => (
      detectedRegion !== settingsRegionId
    )),
    map(({ detectedRegion }) => setUserRegionDetected(detectedRegion))
  )
);
