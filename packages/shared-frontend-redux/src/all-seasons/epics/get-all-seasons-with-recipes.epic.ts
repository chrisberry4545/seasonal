import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getAllSeasonsWithRecipes
} from '@chrisb-dev/seasonal-shared-frontend-utilities';
import {
  SET_ALL_SEASONS_WITH_RECIPES_START,
  setAllSeasonsWithRecipesSuccess
} from '../all-seasons.actions';
import {
  setError
} from '../../error';

import {
  map,
  switchMap,
  withLatestFrom
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from '../../seasonal-epic.type';
import { IBackendError, DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';
import { IState } from '../../state.interface';
import { selectSettingsRegionId, selectSettingsDietType, selectSettingsLanguage, SET_LANGUAGE_SUCCESS } from '../../settings';

export const getAllSeasonsWithRecipes$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> =>
  actions$.pipe(
    ofType(
      SET_ALL_SEASONS_WITH_RECIPES_START,
      SET_LANGUAGE_SUCCESS
    ),
    withLatestFrom(state$),
    map(([, state]) => ({
      dietType: selectSettingsDietType(state),
      language: selectSettingsLanguage(state),
      regionId: selectSettingsRegionId(state)
    })),
    switchMap(({ dietType, language, regionId }) =>
      getAllSeasonsWithRecipes(
        dietType === DIET_TYPE.VEGETARIAN,
        dietType === DIET_TYPE.VEGAN,
        regionId,
        language
      )
        .then((seasonData) => setAllSeasonsWithRecipesSuccess(seasonData))
        .catch((error: IBackendError) => setError(error))
    )
  );
