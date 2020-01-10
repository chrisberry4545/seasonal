import { IGroupedSelectOptions } from '@chrisb-dev/seasonal-shared';

export interface ISelectRegionInputProps {
  countrySelectGroups: IGroupedSelectOptions[] | undefined;
}

export interface ISelectRegionDispatchProps {
  onRegionSelected: (regionCode: string) => void;
}

export interface ISelectRegionProps
  extends ISelectRegionInputProps, ISelectRegionDispatchProps {}
