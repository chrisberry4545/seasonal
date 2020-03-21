import { IGroupedSelectOptions } from '@chrisb-dev/seasonal-shared-models';

export interface ILocationSelectorInputProps {
  countryAndRegionSelectGroup: IGroupedSelectOptions[] | undefined;
}

export interface ILocationSelectorDispatchProps {
  setRegion: (regionId: string) => void;
}

export interface ILocationSelectorProps
  extends ILocationSelectorInputProps, ILocationSelectorDispatchProps {}
