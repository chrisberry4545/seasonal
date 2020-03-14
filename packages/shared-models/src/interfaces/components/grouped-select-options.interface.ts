import { ISelectOption } from './select-options.interface';

export interface IGroupedSelectOptions {
  groupName: string;
  selectOptions: ISelectOption[];
}
