import { initSettings, INIT_APP, ISettingsState } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getStoredData } from '../../../helpers';
import { WebSeasonalEpic } from '../../seasonal-epic.type';
import { settingsStorageKey } from './settings-storage-key';

export const getStoredSettings$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_APP),
    map(() => getStoredData<ISettingsState>(settingsStorageKey)),
    map((settings) => initSettings(
      settings
      ? {
        ...settings,
        timesAppStarted: (settings.timesAppStarted || 0) + 1
      }
      :
      {
        dietType: DIET_TYPE.ALL,
        isListViewShown: false,
        selectedRegionId: undefined,
        timesAppStarted: 1
      })
    )
  )
);
