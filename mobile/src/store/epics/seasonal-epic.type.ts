import { Action } from 'redux';
import { IState } from '@chrisb-dev/seasonal-shared';
import { SeasonalEpic } from '@chrisb-dev/seasonal-shared';

export type AppSeasonalEpic = SeasonalEpic<Action, IState>;
