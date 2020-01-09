import { AppSeasonalEpic } from './seasonal-epic.type';
import { Action } from 'redux';
import { StateObservable, ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import {
  GO_BACK_FROM_FOOD_DETAILS,
  GO_TO_ABOUT_US_PAGE,
  GO_TO_SETTINGS_PAGE,
  GO_BACK_FROM_SETTINGS_PAGE
} from '../actions';
import {
  RECIPE_ITEM_CLICKED,
  IRecipeItemClicked,
  FOOD_ITEM_CLICKED,
  CLOSE_MENU,
  OPEN_MENU,
  FOOD_DETAILS_SELECT_SEASON,
  SELECT_SEASON,
  IFoodItemClicked,
  setCurrentFoodDetailsStart,
  IState,
  selectCurrentSeasonRecipesById,
  GO_TO_ALL_SEASONS_VIEW,
  setAllSeasonsWithFoodStart,
  FOOD_DETAILS_SELECT_RECIPE,
  SET_REGION
} from '@chrisb-dev/seasonal-shared';
import { withLatestFrom, map, tap, ignoreElements, mapTo } from 'rxjs/operators';
import { goToLinkUrl } from '../../helpers';
import { navigate, closeDrawer, openDrawer, navigateBackOne } from '../../services';
import { ROUTES } from '../../const';

export const goToRecipeLink$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      FOOD_DETAILS_SELECT_RECIPE,
      RECIPE_ITEM_CLICKED
    ),
    withLatestFrom(state$),
    map(([
      action,
      state
    ]) => selectCurrentSeasonRecipesById(
        (action as IRecipeItemClicked).recipeItemId
      )(state)
    ),
    tap((recipe) => {
      if (recipe) {
        goToLinkUrl(recipe.linkUrl);
      }
    }),
    ignoreElements()
  )
);

export const goToFoodLink$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(FOOD_ITEM_CLICKED),
    map((action) => (action as IFoodItemClicked).foodItemId),
    tap((foodItemId) => navigate(ROUTES.FOOD_DETAILS, {
      id: foodItemId
    })),
    map((foodItemId) => setCurrentFoodDetailsStart(foodItemId))
  )
);

export const goToAboutUsPage$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(GO_TO_ABOUT_US_PAGE),
    tap(() => navigate(ROUTES.ABOUT_US)),
    ignoreElements()
  )
);

export const goToSettingsPage$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(GO_TO_SETTINGS_PAGE),
    tap(() => navigate(ROUTES.SETTINGS)),
    ignoreElements()
  )
);

export const goBack$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SET_REGION,
      GO_BACK_FROM_FOOD_DETAILS,
      GO_BACK_FROM_SETTINGS_PAGE
    ),
    tap(() => navigateBackOne()),
    ignoreElements()
  )
);

export const goToFoodTable$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SELECT_SEASON,
      FOOD_DETAILS_SELECT_SEASON
    ),
    tap(() => navigate(ROUTES.SEASON_DETAILS)),
    ignoreElements()
  )
);

export const goToAllSeasonsView$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(GO_TO_ALL_SEASONS_VIEW),
    tap(() => navigate(ROUTES.ALL_SEASONS)),
    mapTo(setAllSeasonsWithFoodStart())
  )
);

export const closeMenu$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      GO_TO_ABOUT_US_PAGE,
      SELECT_SEASON,
      CLOSE_MENU
    ),
    tap(() => closeDrawer()),
    ignoreElements()
  )
);

export const openMenu$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(OPEN_MENU),
    tap(() => openDrawer()),
    ignoreElements()
  )
);
