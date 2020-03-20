import { IRegion } from '@chrisb-dev/seasonal-shared-models';

export interface ILocationSelectorInputProps {
  regions: IRegion[] | undefined;
  selectedRegion: IRegion | undefined;
}

export interface ILocationSelectorDispatchProps {
  setRegion: (regionId: string) => void;
}

export interface ILocationSelectorProps
  extends ILocationSelectorInputProps, ILocationSelectorDispatchProps {}
