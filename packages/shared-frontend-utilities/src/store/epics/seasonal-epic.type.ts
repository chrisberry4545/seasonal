import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { IState } from '@chrisb-dev/seasonal-shared-models';

export type SeasonalEpic<
  TInputAction extends Action,
  TState extends IState
> = Epic<TInputAction, TInputAction, TState, {}>;

export type SharedSeasonalEpic = SeasonalEpic<Action, IState>;
