import { getSeasonWithFood } from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { setError } from '../../error';
import { SharedSeasonalEpic } from '../../seasonal-epic.type';
import { selectSettingsRegionId, selectSettingsLanguage } from '../../settings';
import { IState } from '../../state.interface';
import { setCurrentSeasonWithFoodSuccess, SET_CURRENT_SEASON_WITH_FOOD_START } from '../current-season.actions';
import { selectCurrentSeasonIndex } from '../current-season.selectors';

export const getCurrentSeasonWithFood$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_CURRENT_SEASON_WITH_FOOD_START),
    withLatestFrom(state$),
    map(([, state]) => ({
      language: selectSettingsLanguage(state),
      regionId: selectSettingsRegionId(state),
      seasonIndex: selectCurrentSeasonIndex(state)
    })),
    switchMap(({language, regionId, seasonIndex}) => (
      getSeasonWithFood(seasonIndex, regionId, language))
        .then((foodData) => setCurrentSeasonWithFoodSuccess(foodData))
        .catch((error: IBackendError) => setError(error))
    )
  )
);
