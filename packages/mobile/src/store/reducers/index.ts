import {
  Action,
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import {
  allReducers
} from '@chrisb-dev/seasonal-shared-models';

import { IState } from '../../interfaces';

import {
  rootEpic
} from '../epics';

import { feedbackReducer } from './feedback.reducer';

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
