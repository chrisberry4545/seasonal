import { getSeasonWithRecipes } from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { DIET_TYPE, IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { setError } from '../../error';
import { SharedSeasonalEpic } from '../../seasonal-epic.type';
import { selectSettingsDietType, selectSettingsRegionId } from '../../settings';
import { IState } from '../../state.interface';
import { setCurrentSeasonWithRecipesSuccess, SET_CURRENT_SEASON_WITH_RECIPES_START } from '../current-season.actions';
import { selectCurrentSeasonIndex } from '../current-season.selectors';

export const getCurrentSeasonWithRecipesEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_CURRENT_SEASON_WITH_RECIPES_START),
    withLatestFrom(state$),
    map(([, state]) => ({
      dietType: selectSettingsDietType(state),
      regionId: selectSettingsRegionId(state),
      seasonIndex: selectCurrentSeasonIndex(state)
    })),
    switchMap(({ seasonIndex, regionId, dietType }) => (
      getSeasonWithRecipes(
        seasonIndex,
        dietType === DIET_TYPE.VEGETARIAN,
        dietType === DIET_TYPE.VEGAN,
        regionId
      )
        .then((recipesData) => setCurrentSeasonWithRecipesSuccess(recipesData))
        .catch((error: IBackendError) => setError(error))
    ))
  )
);
