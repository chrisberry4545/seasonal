import { IBadge } from './badge.interface';
import { IFood } from './food.interface';

export interface IHydratedBadge extends IBadge {
  food: IFood[];
}
