import { initSettings, INIT_APP, ISettingsState } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { getStoredData } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';
import { settingsStorageKey } from './settings-storage-key';
import { getLocale } from '../../../helpers/get-locale';

export const getStoredSettings$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_APP),
    switchMap(() => getStoredData<ISettingsState>(settingsStorageKey)),
    map((settings) => initSettings(
      settings
      ? {
        ...settings,
        language: settings.language || getLocale(),
        timesAppStarted: (settings.timesAppStarted || 0) + 1
      }
      :
      {
        dietType: DIET_TYPE.ALL,
        isListViewShown: false,
        language: getLocale(),
        selectedRegionId: undefined,
        timesAppStarted: 1
      })
    )
  )
);
