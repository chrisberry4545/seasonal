import {
  IBaseSeason
} from './base-season.interface';

import {
  IFood
} from './food.interface';

import {
  IRecipe
} from './recipe.interface';

export interface IHydratedSeason extends IBaseSeason {
  food?: IFood[];
  recipes?: IRecipe[];
}
