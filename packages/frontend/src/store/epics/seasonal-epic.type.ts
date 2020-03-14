import { Action } from 'redux';
import { IState } from '../../interfaces';
import { SeasonalEpic } from '@chrisb-dev/seasonal-shared-frontend-utilities';

export type WebSeasonalEpic = SeasonalEpic<Action, IState>;
