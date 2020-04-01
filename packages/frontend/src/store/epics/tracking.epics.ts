import { ActionsObservable } from 'redux-observable';

import {
  GO_TO_FOOD_TAB,
  GO_TO_RECIPES_TABS,
  GO_TO_WEB_VERSION
} from '../actions';

import {
  SELECT_SEASON,
  FOOD_DETAILS_SELECT_SEASON,
  OPEN_MENU,
  CLOSE_MENU,
  RECIPE_ITEM_CLICKED,
  FOOD_ITEM_CLICKED,
  SET_ERROR
} from '@chrisb-dev/seasonal-shared-frontend-redux';

import {
  map,
  filter,
  ignoreElements
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { WebSeasonalEpic } from './seasonal-epic.type';

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
  SET_ERROR
];

export const trackActionEpic$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    filter(({ type }) => ACTIONS_TO_TRACK.includes(type)),
    map(({ type }) => ga('send', 'event', type, type)),
    ignoreElements()
  )
);
