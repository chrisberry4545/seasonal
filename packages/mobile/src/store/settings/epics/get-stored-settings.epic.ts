import { initSettings, INIT_APP, ISettingsState } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { DIET_TYPE, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { getStoredData } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';
import { settingsStorageKey } from './settings-storage-key';
import * as Localization from 'expo-localization';

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
        language: settings.language || Localization.locale as LANGUAGES,
        timesAppStarted: (settings.timesAppStarted || 0) + 1
      }
      :
      {
        dietType: DIET_TYPE.ALL,
        isListViewShown: false,
        language: Localization.locale as LANGUAGES,
        selectedRegionId: undefined,
        timesAppStarted: 1
      })
    )
  )
);
