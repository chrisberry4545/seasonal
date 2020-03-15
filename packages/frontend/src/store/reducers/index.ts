import {
  Action,
  applyMiddleware,
  combineReducers,
  createStore,
  compose
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import {
  allReducers
} from '@chrisb-dev/seasonal-shared-frontend-redux';

import { webUiReducer } from './web-ui.reducer';

import {
  rootEpic
} from '../epics';

import { IState } from '../../interfaces';

import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';

const epicMiddleware = createEpicMiddleware<Action, Action, IState, {}>();
export const storeHistory = createHashHistory();

export const store = createStore(
  combineReducers({
    ...allReducers,
    router: connectRouter(storeHistory),
    webUi: webUiReducer
  }),
  compose(
    applyMiddleware(
      routerMiddleware(storeHistory),
      epicMiddleware
    )
  )
);
epicMiddleware.run(rootEpic);
