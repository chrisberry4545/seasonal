import { ActionsObservable } from 'redux-observable';

import {
  GO_TO_FOOD_TAB,
  GO_TO_RECIPES_TABS
} from '../../web-ui/web-ui.actions';

import {
  GO_TO_WEB_VERSION
} from '../../route/route.actions';

import {
  SELECT_SEASON,
  FOOD_DETAILS_SELECT_SEASON,
  OPEN_MENU,
  CLOSE_MENU,
  RECIPE_ITEM_CLICKED,
  FOOD_ITEM_CLICKED,
  BADGE_DETAILS_SELECT_FOOD,
  SET_ERROR
} from '@chrisb-dev/seasonal-shared-frontend-redux';

import {
  map,
  filter,
  ignoreElements
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { WebSeasonalEpic } from '../../seasonal-epic.type';
import { getAnalytics } from '../../../helpers/functions/get-analytics';

const ACTIONS_TO_TRACK = [
  SELECT_SEASON,
  FOOD_DETAILS_SELECT_SEASON,
  OPEN_MENU,
  CLOSE_MENU,
  GO_TO_FOOD_TAB,
  GO_TO_RECIPES_TABS,
  GO_TO_WEB_VERSION,
  RECIPE_ITEM_CLICKED,
  FOOD_ITEM_CLICKED,
  BADGE_DETAILS_SELECT_FOOD,
  SET_ERROR
];

export const trackAction$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    filter(({ type }) => ACTIONS_TO_TRACK.includes(type)),
    map(({ type }) => getAnalytics()('send', 'event', type, type)),
    ignoreElements()
  )
);
