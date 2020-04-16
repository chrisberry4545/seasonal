import {
  Action,
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import {
  allReducers
} from '@chrisb-dev/seasonal-shared-frontend-redux';

import { IState } from './state.interface';

import {
  rootEpic
} from './epics';

import { feedbackReducer } from './feedback/feedback.reducer';

const epicMiddleware = createEpicMiddleware<Action, Action, IState, {}>();

export const store = createStore(
  combineReducers<IState>({
    ...allReducers,
    feedback: feedbackReducer
  }),
  undefined,
  applyMiddleware(
    epicMiddleware
  )
);
epicMiddleware.run(rootEpic);
