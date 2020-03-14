import { ActionsObservable, StateObservable, ofType } from 'redux-observable';

import {
  GO_BACK_FROM_FOOD_DETAILS,
  GO_TO_ABOUT_US_PAGE,
  SEND_FEEDBACK_DO_NOT_LIKE_APP,
  SEND_FEEDBACK_LIKE_APP,
  SEND_FEEDBACK_DO_NOT_WANT_TO_RATE,
  SEND_FEEDBACK_IMPROVEMENTS_SUCCESS,
  SEND_FEEDBACK_WANT_TO_RATE,
  CLOSE_FEEDBACK_POPUP,
  SHOW_FEEDBACK_POPUP
} from '../actions';

import {
  SELECT_SEASON,
  FOOD_DETAILS_SELECT_SEASON,
  OPEN_MENU,
  RECIPE_ITEM_CLICKED,
  FOOD_ITEM_CLICKED,
  SET_REGION,
  SET_CURRENT_FOOD_DETAILS_ON_DIET_CHANGE,
  SET_CURRENT_FOOD_DETAILS_SUCCESS,
  SET_DIET_TYPE,
  SHOW_LOCATION_SETTINGS_POPUP,
  SHOW_SEARCH_BAR,
  selectSettingsUserId,
  INIT_SETTINGS,
  USER_REGION_DETECTED
} from '@chrisb-dev/seasonal-shared-models';

import {
  map,
  filter,
  ignoreElements,
  withLatestFrom,
  tap
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { trackEvent, setTrackingUser } from '../../helpers';
import { IState } from '../../interfaces';
import { AppSeasonalEpic } from './seasonal-epic.type';

const ACTIONS_TO_TRACK = [
  SELECT_SEASON,
  FOOD_DETAILS_SELECT_SEASON,
  OPEN_MENU,
  GO_BACK_FROM_FOOD_DETAILS,
  GO_TO_ABOUT_US_PAGE,
  RECIPE_ITEM_CLICKED,
  FOOD_ITEM_CLICKED,
  SET_REGION,
  SET_CURRENT_FOOD_DETAILS_ON_DIET_CHANGE,
  SET_CURRENT_FOOD_DETAILS_SUCCESS,
  SET_DIET_TYPE,
  SHOW_LOCATION_SETTINGS_POPUP,
  SHOW_SEARCH_BAR,
  SEND_FEEDBACK_DO_NOT_LIKE_APP,
  SEND_FEEDBACK_LIKE_APP,
  SEND_FEEDBACK_DO_NOT_WANT_TO_RATE,
  SEND_FEEDBACK_WANT_TO_RATE,
  SEND_FEEDBACK_IMPROVEMENTS_SUCCESS,
  SHOW_FEEDBACK_POPUP,
  CLOSE_FEEDBACK_POPUP,
  USER_REGION_DETECTED
];

export const initTrackingUser$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_SETTINGS),
    withLatestFrom(state$),
    map(([, state]) => selectSettingsUserId(state)),
    filter((userId) => userId !== undefined),
    tap((userId) => setTrackingUser(userId!)),
    ignoreElements()
  )
);

export const trackActionEpic$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    filter(({ type }) => ACTIONS_TO_TRACK.includes(type)),
    map(({ type, ...rest }) => trackEvent(type, rest)),
    ignoreElements()
  )
);
