import { Action } from 'redux';
import { IState } from './state.interface';
import { SeasonalEpic } from '@chrisb-dev/seasonal-shared-frontend-redux';

export type AppSeasonalEpic = SeasonalEpic<Action, IState>;
