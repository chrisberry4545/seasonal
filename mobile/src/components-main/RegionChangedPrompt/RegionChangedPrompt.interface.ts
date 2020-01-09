import { IRegion } from '@chrisb-dev/seasonal-shared';

export interface IRegionChangedPromptInputProps {
  isVisible: boolean;
  currentRegion: IRegion | undefined;
}

export interface IRegionChangedPromptDispatchProps {
  showRegionSelector: () => void;
  hideRegionChangedPrompt: () => void;
}

export interface IRegionChangedPromptProps
  extends IRegionChangedPromptInputProps, IRegionChangedPromptDispatchProps {}
