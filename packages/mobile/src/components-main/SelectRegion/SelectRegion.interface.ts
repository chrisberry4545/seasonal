import { IGroupedSelectOptions } from '@chrisb-dev/seasonal-shared-models';

export interface ISelectRegionInputProps {
  countrySelectGroups: IGroupedSelectOptions[] | undefined;
}

export interface ISelectRegionDispatchProps {
  onRegionSelected: (regionId: string) => void;
}

export interface ISelectRegionProps
  extends ISelectRegionInputProps, ISelectRegionDispatchProps {}
