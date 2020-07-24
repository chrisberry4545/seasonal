import {
  FOOD_DETAILS_SELECT_SEASON,
  FOOD_ITEM_CLICKED,
  BADGE_DETAILS_SELECT_FOOD,
  OPEN_MENU,
  RECIPE_ITEM_CLICKED,
  SELECT_SEASON,
  SET_CURRENT_FOOD_DETAILS_ON_DIET_CHANGE,
  SET_CURRENT_FOOD_DETAILS_SUCCESS,
  SET_DIET_TYPE,
  SET_ERROR,
  SET_REGION,
  SET_LANGUAGE,
  SHOW_LOCATION_SETTINGS_POPUP,
  SHOW_SEARCH_BAR,
  TOGGLE_LIST_VIEW,
  USER_REGION_DETECTED
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, ignoreElements, map } from 'rxjs/operators';
import { trackEvent } from '../../../helpers';
import {
  CLOSE_FEEDBACK_POPUP,
  SEND_FEEDBACK_DO_NOT_LIKE_APP,
  SEND_FEEDBACK_DO_NOT_WANT_TO_RATE,
  SEND_FEEDBACK_IMPROVEMENTS_SUCCESS,
  SEND_FEEDBACK_LIKE_APP,
  SEND_FEEDBACK_WANT_TO_RATE,
  SHOW_FEEDBACK_POPUP
} from '../../feedback/feedback.actions';
import { GO_BACK_FROM_FOOD_DETAILS, GO_TO_ABOUT_US_PAGE } from '../../route';
import { AppSeasonalEpic } from '../../seasonal-epic.type';

const ACTIONS_TO_TRACK = [
  SELECT_SEASON,
  FOOD_DETAILS_SELECT_SEASON,
  OPEN_MENU,
  GO_BACK_FROM_FOOD_DETAILS,
  GO_TO_ABOUT_US_PAGE,
  RECIPE_ITEM_CLICKED,
  FOOD_ITEM_CLICKED,
  BADGE_DETAILS_SELECT_FOOD,
  SET_REGION,
  SET_LANGUAGE,
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
  USER_REGION_DETECTED,
  SET_ERROR,
  TOGGLE_LIST_VIEW
];

export const trackAction$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    filter(({ type }) => ACTIONS_TO_TRACK.includes(type)),
    map(({ type, ...rest }) => trackEvent(type, rest)),
    ignoreElements()
  )
);
