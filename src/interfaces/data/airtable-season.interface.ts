import {
  IBaseSeason
} from './base-season.interface';

export interface IAirtableSeason extends IBaseSeason {
  food: string[];
  recipes: string[];
}
